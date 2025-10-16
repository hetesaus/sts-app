const canvas = document.getElementById("map");
const ctx = canvas.getContext("2d");
const popupContainer = document.getElementById("popup-container");
const actNumber = Utils.getQueryParam("act", "1");

const nodeRadius = 35;
const bossWidth = 400;
const bossHeight = 200;
const bossPadding = 100;

let currentNode = null;
let popupNode = null;
let popupTimeout = null;
let levels = [];
let nodeLookup = {};
let connections = [];

// Pan & zoom
let panX = 0, panY = 0, zoom = 1;
let isDragging = false, startDragX, startDragY;

// Preload images
const preloadedImages = {};
let loadedCount = 0;
const totalImages = Object.keys(Data.mapNodeImages).length;

for (let key in Data.mapNodeImages) {
	const img = new Image();
	img.src = Data.mapNodeImages[key];
	img.onload = () => { loadedCount++; if (loadedCount === totalImages) drawAll(); };
	preloadedImages[key] = img;
}

// Resize canvas
function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	fitMapInView();
	drawAll();
}
window.addEventListener("resize", resizeCanvas);

// Node class
class Node {
	constructor(id, x, y, step, color, type = null, customWidth = null, customHeight = null) {
		this.id = id;
		this.x = x;
		this.y = y;
		this.step = step;
		this.color = color;
		this.type = type;
		this.image = preloadedImages[this.type || "empty"];
		this.customWidth = customWidth;
		this.customHeight = customHeight;
	}

	setType(type, customWidth = null, customHeight = null) {
		this.type = type;
		this.image = preloadedImages[this.type] || preloadedImages["empty"];
		this.customWidth = customWidth;
		this.customHeight = customHeight;
	}

	draw() {
		const img = preloadedImages[this.type || "empty"];
		
		if (!img || !img.complete) {
			return;
		}
		
		const width = this.customWidth || nodeRadius * 2;
		const height = this.customHeight || nodeRadius * 2;
		
		ctx.drawImage(img, this.x - width / 2, this.y - height / 2, width, height);
		
		if (this === currentNode) {
			ctx.save();
			ctx.lineWidth = 3 / zoom;
			ctx.strokeStyle = "green";

			// Use ellipse for round nodes, rectangle for boss/custom sized nodes
			if (this.customWidth && this.customHeight) {
				ctx.strokeRect(this.x - width / 2, this.y - height / 2, width, height);
			} else {
				ctx.beginPath();
				ctx.arc(this.x, this.y, nodeRadius + 6, 0, Math.PI * 2);
				ctx.stroke();
			}

			ctx.restore();
		}
	}
}

// Build levels
function buildLevels(data) {
	const spacingX = 140;
	const spacingY = 120;

	nodeLookup = {};
	connections = data.connections || [];
	
	const result = [];
	const totalSteps = data.steps.length;

	data.steps.forEach((step, stepIndex) => {
		const row = [];
		
		step.nodes.forEach((n, i) => {
			const x = (i - (step.nodes.length - 1) / 2) * spacingX;
			let y = (totalSteps - 1 - stepIndex) * spacingY;

			// If this is the last step and contains the boss, add extra padding
			if (stepIndex === totalSteps - 1) {
				y -= bossPadding;
			}

			const node = new Node(n.id, x, y, stepIndex + 1, n.color, n.type || null);
			nodeLookup[n.id] = node;
			row.push(node);
		});
			
		result.push(row);
	});

	return result;
}

// Assign node types by color
function assignNodeTypesByColor(levels, mapNodes) {
	const unassignedNodes = [];
	
	for (let row of levels) {
		for (let node of row) { 
			if (!node.type){
				unassignedNodes.push(node);
			}
			
			const shuffledTypes = mapNodes.sort(() => Math.random() - 0.5);
			
			for (let nodeType of shuffledTypes) {
				let matching = unassignedNodes.filter(n => n.color === nodeType.color);
				
				if (!matching.length) {
					matching = unassignedNodes;
					continue;
				}
				
				const node = matching[Math.floor(Math.random() * matching.length)];
				
				node.type = nodeType.type;
				unassignedNodes.splice(unassignedNodes.indexOf(node), 1);
			}
		}
	}
			
	for (let node of unassignedNodes) {
		node.type = "empty";
	}
}

// Set last boss image size
function setLastBossImageSize() {
	let lastBoss = null;
	
	for (let row of levels) {
		for (let node of row) {
			if (node.type === "boss") {
				lastBoss = node;
			}
			if (lastBoss) {
				lastBoss.customWidth = bossWidth;
				lastBoss.customHeight = bossHeight;
			}
		}
	}
}

// Draw map
function drawAll() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	ctx.translate(panX, panY);
	ctx.scale(zoom, zoom);

	// Draw connections
	for (let conn of connections) {
		const fromNode = nodeLookup[conn.from];
		const toNode = nodeLookup[conn.to];
		
		if (!fromNode || !toNode){
			continue;
		}
		
		ctx.strokeStyle = "#666";
		ctx.lineWidth = 3 / zoom;
		ctx.setLineDash([6 / zoom, 4 / zoom]);
		ctx.beginPath();
		ctx.moveTo(fromNode.x, fromNode.y);
		ctx.lineTo(toNode.x, toNode.y);
		ctx.stroke();
		ctx.setLineDash([]);
	}

	// Draw nodes
	for (let row of levels) {
		for (let node of row) {
			node.draw();
		}
	}
	
	ctx.restore();

	if (popupNode) {
		updatePopupPosition(popupNode);
	}
}

// Find clicked node (closest or inside custom-sized image)
function findClickedNode(mouseX, mouseY) {
	const rect = canvas.getBoundingClientRect();
	const worldX = (mouseX - rect.left - panX) / zoom;
	const worldY = (mouseY - rect.top - panY) / zoom;
	let closest = null, minDist = Infinity;

	for (let row of levels) {
		for (let node of row) {
			const width = node.customWidth || nodeRadius * 2;
			const height = node.customHeight || nodeRadius * 2;
			
			if (worldX >= node.x - width / 2 && worldX <= node.x + width / 2 && worldY >= node.y - height / 2 && worldY <= node.y + height / 2) {
				return node;
			} else {
				const dx = worldX - node.x, dy = worldY - node.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				
				if (dist < nodeRadius && dist < minDist) { 
					closest = node; minDist = dist; 
				}
			}
		}
	}
	return closest;
}

// Smooth focus
function smoothFocusNode(node) {
	const targetPanY = canvas.height / 2 - node.y * zoom;
	const startPanY = panY;
	const duration = 400;
	const startTime = performance.now();
	
	function animate(time) {
		const t = Math.min(1, (time - startTime) / duration);
		const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
		
		panY = startPanY + (targetPanY - startPanY) * ease;
		
		drawAll();
		
		if (t < 1) {
			requestAnimationFrame(animate);
		}
	}
	
	requestAnimationFrame(animate);
}

// Popup
function updatePopupPosition(node) {
	if (!node) { 
		return;
	}

	const rect = canvas.getBoundingClientRect();
	const width = node.customWidth || nodeRadius * 2;
	const height = node.customHeight || nodeRadius * 2;
	const screenX = node.x * zoom + panX + rect.left;
	const screenY = node.y * zoom + panY + rect.top;

	let popupEl = document.getElementById("node-popup");
	
	if (!popupEl) {
		popupEl = document.createElement("div");
		popupEl.id = "node-popup";
		popupEl.style.position = "absolute";
		popupEl.style.background = "#fff";
		popupEl.style.border = "1px solid #333";
		popupEl.style.padding = "6px";
		popupEl.style.borderRadius = "6px";
		popupEl.style.pointerEvents = "auto";

		const button = document.createElement("button");
		
		button.id = "node-popup-button";
		popupEl.appendChild(button);
		popupContainer.appendChild(popupEl);
	}

	const button = document.getElementById("node-popup-button");
	button.textContent = node.type;
	
	if (["neow", "firstencounter", "encounter", "elite", "boss", "event"].includes(node.type)) {
		button.disabled = false;
		button.onclick = () => {
			let url;

			if (node.type === "firstencounter") {
				url = `encounter.html?act=${actNumber}&type=firstencounter`;
			} else if (node.type === "encounter") {
				url = `encounter.html?act=${actNumber}`;
			} else if (node.type === "elite") {
				url = `encounter.html?act=${actNumber}&type=elite`;
			} else if (node.type === "boss") {
				url = `encounter.html?act=${actNumber}&type=boss`;
			} else if (node.type === "event") {
				url = `event.html?act=${actNumber}`;
			} else if (node.type === "neow") {
				url = `neow.html`;
			} else {
				url = `${node.type.replace(" ", "")}.html?act=${actNumber}`;
			}

			window.open(url, "_blank");

			// Close tooltip after clicking
			const popupEl = document.getElementById("node-popup");
			
			if (popupEl) {
				popupEl.remove();
			}
			popupNode = null;
		};
	} else {
		button.disabled = true;
		button.onclick = null;
	}

	// Correct tooltip Y offset to match node size
	popupEl.style.left = `${Math.min(Math.max(screenX - popupEl.offsetWidth / 2, 0), window.innerWidth - popupEl.offsetWidth)}px`;
	popupEl.style.top = `${Math.max(screenY - height/2 - popupEl.offsetHeight - 10, 0)}px`;
}

// Mouse/touch events
function startDrag(e) {
	isDragging = true;
	
	const clientX = e.touches ? e.touches[0].clientX : e.clientX;
	const clientY = e.touches ? e.touches[0].clientY : e.clientY;
	
	startDragX = clientX - panX;
	startDragY = clientY - panY;
}

function endDrag() { 
	isDragging = false; 
}

function doDrag(e) { 
	if (!isDragging) {
		return;
	}		
	
	const clientX = e.touches ? e.touches[0].clientX : e.clientX; 
	const clientY = e.touches ? e.touches[0].clientY : e.clientY; 
	
	panX = clientX - startDragX; 
	panY = clientY - startDragY; drawAll(); 
}

// Map bounds & fit
function getMapBounds(levels) {
	let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

	for (let row of levels) {
		for (let node of row) {
			const halfWidth = (node.customWidth || nodeRadius * 2) / 2;
			const halfHeight = (node.customHeight || nodeRadius * 2) / 2;

			if (node.x - halfWidth < minX) {
				minX = node.x - halfWidth;
			}
			if (node.x + halfWidth > maxX) {
				maxX = node.x + halfWidth;
			}
			if (node.y - halfHeight < minY) {
				minY = node.y - halfHeight;
			}
			if (node.y + halfHeight > maxY) {
				maxY = node.y + halfHeight;
			}
		}
	}

	return { minX, maxX, minY, maxY };
}

function fitMapInView() {
	if (!levels.length) {
		return;
	}
	
	const padding = 80;
	const bounds = getMapBounds(levels);
	const mapWidth = bounds.maxX - bounds.minX;
	const mapHeight = bounds.maxY - bounds.minY;
	
	zoom = Math.min((canvas.width - padding) / mapWidth, (canvas.height - padding) / mapHeight, 1);
	panX = -(bounds.minX + mapWidth / 2) * zoom + canvas.width / 2;
	panY = -(bounds.minY + mapHeight / 2) * zoom + canvas.height / 2;
}

canvas.addEventListener("mousedown", startDrag);
canvas.addEventListener("mouseup", endDrag);
canvas.addEventListener("mousemove", doDrag);
canvas.addEventListener("mouseleave", endDrag);
canvas.addEventListener("touchstart", startDrag);
canvas.addEventListener("touchend", endDrag);
canvas.addEventListener("touchmove", doDrag);

// Zoom toward cursor
canvas.addEventListener("wheel", e => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const zoomFactor = 1.1;
  const newZoom = zoom * (e.deltaY < 0 ? zoomFactor : 1 / zoomFactor);
  const clampedZoom = Math.max(0.2, Math.min(3, newZoom));
  panX = mouseX - (mouseX - panX) * (clampedZoom / zoom);
  panY = mouseY - (mouseY - panY) * (clampedZoom / zoom);
  zoom = clampedZoom;
  drawAll();
});

const navigableTypes = ["firstencounter", "encounter", "elite", "boss", "event"];

// Click node
canvas.addEventListener("click", e => {
	const clicked = findClickedNode(e.clientX, e.clientY);

	if (popupTimeout) {
		clearTimeout(popupTimeout);
	}

	const popupEl = document.getElementById("node-popup");
	if (popupEl) {
		popupEl.remove();
	}

	popupNode = null;

	if (!clicked) return;

	currentNode = clicked;
	smoothFocusNode(clicked);

	// Only show popup if node type is navigable
	if (navigableTypes.includes(clicked.type)) {
		popupTimeout = setTimeout(() => { 
			popupNode = clicked; 
			drawAll(); 
		}, 300);
	}
});

// Initialize
const mapData = Data[`act${actNumber}Map`] || Data.act1Map;

levels = buildLevels(mapData);

assignNodeTypesByColor(levels, Data.mapNodes);

// Set last boss image size
setLastBossImageSize();

currentNode = levels[0][0];
resizeCanvas();
