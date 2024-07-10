

// =========================================================================================
// function submit
//   called when the Send/Submit button is pressed
//   validates final fields from the FieldScouting form
//   creates the XML from the FieldScouting form elements and initiates the download
//   clears out the form when done

function validateAndSubmit() {
    //alert ("egan");
    // var valid = true;
    // Create variables
    var xmlDoc,
        fileName,
        fileText,
        theForm,
        formName;

    // Set the form name as a variable
    formName = 'pitScout';

    var valid = validate();


    if (valid.bool == true) {
        //if (valid == true) {
        // --- Create XML -----------------
        localStorage.setItem("scouter", document.getElementById("scouter").value);

        //  file name is a combination of match number, team number, and '_F' to indicate field scouting.  ex) 27-93_F.xml
        fileName = document.getElementById('teamNumber').value + '_P.xml';
        xmlDoc = createXmlDoc(formName);

        // --- Initiate Download ----------
        var serializer = new XMLSerializer();
        fileText = serializer.serializeToString(xmlDoc);
        download(fileName, fileText);
        window.alert("Success!");
    } else {
        //window.alert(valid.msg);
        document.getElementById("schuff").style.display = "block";
        document.getElementById("error").innerHTML = valid.msg;
        document.getElementById("hey").innerHTML = "HEY " + String(document.getElementById("scouter").value) + "!!";
    }
    return valid.bool;
    //return valid;
}
function validate() {
    var valid = true;
    var errorMessage = "<b>Uh Oh!</b> We Found Some Issues With Your Application!<br>Please Review The Following.<br>";
    // --- Validate the form ----------
    if (document.getElementById("scouter").value == "") {
        valid = false;
        errorMessage += "<br> who are you tho, tell us in scouter name field";
    }
    if (Number(document.getElementById("botHeiIn").value) == "" && Number(document.getElementById("botHeiFt").value) == "") {
        valid = false;
        errorMessage += "<br> how tall da bot";
    } else {
        document.getElementById("newHeight").value = 12 * Number(document.getElementById("botHeiFt").value) + Number(document.getElementById("botHeiIn").value)
    }
    if (Number(document.getElementById("robotWeight").value) == "") {
        valid = false;
        errorMessage += "<br> how heavy da bot";
    }
    if (Number(document.getElementById("teamNumber").value) == "") {
        valid = false;
        errorMessage += "<br> what team";
    }
    if (!document.getElementById("inspectionY").checked && !document.getElementById("inspectionN").checked) {
        valid = false;
        errorMessage += "<br> did they pass inspection doe?";
    }
    if (document.getElementById("drivetrain").value == "") {
        valid = false;
        errorMessage += "<br> whats their drivetrain";
    }
    if (document.getElementById("visionSystem").value == "") {
        valid = false;
        errorMessage += "<br> how does their bot see??? vision system?";
    }
    if (document.getElementById("visionSystemUse").value == "") {
        valid = false;
        errorMessage += "<br> how do they use their eyes? use of vision system";
    }
    if (!document.getElementById("startingNone").checked && !document.getElementById("startingLeft").checked && !document.getElementById("startingMiddle").checked && !document.getElementById("startingRight").checked) {
        valid = false;
        errorMessage += "<br> where do they start";
    }
    if (document.getElementById("autoStrategy").value == "") {
        valid = false;
        errorMessage += "<br> tell me their strat for autonomous";
    }
    if (document.getElementById("shootLocationAuto").value == "") {
        valid = false;
        errorMessage += "<br> in auto, where do they shoot?";
    }
    if (document.getElementById("scoreLocationAuto").value == "") {
        valid = false;
        errorMessage += "<br> select scoring location for autonomous pls";
    }
    if (document.getElementById("shootLocationTele").value == "") {
        valid = false;
        errorMessage += "<br> select tele op shooting location plssssssss";
    }
    if (document.getElementById("scoreLocationTele").value == "") {
        valid = false;
        errorMessage += "<br> select scoring location for tele op pls";
    }
    if (!document.getElementById("rotateControlY").checked && !document.getElementById("rotateControlN").checked) {
        valid = false;
        errorMessage += "<br> choose a rotation control";
    }
    if (!document.getElementById("positionControlY").checked && !document.getElementById("positionControlN").checked) {
        valid = false;
        errorMessage += "<br> pick a color position control please AND THANK YOU";
    }
    if (Number(document.getElementById("ballHold").value) == "") {
        valid = false;
        errorMessage += "<br> how many balls can their bot hold?";
    }
    if (document.getElementById("loadCells").value == "") {
        valid = false;
        errorMessage += "<br> how DO they load cells? you tell me";
    }
    if (!document.getElementById("hangY").checked && !document.getElementById("hangN").checked) {
        valid = false;
        errorMessage += "<br> choose one of da hanging options";
    }
    if (document.getElementById("levelMethod").value == "") {
        valid = false;
        errorMessage += "<br> enter a leveling method"
    }

    return {
        bool: valid,
        msg: errorMessage
    };
}
