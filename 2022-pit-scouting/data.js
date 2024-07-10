const ScoutingSource = [
  {
    "Scouter Name" : ["text"],
    "Team Number" : ["options", WR_teams]
  },
  {
    "Driver Cam" : ["checkbox"],
    "Target Cam" : ["checkbox"],
    "Cargo Cam" : ["checkbox"],
    "Limelight" : ["checkbox"],
    "Color Sensor" : ["checkbox"]
  },
  {
    "Drivetrain" : ["textarea"],
    "Climber Level" : ["options", ["0", "1", "2", "3", "4"]],
    "Shooter Type" : ["textarea"],
    "Shooter Target" : ["options", ["None", "Lower", "Upper", "Both"]]
  },
  {
    "Stoage Capacity" : ["options", ["0", "1", "2"]],
    "Load From Ground" : ["checkbox"],
    "Load from Terminal" : ["checkbox"],
    "Shoot from Fender" : ["checkbox"]
  },
  {
    "Notes": ["textarea"] 
  }
]
