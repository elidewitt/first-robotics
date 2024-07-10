// validate the entries in the form
function validate() {
  let passed = true;
  let error = "We found issues with the following inputs: \n";
  
  // If the robot is a no show, only validate the scouter, match number, team number, and alliace
  if (document.getElementById("Pregame-No Show").checked) {
    const noShowReqs = ["Pregame-Scouter Name", "Pregame-Match Number", "Pregame-Team Number", "Pregame-Alliance", "Postgame-Final Alliance Score"];
    for (req of noShowReqs) {
      elt = document.getElementById(req);
      switch (elt.tagName) {
          case "SELECT" :
          case "INPUT" :
            if(!Boolean(String(elt.value))) {
              error += " * " + elt.id + "\n";
              passed = false;
            }
            break;
      }
    }
    return { passed, error };
  }
  for (elt of document.getElementById("scoutingForm").elements) {
    switch (elt.tagName) {
      case "SELECT" :
      case "INPUT" :
        if(!Boolean(String(elt.value))) {
          error += " * " + elt.id + "\n";
          passed = false;
        }
        break;
    }
  }
  return { passed, error };
}

function validateAndSubmit() {
  let xmlDoc, fileName, fileText, theForm, formName;
  formName = "scoutingForm";

  let validation = validate();
  if (validation.passed) {

    //manually set local storage for scouter name and match num
    localStorage.setItem("Pregame-Scouter Name", document.getElementById("Pregame-Scouter Name").value);
    localStorage.setItem("Pregame-Match Number", Number(document.getElementById("Pregame-Match Number").value) + 1);
    localStorage.setItem("Pregame-Alliance", document.getElementById("Pregame-Alliance").value);
    localStorage.setItem("Pregame-Position", document.getElementById("Pregame-Position").value);
    

    fileName =  "F_" + document.getElementById("Pregame-Match Number").value + "-" + document.getElementById("Pregame-Team Number").value.replace(/ .*/,'') + ".json";
    
    data = createJSON();

    fileText = JSON.stringify(data);
    download(fileName, fileText);
    window.alert("Success!");
    return true;
  } else {
    window.alert(validation.error);
    return false;
  }
}

function createJSON() {
  let docObject = {};
  for (let category in ScoutingSource) {
    for (let group in ScoutingSource[category]) {
      for (let field in ScoutingSource[category][group]) {
        let element = document.getElementById(category + "-"  + field);
        switch (ScoutingSource[category][group][field][0]) {
          case "text":
          case "options":
          case "textarea":
            docObject[category + "-"  + field] = String(element.value);
            break;
          case "number":
          case "increment":
            docObject[category + "-"  + field] = Number(element.value);
            break;
          case "checkbox":
            docObject[category + "-"  + field] = Number(element.checked);
            break;
        }
      }
    }
  }
  return docObject;
}

function download(fileName, text) {
  let element = document.createElement("a");
  element.setAttribute("href", "data:text/plain;charset=utf-16," + encodeURIComponent(text + "\r\n"));
  element.setAttribute("download", fileName);

  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
