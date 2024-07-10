// Global variables
var duluth = "duluth";
var lacross = "lacross";
var nationals = "nationals"; // teams not yet known

//  <<< change this to switch between Duluth, La Cross, & Nationals >>>
var competition = duluth;
//var competition = lacross;
//var competition = nationals;

var teamNumbersAndNames;

teamNumbersAndNames = loadTeams(competition);
addTeamsToDataList(teamNumbersAndNames);


function setTeamName(teamNumber) {
	document.getElementById("teamName").value = teamNumbersAndNames[teamNumber];
}

function addTeamsToDataList(teams) {
	var option;

	//append each team number to the team number select list options
	for (var key in teams) {
		option = document.createElement('option');
		option.value = key;
		option.innerHTML = key;
		document.getElementById("teamNum").appendChild(option);
	}
}

function loadTeams(competition) {
	var teamsInfo;

	switch (competition) {
		case duluth:
			teamsInfo = {
				"93": "NEW Apple Corps",
				"167": "Children of the Corn",
				"1816": "The Green Machine",
				"2169": "KING TeC",
				"2175": "The Fighting Calculators",
				"2177": "The Robettes",
				"2264": "Trojan Robotics",
				"2503": "Warrior Robotics",
				"2526": "Crimson Robotics",
				"2823": "The Automatons",
				"2861": "Infinity's End",
				"3058": "AnnDroids",
				"3100": "Lightning Turtles",
				"3102": "Tech-No-Tigers",
				"3122": "The Alluminators",
				"3134": "The Accelerators",
				"3267": "Mariner Robotics",
				"3275": "The Regulators",
				"3291": "Au Pirates (A.K.A Golden Pirates)",
				"3294": "Backwoods Engineers",
				"3740": "Storm Robotics",
				"3754": "TrekNorth First City Robotics",
				"3755": "Dragon Robotics",
				"4009": "Denfeld DNA Robotics",
				"4166": "Robostang",
				"4181": "Quack Attack",
				"4217": "Scitobors",
				"4230": "TopperBots",
				"4238": "Resistance Robotics",
				"4480": "UC-Botics",
				"4511": "Power Amplified",
				"4674": "RoboJacks",
				"4728": "Rocori Rench Reckers",
				"4741": "WingNuts",
				"4845": "Lion's Pride",
				"5253": "Bigfork Backwoods Bots",
				"5290": "Mechanical Howl",
				"5348": "Charger Robotics",
				"5464": "Bluejacket Robotics",
				"5542": "RoboHerd",
				"5576": "Team Terminator",
				"5586": "Bond Brigade",
				"5653": "Iron Mosquitos",
				"5690": "SubZero Robotics",
				"5826": "Avis Automata",
				"5991": "Chargers",
				"5999": "Byte Force",
				"6022": "Wrench Warmers",
				"6045": "Sabre Robotics",
				"6047": "Proctor Frostbyte",
				"6146": "Blackjacks",
				"6160": "Bombatrons",
				"6217": "Bomb-Botz",
				"6318": "FE Freedom Engineers",
				"6453": "Bog Bots!",
				"6628": "KMS BOTKICKERS",
				"7041": "Doomsday Dogs",
				"7068": "Mechanical Masterminds",
				"7797": "Cloquet's RipSaw Robotics",
				"7864": "North Woods Robotics",
				"7893": "Maple Lake High School",
				"8372": "HCN Storm",
				"8416": "ElyRobots1"
			};
			break;
		case lacross:
			teamsInfo = {
				"93": "NEW Apple Corps",
				"269": "CooneyTech",
				"876": "Thunder Robotics",
				"1091": "Oriole Assault",
				"1306": "BadgerBOTS",
				"1714": "MORE Robotics",
				"2062": "CORE 2062",
				"2194": "Fondy Fire",
				"2451": "PWNAGE",
				"2470": "Team BJORG",
				"2481": "Roboteers",
				"2506": "Saber Robotics",
				"2530": "Inconceivable",
				"2531": "RoboHawks",
				"2574": "RoboHuskie",
				"2704": "Roaring Robotics",
				"2826": "Wave Robotics",
				"2830": "Riverside RoboTigers",
				"2977": "Sir Lancer Bots",
				"2987": "Rogue Robotics",
				"3090": "Ramhawks",
				"3197": "HexHounds",
				"3418": "RoboRiot",
				"3692": "Rock N' Robotics",
				"3695": "Foximus Prime",
				"3723": "TEKnights",
				"3883": "Data Bits",
				"4011": "πρbοtic (pi robotics)",
				"4021": "igKnightion",
				"4054": "Robo Raiders",
				"4143": "MARS/ WARS",
				"4607": "C.I.S.",
				"4655": "Stateline Robotics",
				"4657": "Saints Robotics",
				"4786": "Nicolet FEAR",
				"5003": "Topperbotics",
				"5019": "Gearbox Heroes",
				"5299": "Winger Tech",
				"5339": "Hurricanes",
				"5442": "Mechanical Monarchy",
				"5903": "ThorBots",
				"5914": "Robotic Warriors",
				"6166": "Thorobotics",
				"6317": "Disruptive Innovation",
				"6381": "Red Raider Robotics",
				"7021": "TC Robotics",
				"7048": "Red River Rage",
				"8024": "Sparta Robotans"
			};
			break;
		case nationals:
			// teams not yet known
			break;
		default: // default for SWITCH on competition
			break;
	} // END SWITCH on competition
	return teamsInfo;
}
