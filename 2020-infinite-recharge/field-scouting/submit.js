

// =========================================================================================
// function submit
//   called when the Send/Submit button is pressed
//   validates final fields from the FieldScouting form
//   creates the XML from the FieldScouting form elements and initiates the download
//   clears out the form when done

function validateAndSubmit() {
  var valid = true;
  // Create variables
  var xmlDoc, fileName, fileText, theForm, formName;

  // Set the form name as a variable
  formName = 'FieldScouting';

  valid = validate();


  if (valid.bool == true) {
    // --- Create XML -----------------
    //  file name is a combination of match number, team number, and '_F' to indicate field scouting.  ex) 27-93_F.xml
    localStorage.setItem("scouter", document.getElementById("scouter").value);
    localStorage.setItem("matchNum", Number(document.getElementById("matchNum").value) + 1);

    fileName = document.getElementById('matchNum').value + '-' + document.getElementById("teamNum").value + '_F.xml';
    xmlDoc = createXmlDoc(formName);

    // --- Initiate Download ----------
    var serializer = new XMLSerializer();
    fileText = serializer.serializeToString(xmlDoc);
    download(fileName, fileText);
    window.alert("Success!");
  } else {
    //window.alert(valid.msg);
    document.getElementById("error").innerHTML = valid.msg;
    document.getElementById("hey").innerHTML = "HEY " + String(document.getElementById("scouter").value) + "!!";
  }
  return valid.bool;
}
function validate() {
  var valid = true;
  var errorMessage = "<b>Uh Oh!</b> We Found Some Issues With Your Application!<br>Please Review The Following.<br>";
  // --- Validate the form ----------
  if (document.getElementById("scouter").value == "") {
    valid = false;
    errorMessage += "<br> Your Name";
  }
  if (document.getElementById("matchNum").value == "") {
    valid = false;
    errorMessage += "<br> Match Number";
  }
  if (document.getElementById("matchNum").value > 999) {
    valid = false;
    errorMessage += "<br> Match Number Must Not Exceed 999";
  }
  if (document.getElementById("teamNum").value == "") {
    valid = false;
    errorMessage += "<br> Team Number";
  }
  if (!document.getElementById("allianceR").checked && !document.getElementById("allianceB").checked) {
    valid = false;
    errorMessage += "<br> Alliance";
  }
  if (!document.getElementById("posF").checked && !document.getElementById("posM").checked && !document.getElementById("posC").checked) {
    valid = false;
    errorMessage += "<br> Start Position";
  }
  if (document.getElementById("score").value == "") {
    valid = false;
    errorMessage += "<br> Final Score";
  }
  if (Number(document.getElementById("score").value) < 0) {
    valid = false;
    errorMessage += "<br> Final Score Can't Be Negative"
  }
  if (Number(document.getElementById("score").value) > 300) {
    valid = false;
    errorMessage += "<br> Final Score must not exceed 300"
  }
  if (document.getElementById("deadbot").checked) {
    if ((Number(document.getElementById("teleUpper").value) != 0) || (Number(document.getElementById("teleLower").value) != 0) || (document.getElementById("rotation").checked) || (document.getElementById("position").checked) || (document.getElementById("teleTarget").checked) || (document.getElementById("teleTrench").checked)) {
      valid = false;
      errorMessage += "<br> Dead Bot"
    }
  }
  if (document.getElementById("noshow").checked) {
    document.getElementById("autoUpper").value = 0;
    document.getElementById("autoLower").value = 0;
    document.getElementById("cross").checked = false;
    document.getElementById("autoTarget").checked = false;
    document.getElementById("autoTrench").checked = false;
    document.getElementById("teleUpper").value = 0;
    document.getElementById("teleLower").value = 0;
    document.getElementById("rotation").checked = false;
    document.getElementById("position").checked = false;
    document.getElementById("teleTarget").checked = false;
    document.getElementById("teleTrench").checked = false;
    document.getElementById("none").checked = true;
    document.getElementById("level").checked = false;
    document.getElementById("active").checked = false;
    document.getElementById("no card").checked = true;
  }

  return { bool: valid, msg: errorMessage };
}