window.addEventListener("DOMContentLoaded", () => {
	const container = document.getElementById("container");
	const eventName = document.getElementById("name");
	const eventMessage = document.getElementById("message");
	const eventLines = document.getElementById("lines");
	
	if (!container) {
		return;
	}

	const actNumber = Utils.getQueryParam("act", "1");

	// Load data
	let events = Data[`act${actNumber}Events`] || Data.act1Events;
	
	// Pick a random event
	const event = events.events[Math.floor(Math.random() * events.events.length)];

	eventName.innerHTML = event.name;	
	eventMessage.innerHTML = Utils.formatTextWithIcons(event.message);	
	
	eventLines.innerHTML = "";

	event.lines.forEach(o => {
		const li = document.createElement("li");
		li.className = "option text";
		li.innerHTML = Utils.formatTextWithIcons(o);
		eventLines.appendChild(li);
	});
});