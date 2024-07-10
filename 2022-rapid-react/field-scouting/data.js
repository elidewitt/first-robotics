const ScoutingSource = {
  "Pregame" : [
    {
      "Scouter Name" : ["text"],
      "Match Number" : ["number"],
      "Team Number" : ["options", WR_teams],
      "No Show" : ["checkbox"]
    },
    {
      "Alliance" : ["options", [ "Red", "Blue" ]],
      "Position" : ["options", ["Close", "Mid", "Far"]]
    }
  ],
  "Autonomous" : [
    {
      "Taxi" : ["checkbox"],
      "Attempted Pickup" : ["checkbox"]
    },
    {
      "Upper" : ["increment"],
      "Upper Misses" : ["increment"]
    },
    {
      "Lower" : ["increment"],
      "Lower Misses" : ["increment"]
    }
  ],
  "Teleop" : [
    {
      "Upper" : ["increment"],
      "Upper Misses" : ["increment"]
    },
    {
      "Lower" : ["increment"],
      "Lower Misses" : ["increment"]
    },
    {
      "Shoot from Fender" : ["checkbox"],
      "Defensive Gameplay" : ["checkbox"]
    }
  ],
  "Endgame" : [
    {
      "Hangar" : ["options", ["0", "1", "2", "3", "4"]],
      "Climb Start Time" : ["number"]
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
