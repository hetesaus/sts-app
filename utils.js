const Utils = {
	formatTextWithIcons: function(text) {
		if(!text){
			return "";
		}
		
		// Replace breaklines
		let formatted = text.replace(/\r\n|\r/g, "\n");
		formatted = formatted.replace(/\n/g, "<br/>");

		// Replace icon placeholders
		for (const key in Data.icons) {
			const imgTag = `<img src="${Data.icons[key]}" class="icon" style="vertical-align:middle;">`;
			const regex = new RegExp(`\\${key}`, "g");
			formatted = formatted.replace(regex, imgTag);
		}

		// Replace numbers
		formatted = formatted.replace(/\[(\d+)\]/g, (match, num) => {
			return `
			<span class="gold-icon">
				<img src="${Data.icons["[GOLD]"]}" alt="gold">
				<span class="gold-text">${num}</span>
			</span>`;
		});

		// Replace <y>...</y> with yellow text
		formatted = formatted.replace(/<y>(.*?)<\/y>/g, (match, content) => {
			return `<span style="color: #d5c61d;">${content}</span>`;
		});

		return formatted;
	},
	
	getQueryParam: function(name, defaultValue = null) {
		const params = new URLSearchParams(window.location.search);
		return params.get(name) || defaultValue;
	},
	
	capitalize: function(s) {
		return s.charAt(0).toUpperCase() + s.slice(1);
	}
};