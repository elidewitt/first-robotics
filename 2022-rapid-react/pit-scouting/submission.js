// validate the entries in the form
function validate() {
  let passed = true;
  let error = "We found issues with the following inputs: \n";

  for (elt of document.getElementById("scoutingForm").elements) {
    switch (elt.tagName) {
      case "SELECT":
      case "INPUT":
        if (!Boolean(String(elt.value))) {
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
    localStorage.setItem("Scouter Name", document.getElementById("Scouter Name").value);

    fileName = "P_" + document.getElementById("Team Number").value.replace(/ .*/, '') + ".json";

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
  for (let group in ScoutingSource) {
    for (let field in ScoutingSource[group]) {
      let element = document.getElementById(field);
      switch (ScoutingSource[group][field][0]) {
        case "text":
        case "options":
        case "textarea":
          docObject[field] = String(element.value);
          break;
        case "number":
        case "increment":
          docObject[field] = Number(element.value);
          break;
        case "checkbox":
          docObject[field] = Number(element.checked);
          break;
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
