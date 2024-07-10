let rowLen = [1, 2, 1, 2, 1];
const scouter = {
  "Pregame" : {
    "General Information" : {
      "Scouter Name" : {
        "element" : "input",
        "type" : "text"
      },
      "Match Number" : {
        "element" : "input",
        "type" : "number"
      },
      "Team Number" : {
        "element" : "select",
        "type" : "number",
        "options" : [
          "0093 : NEW Apple Corps",
          "0167 : Children of the Corn"
        ]
      },
      "No Show?" : {
        "element" : "input",
        "type" : "checkbox"
      }
    },
    "Alliance" : {
      "Alliance" : {
        "element" : "select",
        "type" : "text",
        "options" : ["Red", "Blue"]
      }
    },
    "Start Position" : {
      "Start Position" : {
        "element" : "select",
        "type" : "text",
        "options" : ["Far", "Middle", "Close"]
      }
    }
  },
  "Autonomous" : {
    "Power Ports" : {
      "Auton Upper" : {
        "element" : "input",
        "type" : "number"
      },
      "Auton Lower" : {
        "element" : "input",
        "type" : "number"
      }
    },
    "Bot Info" : {
      "Cross Initiation Line?" : {
        "element" : "input",
        "type" : "checkbox"
      }
    },
    "Shooting Location" : {
      "Auton Target Zone" : {
        "element" : "input",
        "type" : "checkbox"
      },
      "Auton Trench" : {
        "element" : "input",
        "type" : "checkbox"
      }
    }
  },
  "Tele-Op" : {
    "Power Ports" : {
      "Tele Upper" : {
        "element" : "input",
        "type" : "number"
      },
      "Tele Lower" : {
        "element" : "input",
        "type" : "number"
      }
    },
    "Control Panel" : {
      "Rotation Control" : {
        "element" : "input",
        "type" : "checkbox"
      },
      "Position Control" : {
        "element" : "input",
        "type" : "checkbox"
      }
    },
    "Shooting Location" : {
      "Tele Target Zone" : {
        "element" : "input",
        "type" : "checkbox"
      },
      "Tele Trench" : {
        "element" : "input",
        "type" : "checkbox"
      }
    },
    "" :{
      "Defensive Gameplay?" : {
        "element" : "input",
        "type" : "checkbox"
      }
    }
  },
  "Arena" : {
    "" : {
      "" : {
        "element" : "img",
        "type" : "image",
        "src" : "./arenaDiagram.png"
      }
    }
  },
  "Endgame" : {
    "Robot Placement" : {
      "Robot Placement" : {
        "element" : "select",
        "type" : "text",
        "options" : ["None", "Park", "Hang"]
      }
    },
    "" : {
      "Leveling method" : {
        "element" : "input",
        "type" : "checkbox"
      }
    }
  },
  "Postgame" : {
    "Technical Issues" : {
      "Any Technical Issues? (Specify in comments)" : {
        "element" : "input",
        "type" : "checkbox"
      }
    },
    "Final Scores" : {
      "Alliance Score" : {
        "element" : "input",
        "type" : "number"
      }
    },
    "Cards" : {
      "Any Cards Given To Your Alliance?" : {
        "element" : "select",
        "type" : "text",
        "options" : ["None", "Yellow", "Red"]
      }
    },
    "Comments" : {
      "Comments" : {
        "element" : "input",
        "type" : "text"
      }
    }
  },
  "" : {
    "" : {
      "" : {
        "element" : "button",
        "type" : "submit"
      }
    }
  }
}
