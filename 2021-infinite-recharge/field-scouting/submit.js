
function validateAndSubmit() {
  let xmlDoc, fileName, fileText, theForm, formName;
  formName = "scouter";

  let valid = validate();
  if (valid.bool == true) {

    //manually set local storage for scouter name and match num
    localStorage.setItem("Scouter Name", document.getElementById("Scouter Name").value);
    localStorage.setItem("Match Number", Number(document.getElementById("Match Number").value) + 1);

    fileName = document.getElementById("Match Number").value + "-" + document.getElementById("Team Number").value.slice(0, 4) + "_F.xml";
    xmlDoc = createXML(formName);

    let serializer = new XMLSerializer();
    fileText = serializer.serializeToString(xmlDoc);
    download(fileName, fileText);
    window.alert("Success!");
  } else {
    window.alert(valid.msg);
  }
  return valid.bool;
}


function validate() {
  let passed = true;
  let errorMsg = "We found issues with the following inputs: \n";
  let elements = document.getElementById("scouter").elements;
  for (i of elements) {
    switch (i.tagName) {
      case "SELECT" :
      case "INPUT" :
        if(!Boolean(String(i.value)) && (String(i.id) != "Comments")) {
          errorMsg += " * " + i.id + "\n";
          passed = false;
        }
        break;
    }
  }
  return {
    bool: passed,
    msg: errorMsg
  }
}
