window.addEventListener("DOMContentLoaded", () => {
	const container = document.getElementById("container");
	const neowMessage = document.getElementById("message");
	const neowGuaranteed = document.getElementById("guaranteed");
	const neowOptions = document.getElementById("options");
	
	if (!container) {
		return;
	}

	// Load data
	const neows = Data.neows;
	
	// Pick a random blessing
	const neow = neows.blessings[Math.floor(Math.random() * neows.blessings.length)];

	neowMessage.innerHTML = neow.message;
	neowGuaranteed.innerHTML = Utils.formatTextWithIcons(neow.guaranteed);
	neowOptions.innerHTML = "";

	neow.options.forEach(o => {
		const li = document.createElement("li");
		li.className = "option-background text";
		li.innerHTML = Utils.formatTextWithIcons(o);
		neowOptions.appendChild(li);
	});
});