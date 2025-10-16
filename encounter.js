window.addEventListener("DOMContentLoaded", () => {
	const enemiesList = document.getElementById("enemies");
	
	const actNumber = Utils.getQueryParam("act", "1");
	const type = Utils.getQueryParam("type", "enemies");
	
	const enemies = Data[`act${actNumber}${Utils.capitalize(type)}`]?.enemies || [];
	
	const summonsPool = Data[`act${actNumber}Summons`]?.enemies || [];
	const enemy = enemies[Math.floor(Math.random() * enemies.length)];
	const allEnemies = [enemy];

	function showRewards () {
		if (!enemy.rewards) {
			return;
		}

		const rewardsDiv = document.getElementById("rewards");
		rewardsDiv.innerHTML = `${Utils.formatTextWithIcons(enemy.rewards)}`;
	}

	function buildEnemyList() {
		(enemy.summons || []).forEach(summon => {
			// summon from act
			const summons = summon.act 
				? Data[`act${summon.act}Summons`]?.enemies || []
				: summonsPool;


			if (typeof summon === "string") {
				// summon by name
				const candidates = summons.filter(s => s.name === summon);
				if (candidates.length > 0) {
					const chosen = { 
						...candidates[Math.floor(Math.random() * candidates.length)],
						isSummon: true
					};
					
					allEnemies.push(chosen);
				}
			} else if (typeof summon === "object" && summon.type) {
				// summon by type
				const candidates = summons.filter(s => s.type === summon.type);
				if (candidates.length > 0) {
					for (let i = 0; i < (summon.count || 1); i++) {
						const chosen = { 
							...candidates[Math.floor(Math.random() * candidates.length)], 
							isSummon: true 
						};
						allEnemies.push(chosen);
					}
				}
			} else if (typeof summon === "object" && summon.name) {
				// summon object
				const chosen = {
					...summon,
					isSummon: true
				};
				allEnemies.push(chosen);
			}
		});
	}

	showRewards();
	buildEnemyList();

	// Render enemies
	allEnemies.forEach((enemy, index) => {
		enemy.currentHealth = enemy.health;

		const li = document.createElement("li");
		
		li.className = "enemy";
		li.innerHTML = `
			<div class="enemy-card rounded">
				<p class="title">
					${Utils.formatTextWithIcons(enemy.isSummon ? `[SUMMON] ${enemy.name}` : enemy.name)}
				</p>
				<hr class="separator">
				${enemy.health > 0 ? `
					<div class="enemy-health">
						${Utils.formatTextWithIcons(`[HEART]`)}
						<span id="health-${index}" class="enemy-health">${enemy.currentHealth}</span>
					</div>
					<hr class="separator">
				` : ""}
			<div class="enemy-attacks text">
				${(enemy.attacks || []).map(a => `
					<div class="enemy-attack-line text">${Utils.formatTextWithIcons(a)}</div>
				`).join("")}
			</div>
			<hr class="separator">
			<div class="enemy-abilities subtext">
				${Utils.formatTextWithIcons(enemy.ability)}
			</div>

			<!-- Invisible overlays -->
			<button class="overlay-btn top" data-index="${index}" data-change="1"></button>
			<button class="overlay-btn bottom" data-index="${index}" data-change="-1"></button>
		  </div>`;

		enemiesList.appendChild(li);
	});

	// Handle health button clicks
	enemiesList.addEventListener("click", e => {
		if (!e.target.classList.contains("overlay-btn")) {
			return;
		}

		const index = parseInt(e.target.dataset.index, 10);
		const change = parseInt(e.target.dataset.change, 10);
		const enemy = allEnemies[index];

		if (enemy.health === 0) {
			healthContainer.remove();
		}

		enemy.currentHealth = Math.max(0, Math.min(enemy.health, enemy.currentHealth + change));

		const healthEl = document.getElementById(`health-${index}`);
		
		if (healthEl) {
			healthEl.textContent = enemy.currentHealth;
		}

		// Toggle grayscale
		const cardEl = healthEl.closest(".enemy-card");
		
		if (cardEl) {
			if (enemy.currentHealth === 0) {
				cardEl.classList.add("dead");
			} else {
				cardEl.classList.remove("dead");
			}
		}
	});
});
