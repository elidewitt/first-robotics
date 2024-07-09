
function clearData(inputId) {
  var container = document.getElementById(inputId);
  var inputElements = container.getElementsByTagName('*');

  var element;

  for (var i = 0; i < inputElements.length; i++) {
    element = inputElements[i];
    switch (element.tagName) {
      case "TEXTAREA":
        element.value = "";
        break;
      case "INPUT":
        switch (element.type) {
          case "number":
            element.value = 0;
            break;
          case "checkbox":
            element.checked = false;
            break;
          case "radio":
            if (element.id == "none" || element.id == "no card") {
              element.checked = true;
            }

            break;
        }
        break;
    }
  }

  openTab('Pregame', 'pregameButton');

  document.getElementById("navbar").style.display = "none";
  document.getElementById("stagesBar").style.display = "none";
  document.getElementById("startButton").disabled = false;
  clearInterval(theInterval);
  document.querySelector("#gameMode").innerHTML = "Pregame";
  document.querySelector("#timeRemaining").innerHTML = "00:00";
  document.getElementById("timeAlert").style.display = "none";

  document.querySelector("#autoStage").className = document.querySelector("#autoStage").className.replace(" w3-red", "");
  document.querySelector("#teleStage").className = document.querySelector("#teleStage").className.replace(" w3-red", "");
  document.querySelector("#endgameStage").className = document.querySelector("#endgameStage").className.replace(" w3-red", "");
  document.querySelector("#postgameStage").className = document.querySelector("#postgameStage").className.replace(" w3-red", "");

}