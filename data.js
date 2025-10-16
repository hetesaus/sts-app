const Data = {
	icons: {
		"[REWARD]": "images/reward.png",
		"[UPGRADEREWARD]": "images/upgradeReward.png",
		"[RARE]": "images/rare.png",
		"[POTION]": "images/potion.png",
		"[RELIC]": "images/relic.png",
		"[BOSSRELIC]": "images/bossRelic.png",		
		"[GOLD]": "images/gold.png",
		"[ENERGY]": "images/energy.png",
		"[DIE1]": "images/die1.png",
		"[DIE2]": "images/die2.png",
		"[DIE3]": "images/die3.png",
		"[DIE4]": "images/die4.png",
		"[DIE5]": "images/die5.png",
		"[DIE6]": "images/die6.png",
		"[ATTACK]": "images/attack.png",
		"[SHIELD]": "images/shield.png",
		"[VULNERABLE]": "images/vulnerable.png",
		"[WEAK]": "images/weak.png",
		"[STRENGTH]": "images/strength.png",
		"[SLIME]": "images/slime.png",
		"[DAZE]": "images/daze.png",
		"[AOE]": "images/aoe.png",
		"[RED]": "images/squareRed.png",
		"[GREY]": "images/squareGrey.png",
		"[SUMMON]": "images/summon.png",
		"[HEART]": "images/heart.png",
		"[FIRE]": "images/fire.png"
	},
	
	mapNodeImages: {
	  "neow": "images/mapNeow.png",
	  "firstencounter": "images/mapEncounter.png",
	  "encounter": "images/mapEncounter.png",
	  "elite": "images/mapElite.png",
	  "boss": "images/mapBoss.png",
	  "camp": "images/mapCamp.png",
	  "shop": "images/mapShop.png",
	  "event": "images/mapEvent.png",
	  "relic": "images/mapRelic.png",
	  "empty": "images/mapEmpty.png"
	},
	mapNodes: [
		{ type: "elite", color: "dark" },
		{ type: "elite", color: "dark" },
		{ type: "elite", color: "dark" },
		{ type: "event", color: "dark" },
		{ type: "event", color: "dark" },
		{ type: "event", color: "light" },
		{ type: "encounter", color: "dark" },
		{ type: "encounter", color: "dark" },
		{ type: "encounter", color: "dark" },
		{ type: "encounter", color: "light" },
		{ type: "camp", color: "light" },
		{ type: "camp", color: "light" },
		{ type: "camp", color: "light" },
		{ type: "shop", color: "light" },
		{ type: "shop", color: "light" }
	],
	
	neows: {
		"blessings": [
			{
				"message": "Another try...?",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Remove a card.",
					"Gain [5].",
					"Upgrade 2 random cards. Lose [3]."
				]
			},
			{
				"message": "Choose...?",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Gain [REWARD] from the colorless rewards.",
					"Remove a card.",
					"Gain [RARE]. Lose 2 HP."
				]
			},
			{
				"message": "Hello... Again...",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Gain [REWARD] from the colorless rewards.",
					"Upgrade a card.",
					"Remove 2 cards. Lose [3]."
				]
			},
			{
				"message": "Another... try...?",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Transform a card.",
					"Gain [5].",
					"Remove 2 cards. Lose [3]."
				]
			},
			{
				"message": "Choose...",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Upgrade a card.",
					"Gain [5].",
					"Gain [RELIC]. Gain a Curse."
				]
			},
			{
				"message": "Another... try...?",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Gain [5].",
					"Add a random rare card to your deck.",
					"Gain [RARE]. Lose [3]."
				]
			},
			{
				"message": "Another... try...?",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Gain [REWARD] from the colorless rewards.",
					"Gain [POTION][POTION][POTION].",
					"Transform 2 cards. Gain a Curse."
				]
			},
			{
				"message": "Risk... Reward...",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Transform a card.",
					"Gain [5].",
					"Gain [REWARD][REWARD] from the colorless rewards. Gain a Curse."
				]
			},
			{
				"message": "Risk... Reward...",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Remove a card.",
					"Gain [POTION][POTION][POTION].",
					"Gain [5][REWARD]. Gain a Curse."
				]
			},
			{
				"message": "I've brought you back...",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Add a random rare card to your deck.",
					"Gain [REWARD].",
					"Remove 2 cards. Lose 2 HP."
				]
			},
			{
				"message": "Choose...",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Add a random rare card to your deck.",
					"Transform a card.",
					"Upgrade 2 random cards. Gain a Curse."
				]
			},
			{
				"message": "Another... try...?",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Remove a card.",
					"Transform a card.",
					"Transform 2 cards. Lose 3 HP."
				]
			},
			{
				"message": "Risk... Reward...",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Remove a card.",
					"Transform a card.",
					"Gain [RELIC]. Lose 2 HP."
				]
			},
			{
				"message": "I've brought you back...",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Upgrade a card.",
					"Remove a card.",
					"Gain [10]. Lose 2 HP."
				]
			},
			{
				"message": "I've brought you back...",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Gain [REWARD] from the colorless deck.",
					"Add a random rare card to your deck.",
					"Gain [RELIC]. Lose [3]."
				]
			},
			{
				"message": "Greetings.",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Gain [POTION][POTION][POTION].",
					"Gain [REWARD].",
					"Gain [RELIC]. Lose [3]."
				]
			},
			{
				"message": "Another... try...?",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Upgrade a card.",
					"Add a random rare card to your deck.",
					"Gain [10]. Gain a Curse."
				]
			},
			{
				"message": "Greetings...",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Upgrade a card.",
					"Gain [POTION][POTION][POTION].",
					"Gain [RARE]. Gain a Curse."
				]
			},
			{
				"message": "Hello... Again...",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Gain [REWARD] from the colorless rewards.",
					"Transform a card.",
					"Gain [10]. Lose 2 HP."
				]
			},
			{
				"message": "Choose...",
				"guaranteed": "Gain [3][REWARD].",
				"options": [
					"Upgrade a card.",
					"Gain [POTION][POTION][POTION].",
					"Upgrade 2 random cards. Lose 2 HP."
				]
			}
		]
	},

	act1Map: {
		"steps": [
			{ "nodes": [ 
				{ "id": "S1-1", "type": "firstencounter" } 
			]},
			{ "nodes": [ 
				{ "id": "S2-1", "type": "event" }, 
				{ "id": "S2-2", "type": "event" }, 
				{ "id": "S2-3", "type": "event" } 
			]},
			{ "nodes": [ 
				{ "id": "S3-1", "type": "event" }, 
				{ "id": "S3-2", "type": "encounter" }, 
				{ "id": "S3-3", "type": "encounter" } 
			]},
			{ "nodes": [ 
				{ "id": "S4-1", "type": "encounter" },
				{ "id": "S4-2", "color": "light" },
				{ "id": "S4-3", "type": "event" }, 
				{ "id": "S4-4", "type": "event" }
			]},
			{ "nodes": [ 
				{ "id": "S5-1", "color": "dark" }, 
				{ "id": "S5-2", "type": "encounter" }, 
				{ "id": "S5-3", "color": "dark" }, 
				{ "id": "S5-4", "color": "light" } 
			]},
			{ "nodes": [ 
				{ "id": "S6-1", "color": "light" }, 
				{ "id": "S6-2", "color": "light" }, 
				{ "id": "S6-3", "color": "dark" } 
			]},
			{ "nodes": [ 
				{ "id": "S7-1", "type": "relic" }, 
				{ "id": "S7-2", "type": "relic" }, 
				{ "id": "S7-3", "type": "relic" } 
			]},
			{ "nodes": [ 
				{ "id": "S8-1", "type": "encounter" }, 
				{ "id": "S8-2", "type": "event" }, 
				{ "id": "S8-3", "color": "dark" }, 
				{ "id": "S8-4", "type": "encounter" } 
			]},
			{ "nodes": [ 
				{ "id": "S9-1", "color": "dark" }, 
				{ "id": "S9-2", "color": "light" }, 
				{ "id": "S9-3", "color": "dark" } 
			]},
			{ "nodes": [ 
				{ "id": "S10-1", "color": "light" }, 
				{ "id": "S10-2", "type": "encounter" }, 
				{ "id": "S10-3", "type": "event" }, 
				{ "id": "S10-4", "color": "light" } 
			]},
			{ "nodes": [ 
				{ "id": "S11-1", "color": "dark" }, 
				{ "id": "S11-2", "type": "shop" }, 
				{ "id": "S11-3", "color": "dark" }, 
				{ "id": "S11-4", "type": "event" }
			]},
			{ "nodes": [ 
				{ "id": "S12-1", "type": "camp" }, 
				{ "id": "S12-2", "type": "camp" }, 
				{ "id": "S12-3", "type": "camp" }, 
				{ "id": "S12-4", "type": "camp" } 
			]},
			{ "nodes": [ 
				{ "id": "boss", "type": "boss" } 
			]}
		],
		"connections": [
			{ "from": "S1-1", "to": "S2-1" },
			{ "from": "S1-1", "to": "S2-2" },
			{ "from": "S1-1", "to": "S2-3" },
			{ "from": "S2-1", "to": "S3-1" },
			{ "from": "S2-2", "to": "S3-2" },
			{ "from": "S2-3", "to": "S3-3" },
			{ "from": "S3-1", "to": "S4-1" },
			{ "from": "S3-2", "to": "S4-2" },
			{ "from": "S3-2", "to": "S4-3" },
			{ "from": "S3-3", "to": "S4-3" },
			{ "from": "S3-3", "to": "S4-4" },
			{ "from": "S4-1", "to": "S5-1" },
			{ "from": "S4-1", "to": "S5-2" },
			{ "from": "S4-2", "to": "S5-2" },
			{ "from": "S4-2", "to": "S5-3" },
			{ "from": "S4-3", "to": "S5-3" },
			{ "from": "S4-4", "to": "S5-4" },
			{ "from": "S5-1", "to": "S6-1" },
			{ "from": "S5-2", "to": "S6-2" },
			{ "from": "S5-3", "to": "S6-2" },
			{ "from": "S5-4", "to": "S6-3" },
			{ "from": "S6-1", "to": "S7-1" },
			{ "from": "S6-1", "to": "S7-2" },
			{ "from": "S6-2", "to": "S7-2" },
			{ "from": "S6-2", "to": "S7-3" },
			{ "from": "S6-3", "to": "S7-3" },
			{ "from": "S7-1", "to": "S8-1" },
			{ "from": "S7-2", "to": "S8-2" },
			{ "from": "S7-2", "to": "S8-3" },
			{ "from": "S7-3", "to": "S8-3" },
			{ "from": "S7-3", "to": "S8-4" },
			{ "from": "S8-1", "to": "S9-1" },
			{ "from": "S8-2", "to": "S9-1" },
			{ "from": "S8-3", "to": "S9-2" },
			{ "from": "S8-4", "to": "S9-3" },
			{ "from": "S9-1", "to": "S10-1" },
			{ "from": "S9-1", "to": "S10-2" },
			{ "from": "S9-2", "to": "S10-2" },
			{ "from": "S9-2", "to": "S10-3" },
			{ "from": "S9-3", "to": "S10-4" },
			{ "from": "S10-1", "to": "S11-1" },
			{ "from": "S10-2", "to": "S11-2" },
			{ "from": "S10-3", "to": "S11-3" },
			{ "from": "S10-4", "to": "S11-3" },
			{ "from": "S10-4", "to": "S11-4" },
			{ "from": "S11-1", "to": "S12-1" },
			{ "from": "S11-2", "to": "S12-2" },
			{ "from": "S11-3", "to": "S12-3" },
			{ "from": "S11-4", "to": "S12-4" },
			{ "from": "S12-1", "to": "boss" },
			{ "from": "S12-2", "to": "boss" },
			{ "from": "S12-3", "to": "boss" },
			{ "from": "S12-4", "to": "boss" }			
		]
	},
	act1Events: {
		"events": [
			{
				"name": "Ancient Temple",
				"message": "You come across an ancient temple. \nYou sure don't see any traps...",
				"lines": [
					"<y>[Go Inside]</y> Gain [RELIC]. Lose 1 HP. \nLose 1 additional HP per player \nwho chose this option before you.",
					"<y>[Leave]</y> Nothing happens."
				]
			},
			{
				"name": "Wheel of Change",
				"message": "\"It's time to spin the wheel! \nAre you READY? Of course you are!\"",
				"lines": [
					"<y>Roll the die. Each player rolls separately.</y>",
					"[DIE1] Heal to full HP.",
					"[DIE2] Gain a Curse.",
					"[DIE3] Remove a card.",
					"[DIE4] Gain [RELIC].",
					"[DIE5] Gain [4].",
					"[DIE6] Lose 2 HP."
				]
			},
			{
				"name": "Transmogriphier",
				"message": "Before you lies an elaborate shrine to a \nforgotten spirit.",
				"lines": [
					"<y>[Pray]</y> Transform a card.",
					"<y>[Sacrifice]</y> Transform 2 \ncards, Gain a Curse."
				]
			},
			{
				"name": "The Cleric",
				"message": "\"Hello friend! I am Cleric! Are you \ninterested in my services?!\"",
				"lines": [
					"<y>[Heal]</y> Pay [1]. Heal 3 HP.",
					"<y>[Prayer]</y> Pay [2]. Upgrade a card.",
					"<y>[Purify]</y> Pay [3]. Remove a card.",
					"<y>[Leave]</y> Nothing happens."
				]
			},
			{
				"name": "Ominous Forge",
				"message": "Inside a small hut, you find a forge. The tools are \ncovered with dust, yet a fire roars in the furnace...",
				"lines": [
					"<y>[Rummage]</y> Gain [RELIC]. Roll the die. \n[DIE1][DIE2][DIE3] Gain a Curse.",
					"<y>[Forge]</y> Upgrade a card. Lose 2 HP."
				]
			},
			{
				"name": "Wing Statue",
				"message": "You notice an intricate large blue statue \nresembling a wing. You find gold spilling from its \ncracks. Maybe there is more inside...",
				"lines": [
					"<y>[Pray]</y> Remove a card. Lose 2 HP.",
					"<y>[Gather</y> Gold] Gain [2]."
				]
			},
			{
				"name": "Big Fish",
				"message": "\"Objects float before you. Which do you choose?\"",
				"lines": [
					"<y>Each player chooses a different option.</y>",
					"<y>[Banana]</y> Heal 2 HP.",
					"<y>[Donut]</y> Upgrade a starter Strike.",
					"<y>[Box]</y> Gain [RELIC]. Gain a Curse.",
					"<y>[Restraint]</y> Remove a starter Strike."
				]
			},
			{
				"name": "Upgrade Shrine",
				"message": "Before you lies an elaborate shrine to a \nforgotten spirit.",
				"lines": [
					"<y>[Pray]</y> Upgrade a card.",
					"<y>[Sacrifice]</y> Upgrade 2 random \ncards. Lose 2 HP."
				]
			},
			{
				"name": "Living Wall",
				"message": "Three faces materialize from the walls and speak. \n\"Forget what you know and I'll let you go.\"\n\"I require change to see a new space.\"\n\"If you want to pass me, then you must grow.\"",
				"lines": [
					"<y>[Forget]</y> Remove a card.",
					"<y>[Change]</y> Transform a card.",
					"<y>[Grow]</y> Upgrade a card."
				]
			},
			{
				"name": "The Library",
				"message": "You come across an old abondoned \nlibrary. You find countless rows of scrolls, \nmanuscripts, and books...",
				"lines": [
					"<y>[Read]</y> Gain [RELIC]. Look at 5 cards \ninstead of 3.",
					"<y>[Sleep]</y> Heal 3 HP."
				]
			},
			{
				"name": "Bonfire Spirits",
				"message": "You happen upon a group of spirits \ndancing around a large bonfire. As you \napproach, they turn to you, expectantly...",
				"lines": [
					"<y>[Offer]</y> Remove a card.",
					"If it's uncommon, heal 3 HP.", 
					"If it's rare, heal to full HP.", 
					"If it's a Curse, lose 1 HP."
				]
			},
			{
				"name": "Lab",
				"message": "You find some potions!",
				"lines": [
					"Each player gains [POTION].",
					"<y>Roll the die once for the party.</y>",
					"[DIE4][DIE5][DIE6] One player gains \nanother [POTION]."
				]
			}
		]
	},
	act1Firstencounter: {
		"enemies": [
			{ 
				"name": "Small Slime", 
				"health": 3, 
				"attacks": [ 
					"1[ATTACK]"
				],
				"summons": [ "Acid Slime" ],
				"rewards": "[POTION][REWARD]"
			},
			{ 
				"name": "Cultist", 
				"health": 9, 
				"attacks": [ 
					"1[ATTACK][STRENGTH]"
				],
				"rewards": "[1][REWARD]"
			},
			{ 
				"name": "Jaw Worm", 
				"health": 8, 
				"attacks": [ 
					"[DIE1][DIE2] 2[SHIELD][STRENGTH]",
					"[DIE3][DIE4] 2[ATTACK][SHIELD]",
					"[DIE5][DIE6] 3[ATTACK]"
				],
				"rewards": "[1][POTION][REWARD]"
			},
			{ 
				"name": "Red Louse", 
				"health": 3, 
				"attacks": [ 
					"[DIE1][DIE2] [STRENGTH]",
					"[DIE3][DIE4] 2[ATTACK]",
					"[DIE5][DIE6] 1[ATTACK]"
				],
				"ability": "<y>Curl Up:</y> The first time Louse takes damage, it gets 2[SHIELD].",
				"summons": [ "Green Louse" ],
				"rewards": "[1][REWARD]"
			}
		]
	},
	act1Enemies: {
		"enemies": [
			{ 
				"name": "Cultist", 
				"health": 9, 
				"attacks": [ 
					"1[ATTACK][STRENGTH]"
				],
				"summons": [ "Spike Slime" ],
				"rewards": "[1][POTION][REWARD]"
			},
			{ 
				"name": "Cultist", 
				"health": 9, 
				"attacks": [ 
					"1[ATTACK][STRENGTH]"
				],
				"summons": [ "Green Louse" ],
				"rewards": "[1][REWARD]"
			},
			{ 
				"name": "Fungi Beast", 
				"health": 6, 
				"attacks": [ 
					"[DIE1][DIE2] 2[ATTACK]",
					"[DIE3][DIE4] 1[ATTACK][STRENGTH]",
					"[DIE5][DIE6] [STRENGTH]"
				],
				"ability": "<y>Spore Cloud:</y> On death, [WEAK].",
				"summons": [ "Fungi Beast" ],
				"rewards": "[1][POTION][REWARD]"
			},
			{ 
				"name": "Red Louse", 
				"health": 4, 
				"attacks": [ 
					"[DIE1][DIE2] [STRENGTH]",
					"[DIE3][DIE4] 2[ATTACK]",
					"[DIE5][DIE6] 2[ATTACK]"
				],
				"ability": "<y>Curl Up:</y> The first time Louse takes damage from [ATTACK], it gets 2[SHIELD].",
				"summons": [ "Green Louse", "Red Louse" ],
				"rewards": "[1][REWARD]"
			},
			{ 
				"name": "Small Slime", 
				"health": 3, 
				"attacks": [ 
					"1[ATTACK]"
				],
				"summons": [ "Acid Slime", "Spike Slime" ],
				"rewards": "[1][REWARD]"
			},
			{ 
				"name": "Large Slime", 
				"health": 6, 
				"attacks": [ 
					"[DIE1][DIE2] 3[ATTACK]",
					"[DIE3][DIE4] [VULNERABLE][VULNERABLE]",
					"[DIE5][DIE6] 2[ATTACK][DAZE][DAZE]"
				],
				"ability": "<y>Split:</y> On death, summon Acid Slime and Spike Slime at the start of next turn.",
				"summons": [ "Acid Slime", "Spike Slime" ],
				"rewards": "[1][POTION][REWARD]"
			},
			{ 
				"name": "Mad Gremlin", 
				"health": 4, 
				"attacks": [ 
					"1[ATTACK]"
				],
				"ability": "<y>Angry:</y> Whenever this enemy takes damage from [ATTACK], [STRENGTH].",
				"summons": [ { "type": "Gremlin", "count": 2, "act": 1 } ], 
				"rewards": "[2][REWARD]"
			},
			{ 
				"name": "Sneaky Gremlin", 
				"health": 2, 
				"attacks": [ 
					"2[ATTACK]"
				],
				"summons": [ { "type": "Gremlin", "count": 2, "act": 1 } ],
				"rewards": "[1][POTION][REWARD]"
			},
			{ 
				"name": "Looter", 
				"health": 9, 
				"attacks": [ 
					"[GREY] 2[ATTACK]",
					"[GREY] 3[ATTACK] 1[SHIELD]",
					"[GREY] Lose [2]. Looter leaves combat (you still gain rewards)."
				],
				"rewards": "[POTION][REWARD]"
			},
			{ 
				"name": "Red Slaver", 
				"health": 10, 
				"attacks": [ 
					"[DIE1][DIE2] 2[ATTACK][DAZE]",
					"[DIE3][DIE4] 2[ATTACK][WEAK] Acts last.",
					"[DIE5][DIE6] 3[ATTACK]"
				],
				"rewards": "[1][REWARD]"
			},
			{ 
				"name": "Blue Slaver", 
				"health": 10, 
				"attacks": [ 
					"[DIE1][DIE2] 2[ATTACK][VULNERABLE]",
					"[DIE3][DIE4] 3[ATTACK]",
					"[DIE5][DIE6] 2[ATTACK][DAZE]"
				],
				"rewards": "[2][REWARD]"
			},
			{ 
				"name": "Jaw Worm", 
				"health": 10, 
				"attacks": [ 
					"[DIE1][DIE2] 3[ATTACK]1[SHIELD]",
					"[DIE3][DIE4] 4[ATTACK]",
					"[DIE5][DIE6] 2[SHIELD][STRENGTH]"
				],
				"rewards": "[1][REWARD]"
			}
		]
	},
	act1Summons: {
		"enemies": [
			{
				"name": "Gremlin Wizard",
				"type": "Gremlin",
				"health": 4,
				"attacks": [
					"[GREY] \"Charging up...\"",
					"[RED] [AOE]3[ATTACK]"
				]
			},
			{
				"name": "Sneaky Gremlin",
				"type": "Gremlin",
				"health": 2,
				"attacks": [
					"2[ATTACK]"
				]
			},
			{
				"name": "Fat Gremlin",
				"type": "Gremlin",
				"health": 2,
				"attacks": [
					"1[ATTACK][VULNERABLE]"
				]
			},
			{
				"name": "Mad Gremlin",
				"type": "Gremlin",
				"health": 5,
				"attacks": [
					"1[ATTACK]"
				],
				"ability": "<y>Angry:</y> Whenever this enemy takes damage from [ATTACK], [STRENGTH]."
			},
			{
				"name": "Green Louse",
				"health": 3,
				"attacks": [
					"[DIE1][DIE2] 1[ATTACK]",
					"[DIE3][DIE4] [VULNERABLE]",
					"[DIE5][DIE6] 2[ATTACK]"
				],
				"ability": "<y>Curl Up:</y> This first time Louse takes damage from [ATTACK], it gets 2[SHIELD]."
			},
			{
				"name": "Green Louse",
				"health": 3,
				"attacks": [
					"[DIE1][DIE2] 2[ATTACK]",
					"[DIE3][DIE4] 1[ATTACK]",
					"[DIE5][DIE6] [VULNERABLE]"
				],
				"ability": "<y>Curl Up:</y> This first time Louse takes damage from [ATTACK], it gets 2[SHIELD]."
			},
			{
				"name": "Red Louse",
				"health": 3,
				"attacks": [
					"[DIE1][DIE2] 2[ATTACK]",
					"[DIE3][DIE4] 1[ATTACK]",
					"[DIE5][DIE6] [STRENGTH]"
				],
				"ability": "<y>Curl Up:</y> This first time Louse takes damage from [ATTACK], it gets 2[SHIELD]."
			},
			{
				"name": "Fungi Beast",
				"health": 5,
				"attacks": [
					"[DIE1][DIE2] 1[ATTACK][STRENGTH]",
					"[DIE3][DIE4] [STRENGTH]",
					"[DIE5][DIE6] 2[ATTACK]"
				],
				"ability": "<y>Spore Cloud:</y> On death, [WEAK].",
			},
			{
				"name": "Sentry A",
				"health": 8,
				"attacks": [
					"[DIE1][DIE2][DIE3] [DAZE]",
					"[DIE4][DIE5][DIE6] 3[ATTACK]"
				]
			},
			{
				"name": "Sentry B",
				"health": 8,
				"attacks": [
					"[DIE1][DIE2][DIE3] 3[ATTACK]",
					"[DIE4][DIE5][DIE6] [DAZE]"
				]
			},
			{
				"name": "Large Slime",
				"health": 12,
				"attacks": [
					"[DIE1][DIE2] 4[ATTACK]",
					"[DIE3][DIE4] 3[ATTACK][SLIME][SLIME]",
					"[DIE5][DIE6] [VULNERABLE][VULNERABLE]"
				]
			},
			{
				"name": "Large Slime",
				"health": 12,
				"attacks": [
					"[DIE1][DIE2] 3[ATTACK][SLIME][SLIME]",
					"[DIE3][DIE4] [VULNERABLE][VULNERABLE]",
					"[DIE5][DIE6] 4[ATTACK]"
				]
			},
			{
				"name": "Large Slime",
				"health": 12,
				"attacks": [
					"[DIE1][DIE2] [VULNERABLE][VULNERABLE]",
					"[DIE3][DIE4] 4[ATTACK]",
					"[DIE5][DIE6] 3[ATTACK][SLIME][SLIME]"
				]
			},
			{
				"name": "Acid Slime",
				"health": 5,
				"attacks": [
					"[DIE1][DIE2] 2[ATTACK]",
					"[DIE3][DIE4] [VULNERABLE]",
					"[DIE5][DIE6] 2[ATTACK][DAZE]"
				]
			},
			{
				"name": "Acid Slime",
				"health": 5,
				"attacks": [
					"[DIE1][DIE2] 2[ATTACK][DAZE]",
					"[DIE3][DIE4] 2[ATTACK]",
					"[DIE5][DIE6] [VULNERABLE]"
				]
			},
			{
				"name": "Acid Slime",
				"health": 5,
				"attacks": [
					"[DIE1][DIE2] [VULNERABLE]",
					"[DIE3][DIE4] 2[ATTACK][DAZE]",
					"[DIE5][DIE6] 2[ATTACK]"
				]
			},
			{
				"name": "Acid Slime",
				"health": 5,
				"attacks": [
					"[DIE1][DIE2] [VULNERABLE]",
					"[DIE3][DIE4] 2[ATTACK]",
					"[DIE5][DIE6] 2[ATTACK][DAZE]"
				]
			},
			{ 
				"name": "Spike Slime",
				"health": 5,
				"attacks": [
					"[DIE1][DIE2] [WEAK]",
					"[DIE3][DIE4] 1[ATTACK][DAZE]",
					"[DIE5][DIE6] 2[ATTACK]"
				]
			},
			{ 
				"name": "Spike Slime",
				"health": 5,
				"attacks": [
					"[DIE1][DIE2] 1[ATTACK][DAZE]",
					"[DIE3][DIE4] [WEAK]",
					"[DIE5][DIE6] 2[ATTACK]"
				]
			},
			{ 
				"name": "Spike Slime",
				"health": 5,
				"attacks": [
					"[DIE1][DIE2] [WEAK]",
					"[DIE3][DIE4] 2[ATTACK]",
					"[DIE5][DIE6] 1[ATTACK][DAZE]"
				]
			},
			{ 
				"name": "Spike Slime",
				"health": 5,
				"attacks": [
					"[DIE1][DIE2] 2[ATTACK]",
					"[DIE3][DIE4] 1[ATTACK][DAZE]",
					"[DIE5][DIE6] [WEAK]"
				]
			}
		]
	},
	act1Elite: {
		"enemies": [
			{ 
				"name": "Lagavulin", 
				"health": 22, 
				"attacks": [ 
					"[GREY] \"Zzz... zzz...\"",
					"[RED] [AOE]4[ATTACK]",
					"[RED] [AOE]4[ATTACK]",
					"[RED] [AOE][VULNERABLE][VULNERABLE][STRENGTH]"
				],
				"rewards": "[2][RELIC][REWARD]"
			},
			{ 
				"name": "Gremlin Nob", 
				"health": 17, 
				"attacks": [ 
					"[GREY] Gains <y>Enraged</y> for the rest of combat.",
					"[RED] [AOE]3[ATTACK]"
				],
				"ability": "<y>Enraged:</y> After you play a Skill, take 1 damage.",
				"rewards": "[2][RELIC][REWARD]"
			},
			{ 
				"name": "Sentries", 
				"health": 8, 
				"attacks": [ 
					"[DIE1][DIE2][DIE3] 2[ATTACK]",
					"[DIE4][DIE5][DIE6] [DAZE]"
				],
				"summons": [ "Sentry A", "Sentry B" ],
				"rewards": "[2][RELIC][REWARD]"
			}
		]
	},
	act1Boss: {
		"enemies": [
			{ 
				"name": "The Guardian: Attack Mode", 
				"health": 40, 
				"attacks": [ 
					"[RED] [AOE]2[ATTACK], 2[SHIELD] per player",
					"[RED] <y>Mode Shift</y> [AOE]6[ATTACK]"
				],
				"ability": "<y>Mode Shift:</y> If The Guardian starts its turn \nwith no [SHIELD], it doesn't attack this turn and \nenters <y>Defensive Mode</y> at the start of next round.", 
				"summons": [ {
					"name": "The Guardian: Defense Mode", 
					"health": 0, 
					"attacks": [ 
						"[RED] [AOE]2[ATTACK]",
						"[RED] [AOE]4[ATTACK][STRENGTH] Enters <y>Attack Mode</y> at start of next round."
					],
					"ability": "<y>Sharp Hide:</y> While in <y>Defensize Mode</y>, after \nyou play an Attack, take 1 damage. \n(Reminder: Damage can be blocked.)"
					} 
				],
				"rewards": "[3][BOSSRELIC][RARE]"
			},
			{ 
				"name": "Hexaghost", 
				"health": 36, 
				"attacks": [ 
					"[RED] [AOE]1[ATTACK][FIRE]",
					"[RED] [AOE]2[ATTACK]2[ATTACK][FIRE]",
					"[RED] [AOE][FIRE][FIRE]",
					"[RED] [AOE]3[ATTACK]5[ATTACK]5[SHIELD]",
					"[RED] [AOE]2[ATTACK][FIRE]",
					"[RED] [AOE]3[ATTACK]3[ATTACK][FIRE][FIRE][STRENGTH]"
				],
				"rewards": "[3][BOSSRELIC][RARE]"
			},
			{ 
				"name": "Slime Boss", 
				"health": 22, 
				"attacks": [ 
					"[RED] [AOE][SLIME][SLIME][SLIME]",
					"[RED] [AOE]3[ATTACK][SLIME][SLIME]",
					"[RED] [AOE]6[ATTACK]"
				],
				"ability": "<y>Split:</y> When killed, at the start of next turn, summon a <y>Large Slime</y>, <y>Acid Slime</y>, and <y>Spike Slime</y>.", 
				"summons": [ "Large Slime", "Acid Slime", "Spike Slime" ],
				"rewards": "[3][BOSSRELIC][RARE]"
			},
		]
	},
	
	act2Map: {
		// TODO
	},
	act2Events: {
		"events": [
			{
				"name": "Golden Shrine",
				"message": "Before you lies an elaborate \nshrine to an ancient spirit.",
				"lines": [
					"<y>[Pray]</y> Gain [2].",
					"<y>[Desecrate]</y> Gain [7] and a Curse."
				]
			},
			{
				"name": "Designer In-Spire",
				"message": "\"This will not do, no no. What is this style?\"",
				"lines": [
					"<y>[Adjustment]</y> Pay [2]. Upgrade a card.",
					"<y>[Clean Up]</y> Pay [3]. Remove a card.",
					"<y>[Full Service]</y> Pay [5]. Remove a card \nand upgrade a card.",
					"<y>[Punch!]</y> Lose 1 HP."
				]
			},
			{
				"name": "Augmenter",
				"message": "\"Hey there, stranger. \nInterested in advancing science?\"",
				"lines": [
					"<y>[Drink Vial]</y> Upgrade a card. Lose 1 HP.",
					"<y>[Become Test Subject]</y> Transform 2 \ncards. Lose 2 HP.",
					"<y>[Leave]</y> Nothing happens."
				]
			},
			{
				"name": "We Meet Again!",
				"message": "\"We meet again! It's me, Ranwid! Have any \ngoods for me today?\" You don't know him.",
				"lines": [
					"<y>[Give Gold]</y> Pay [4]. Gain [RELIC].",
					"<y>[Exchange]</y> Pay [RELIC]. Gain [RELIC].",
					"<y>[Give Card]</y> Remove a rare or \nuncommon card. Gain [RELIC].",
					"<y>[Leave]</y> Nothing happens."
				]
			},
			{
				"name": "Ancient Writing",
				"message": "Scaling the city, you notice a wall covered in the \nwriting of Ancients. As you try to figure out what \nit could mean, a message begins to glow...",
				"lines": [
					"<y>[Elegance]</y> Remove a card.",
					"<y>[Simplicity]</y> Upgrade a starter \nStrike and a starter Defend."
				]
			},
			{
				"name": "The Woman in Blue",
				"message": "From the darkness, an arm pulls you into a shop. \"Buy a potion. Now!\"",
				"lines": [
					"<y>[Buy 1]</y> Pay [1]. Gain [POTION].",
					"<y>[Buy 2]</y> Pay [2]. Gain [POTION][POTION].",
					"<y>[Leave]</y> WHAM! Lose 1 HP."
				]
			},
			{
				"name": "Wheel of Change",
				"message": "\"It's time to spin the wheel! \nAre you READY? Of course you are!\"",
				"lines": [
					"<y>Roll the die. Each player rolls separately.</y>",
					"[DIE1] Heal to full HP.",
					"[DIE2] Gain a Curse.",
					"[DIE3] Remove a card.",
					"[DIE4] Gain [RELIC].",
					"[DIE5] Gain [4].",
					"[DIE6] Lose 2 HP."
				]
			},
			{
				"name": "A Note for Yourself",
				"message": "Behind a loose brick, you find a folded card. It \nreads \"The Heart awaits.\" This is your handwritings.",
				"lines": [
					"<y>[Exchange]</y> Give a player a card in your \ndeck. They give you a card in their deck.",
					"<y>[Take]</y> Gain [REWARD] from another \ncharacter's card rewards deck. That \ncharacter doesn't have to be playing."
				]
			},
			{
				"name": "N'loth",
				"message": "An odd creature stops scrounging through trash \nto approach you. \"N'loth hungry. Feed N'loth.\"",
				"lines": [
					"<y>[Offer]</y> Give a random [RELIC] (shuffle \nthem face down, draw one). Gain [RARE].",
					"<y>[Offer]</y> Give [POTION]. Add a random rare \ncard to your deck.",
					"<y>[Leave]</y> Nothing happens."
				]
			},
			{
				"name": "The Joust",
				"message": "A knight is about to joust the murdere of his \nbeloved pet, Noodles. \"HALT!\" the knight says. \n\"Travelers, why don't you bet on the victor?\"",
				"lines": [
					"<y>[Bet]</y> Pay [2], [RELIC] or [POTION]. \nRoll the die. \n[DIE4][DIE5][DIE6] Gain [6].",
					"<y>[Leave]</y> Nothing happens."
				]
			},
			{
				"name": "Colosseum",
				"message": "You're knocked unconscious and awaken in the \nunderbelly of a colosseum. \"Do you want to warm \nup the crowd or be the main event?\"",
				"lines": [
					"<y>One choice for the party.</y>",
					"<y>[Warm Up]</y> Fight an Encounter [ENCOUNTER].",
					"<y>[Main Event]</y> Fight an Elite [ELITE]."
				]
			},
			{
				"name": "Old Beggar",
				"message": "An old beggar cloaked in fur reaches his hands \nout towards you. \"Spare some coin, child?\"",
				"lines": [
					"<y>[Give]</y> Pay [2]. Remove a card.",
					"<y>[Leave]</y> Nothing happens."
				]
			},
			{
				"name": "Knowing Skull",
				"message": "\"WHAT IS IT YOU SEEK?\"",
				"lines": [
					"<y>Choose one or two options.</y>",
					"<y>[Pick Me Up?]</y> Gain [POTION]. Lose 1 HP.",
					"<y>[Riches?]</y> Gain [3]. Lose 1 HP.",
					"<y>[Success?]</y> Gain [REWARD]. Lose 1 HP."
				]
			},
			{
				"name": "Cursed Tome",
				"message": "You find a giant book riddled with cryptic writings.",
				"lines": [
					"<y>[Take]</y> Gain [RARE] and a Curse.",
					"<y>[Read]</y> Add a random rare card to \nyour deck. Lose 2 HP.",
					"<y>[Skim]</y> Gain [REWARD]. Lose 1 HP."
				]
			}
		]
	},
	act2Enemies: {
		"enemies": [
			{ 
				"name": "Byrd", 
				"health": 5, 
				"attacks": [ 
					"[DIE1][DIE2] 1[ATTACK]1[ATTACK]",
					"[DIE3][DIE4] [STRENGTH]",
					"[DIE5][DIE6] 3[ATTACK]"
				],
				"abilty": "<y>Flying:</y> Byrd takes a max of 1 damage from each [ATTACK].",
				"summons": [ "Byrd", "Byrd" ],
				"rewards": "[1][REWARD]",
			},
			{ 
				"name": "Snake Plant", 
				"health": 17, 
				"attacks": [ 
					"[DIE1][DIE2] 3[ATTACK]2[ATTACK]",
					"[DIE3][DIE4] 3[ATTACK]2[ATTACK]",
					"[DIE5][DIE6] [VULNERABLE][VULNERABLE]"
				],
				"rewards": "[1][REWARD]"
			},
			{ 
				"name": "Spheric Guardian", 
				"health": 5, 
				"attacks": [ 
					"[RED] 2[ATTACK]5[SHIELD]",
					"[RED] 5[ATTACK]"
				],
				"abilty": "<y>Start of combat:</y> 10[SHIELD]. \n<y>Barricade:</y> This enemy doesn't lose [SHIELD] during its turn.",
				"rewards": "[1][REWARD]"
			},
			{ 
				"name": "Shelled Parasite", 
				"health": 18, 
				"attacks": [ 
					"[GREY] 4[ATTACK]2[SHIELD]",
					"[RED] 3[ATTACK][WEAK]2[SHIELD]",
					"[RED] [AOE]2[ATTACK]2[SHIELD]"
				],
				"rewards": "[POTION][REWARD]"
			},
			{ 
				"name": "Cultist", 
				"health": 9, 
				"attacks": [ 
					"1[ATTACK][STRENGTH]"
				],
				"summons": [ "Cultist", "Cultist" ],
				"rewards": "[POTION][REWARD]"
			},		
			{ 
				"name": "Snecko", 
				"health": 23, 
				"attacks": [ 
					"[DIE1][DIE2] 3[ATTACK] <y>Confused: 2</y>",
					"[DIE1][DIE2] 5[ATTACK] <y>Confused: 1</y>",
					"[DIE1][DIE2] 2[ATTACK] <y>Confused: 3</y>"
				],
				"ability": "<y>Start of turn:</y> If Snecko is in your row, the first card you play this turn costs the <y>Confused</y> value.",
				"rewards": "[1][REWARD]"
			},
			{ 
				"name": "Looter", 
				"health": 10, 
				"attacks": [ 
					"[GREY] 2[ATTACK]",
					"[GREY] 3[ATTACK]1[SHIELD]",
					"[GREY] Lose [2]. Looter leaves combat (you still gain rewards)."
				],
				"summons": [ "Mugger" ],
				"rewards": "[1][REWARD]"
			},
			{ 
				"name": "Looter", 
				"health": 10, 
				"attacks": [ 
					"[GREY] 2[ATTACK]",
					"[GREY] 3[ATTACK]1[SHIELD]",
					"[GREY] Lose [2]. Looter leaves combat (you still gain rewards)."
				],
				"summons": [ "Mugger" ],
				"rewards": "[1][REWARD]"
			},
			{ 
				"name": "Looter", 
				"health": 10, 
				"attacks": [ 
					"[GREY] 2[ATTACK]",
					"[GREY] 3[ATTACK]1[SHIELD]",
					"[GREY] Lose [2]. Looter leaves combat (you still gain rewards)."
				],
				"summons": [ "Mugger" ],
				"rewards": "[1][REWARD]"
			},
			{ 
				"name": "Chosen", 
				"health": 14, 
				"attacks": [ 
					"[GREY] [AOE]1[ATTACK][DAZE]",
					"[RED] 3[ATTACK][DAZE][DAZE]",
					"[RED] 5[ATTACK][STRENGTH]"
				],
				"summons": [ "Cultist" ],
				"rewards": "[1][POTION][REWARD]"
			},
			{ 
				"name": "Chosen", 
				"health": 16, 
				"attacks": [ 
					"[GREY] [AOE]1[ATTACK][DAZE]",
					"[RED] 3[ATTACK][DAZE][DAZE]",
					"[RED] 5[ATTACK][STRENGTH]"
				],
				"summons": [ "Byrd" ],
				"rewards": "[2][REWARD]"
			},
			{ 
				"name": "Centurion", 
				"health": 15, 
				"attacks": [ 
					"[DIE1][DIE2][DIE3] 3[ATTACK]",
					"[DIE4][DIE5][DIE6] 3[SHIELD] to Mystic."
				],
				"ability": "<y>Fury:</y> When the Mystic in this row dies, [STRENGTH], and only take the top action.",
				"summons": [ "Mystic" ],
				"rewards": "[1][POTION][REWARD]"
			},
			{ 
				"name": "Centurion", 
				"health": 15, 
				"attacks": [ 
					"[DIE1][DIE2][DIE3] 3[SHIELD] to Mystic.",
					"[DIE4][DIE5][DIE6] 3[ATTACK]"
				],
				"ability": "<y>Fury:</y> When the Mystic in this row dies, [STRENGTH], and only take the top action.",
				"summons": [ "Mystic" ],
				"rewards": "[1][REWARD]"
			}
		]
	},
	act2Summons: {
		"enemies": [
			{
				"name": "Torch Head",
				"health": 9,
				"attacks": [
					"1[ATTACK]"
				]
			},
			{
				"name": "Cultist",
				"health": 9,
				"attacks": [
					"1[ATTACK][STRENGTH]"
				]
			},
			{
				"name": "Mugger",
				"health": 12,
				"attacks": [
					"[GREY] 2[ATTACK] 1[SHIELD]",
					"[GREY] 2[ATTACK]",
					"[GREY] 4[ATTACK] 2[SHIELD]",
					"[GREY] Lose [2]. Mugger leaves combat."
				]
			},
			{
				"name": "Mystic",
				"health": 12,
				"attacks": [
					"[DIE1][DIE2] ALL enemies heal 3 HP.",
					"[DIE3][DIE4] 2[ATTACK][VULNERABLE]",
					"[DIE5][DIE6] [STRENGTH] to ALL enemies. Acts last."
				]
			},
			{
				"name": "Mystic",
				"health": 12,
				"attacks": [
					"[DIE1][DIE2] 2[ATTACK][VULNERABLE]",
					"[DIE3][DIE4] [STRENGTH] to ALL enemies. Acts last.",
					"[DIE5][DIE6] ALL enemies heal 3 HP."
				]
			},
			{
				"name": "Byrd",
				"health": 4,
				"attacks": [
					"[DIE1][DIE2] 3[ATTACK]",
					"[DIE3][DIE4] 1[ATTACK] 1[ATTACK]",
					"[DIE5][DIE6] [STRENGTH]"
				],
				"ability": "<y>Flying:</y> Byrd takes a max of 1 damage from each [ATTACK]."
			},
			{
				"name": "Byrd",
				"health": 4,
				"attacks": [
					"[DIE1][DIE2] [STRENGTH]",
					"[DIE3][DIE4] 1[ATTACK] 1[ATTACK]",
					"[DIE5][DIE6] 3[ATTACK]"
				],
				"ability": "<y>Flying:</y> Byrd takes a max of 1 damage from each [ATTACK]."
			},
			{
				"name": "Byrd",
				"health": 4,
				"attacks": [
					"[DIE1][DIE2] [STRENGTH]",
					"[DIE3][DIE4] 3[ATTACK]",
					"[DIE5][DIE6] 1[ATTACK] 1[ATTACK]"
				],
				"ability": "<y>Flying:</y> Byrd takes a max of 1 damage from each [ATTACK]."
			},
			{
				"name": "Red Slaver",
				"health": 10,
				"attacks": [
					"[DIE1][DIE2] 2[ATTACK][DAZE]",
					"[DIE3][DIE4] 2[ATTACK][WEAK]",
					"[DIE5][DIE6] 3[ATTACK]"
				],
				"ability": "Red Slavers act last."
			},
			{
				"name": "Red Slaver",
				"health": 10,
				"attacks": [
					"[DIE1][DIE2] 2[ATTACK][WEAK]",
					"[DIE3][DIE4] 3[ATTACK]",
					"[DIE5][DIE6] 2[ATTACK][DAZE]"
				],
				"ability": "Red Slavers act last."
			},
			{
				"name": "Red Slaver",
				"health": 10,
				"attacks": [
					"[DIE1][DIE2] 3[ATTACK]",
					"[DIE3][DIE4] 2[ATTACK][WEAK]",
					"[DIE5][DIE6] 2[ATTACK][DAZE]"
				],
				"ability": "Red Slavers act last."
			},
			{
				"name": "Red Slaver",
				"health": 10,
				"attacks": [
					"[DIE1][DIE2] 3[ATTACK]",
					"[DIE3][DIE4] 2[ATTACK][DAZE]",
					"[DIE5][DIE6] 2[ATTACK][WEAK]"
				],
				"ability": "Red Slavers act last."
			},
			{
				"name": "Blue Slaver",
				"health": 10,
				"attacks": [
					"[DIE1][DIE2] 2[ATTACK][VULNERABLE]",
					"[DIE3][DIE4] 2[ATTACK][DAZE]",
					"[DIE5][DIE6] 3[ATTACK]"
				]
			},
			{
				"name": "Blue Slaver",
				"health": 10,
				"attacks": [
					"[DIE1][DIE2] 2[ATTACK][DAZE]",
					"[DIE3][DIE4] 2[ATTACK][VULNERABLE]",
					"[DIE5][DIE6] 3[ATTACK]"
				]
			},
			{
				"name": "Blue Slaver",
				"health": 10,
				"attacks": [
					"[DIE1][DIE2] 3[ATTACK]",
					"[DIE3][DIE4] 2[ATTACK][VULNERABLE]",
					"[DIE5][DIE6] 2[ATTACK][DAZE]"
				]
			},
			{
				"name": "Blue Slaver",
				"health": 10,
				"attacks": [
					"[DIE1][DIE2] 2[ATTACK][VULNERABLE]",
					"[DIE3][DIE4] 3[ATTACK]",
					"[DIE5][DIE6] 2[ATTACK][DAZE]"
				]
			},
			{
				"name": "Bronze Orb",
				"health": 19,
				"attacks": [
					"[DIE1][DIE2] 2[SHIELD] to Automaton.",
					"[DIE3][DIE4] 3[ATTACK]",
					"[DIE5][DIE6] 2[ATTACK][DAZE]"
				]
			},
			{
				"name": "Bronze Orb",
				"health": 19,
				"attacks": [
					"[DIE1][DIE2] 3[ATTACK]",
					"[DIE3][DIE4] 2[SHIELD] to Automaton.",
					"[DIE5][DIE6] 2[ATTACK][DAZE]"
				]
			},
			{
				"name": "Bronze Orb",
				"health": 19,
				"attacks": [
					"[DIE1][DIE2] 2[ATTACK][DAZE]",
					"[DIE3][DIE4] 2[SHIELD] to Automaton.",
					"[DIE5][DIE6] 3[ATTACK]",
				]
			},
			{
				"name": "Bronze Orb",
				"health": 19,
				"attacks": [
					"[DIE1][DIE2] 3[ATTACK]",
					"[DIE3][DIE4] 2[ATTACK][DAZE]",
					"[DIE5][DIE6] 2[SHIELD] to Automaton."
				]
			}
		]
	},
	act2Elite: {
		"enemies": [
			{ 
				"name": "Gremlin Leader", 
				"health": 30, 
				"attacks": [ 
					"[RED] [AOE]2[ATTACK], 1[SHIELD][STRENGTH] to ALL enemies.",
					"[RED] [AOE]5[ATTACK]",
					"[RED] [SUMMON] Revive all dead Gremlins."
				],
				"summons": [ { "type": "Gremlin", "count": 2, "act": 1 } ],
				"rewards": "[2][RELIC][UPGRADEREWARD]",
			},
			{ 
				"name": "Taskmaster", 
				"health": 13, 
				"attacks": [ 
					"[AOE]1[ATTACK][STRENGTH]"
				],
				"summons": [ "Blue Slaver", "Red Slaver" ],
				"rewards": "[2][RELIC][UPGRADEREWARD]"
			},
			{ 
				"name": "Book of Stabbing", 
				"health": 30, 
				"attacks": [ 
					"[RED] [AOE]1[ATTACK]1[ATTACK][STRENGTH]",
					"[RED] [AOE]3[ATTACK][STRENGTH]"
				],
				"abilty": "<y>Painful Stabs:</y> After Book of Stabbing acts, gain [DAZE] if it dealt unblocked damage to you.",
				"rewards": "[2][RELIC][UPGRADEREWARD]"
			}
		]
	},
	act2Boss: {
		// TODO
	},
	
	act3Map: {
		// TODO
	},
	act3Events: {
		// TODO
	},
	act3Enemies: {
		// TODO
	},
	act3Summons: {
		// TODO
	},
	act3Elite: {
		// TODO
	},
	act3Boss: {
		// TODO
	},
	
	act4Boss: {
		// TODO
	}
};