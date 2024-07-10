const ScoutingSource = {
  "Pregame" : [
    {
      "Scouter Name" : ["text"],
      "Match Number" : ["number"],
      "Team Number" : ["options", [ // May need to be updated (last updated 1/14/2022)
        "0093 : NEW Apple Corps",
        "0167 : Children of the Corn",
        "0876 : Thunder Robotics",
        "1675 : UPS (Ultimate Protection Squad)",
        "1732 : Hilltoppers",
        "2052 : KnightKrawler",
        "2175 : The Fighting Calculators",
        "2227 : Tigers",
        "2239 : Technocrats",
        "2264 : Trojan Robotics",
        "2501 : Bionic Polars",
        "2503 : Warrior Robotics",
        "2506 : Saber Robotics",
        "2526 : Crimson Robotics",
        "2531 : RoboHawks",
        "2861 : Infinity's End",
        "2977 : Sir Lancer Bots",
        "3058 : AnnDroids",
        "3102 : Tech-No-Tigers",
        "3122 : The Alluminators",
        "3134 : The Accelerators",
        "3197 : HexHounds",
        "3275 : The Regulators",
        "3276 : TOOLCATS",
        "3291 : Golden Pirates",
        "3294 : Backwoods Engineers",
        "3740 : Storm Robotics",
        "4009 : Denfeld DNA Robotics",
        "4181 : Quack Attack",
        "4230 : TopperBots",
        "4238 : Resistance Robotics",
        "4511 : Power Amplified",
        "4607 : C.I.S.",
        "4656 : Rock Solid Robotics",
        "4674 : RoboJacks",
        "4728 : ROCORI Ratcheteers",
        "4741 : WingNuts",
        "5125 : Hawks on the Horizon",
        "5143 : GRG Raw Steel",
        "5253 : Bigfork Backwoods Bots",
        "5348 : Charger Robotics",
        "5464 : Bluejacket Robotics",
        "5653 : Iron Mosquitos",
        "5690 : SubZero Robotics",
        "5826 : Avis Automata",
        "5847 : Ironclad",
        "6047 : Proctor Frostbyte",
        "6146 : Blackjacks",
        "6160 : Bombatrons",
        "6217 : Bomb-Botz",
        "6318 : FE Freedom Engineers",
        "6574 : Ferradermis",
        "7048 : Red River Rage",
        "7068 : Mechanical Masterminds",
        "7311 : Boring Robots",
        "7797 : Cloquet's RipSaw Robotics",
        "7893 : Maple Lake High School",
        "8836 : Wayne Enterprises Inc. #695",
      ]],
      "No Show" : ["checkbox"]
    },
    {
      "Alliance" : ["options", [ "Red", "Blue" ]],
      "Starting Tarmac" : ["options", [ "Left", "Right" ]],
      "Tarmac Position" : ["options", [ "Hub", "Far", "Middle", "Corner"]]
    }
  ],
  "Autonomous" : [
    {
      "Taxi" : ["checkbox"],
      "Attempted Pickup" : ["checkbox"]
      //"Human Shot" : ["checkbox"]
    },
    {
      "Upper Close Range" : ["increment"],
      "Upper Mid Range" : ["increment"],
      "Upper Long Range" : ["increment"],
      "Upper Misses" : ["increment"]
    },
    {
      "Lower" : ["increment"],
      "Lower Misses" : ["increment"]
    }
  ],
  "Teleop" : [
    {
      "Upper Close Range" : ["increment"],
      "Upper Mid Range" : ["increment"],
      "Upper Long Range" : ["increment"],
      "Upper Misses" : ["increment"]
    },
    {
      "Lower" : ["increment"],
      "Lower Misses" : ["increment"]
    },
    {
      "Defensive Gameplay" : ["checkbox"],
    }
  ],
  "Endgame" : [
    {
      "Hangar" : ["options", [
        "None",
        "Low Rung",
        "Mid Rung",
        "High Rung",
        "Traversal Rung"
      ]],
      "Climb Duration (sec)" : ["increment"]
    }
  ],
  "Postgame" : [
    {
      
      "Final Alliance Score" : ["number"]
    },
    {
      "Technical Issues" : ["textarea"],
      "Referee Involvement": ["checkbox"]
    }
  ]
}
