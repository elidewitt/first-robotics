var theInterval;

function startTimer(duration, display) {
	var timer = duration - 1, // duration minus 1 because the timer takes 1 second before it starts
		minutes,
		seconds;
	var teleOpStart = 2.25 * 60;
	var endGameStart = .5 * 60;
	var postGameStart = 0;
	var timerForCalcs;

	minutes = parseInt((duration - teleOpStart) / 60, 10);
	seconds = parseInt((duration - teleOpStart) % 60, 10);

	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	display.textContent = minutes + ":" + seconds;

	document.querySelector("#gameMode").innerHTML = "Autonomous";
	document.querySelector("#autoStage").className += " w3-red";
	var timerAdjust = teleOpStart;
	var timerRestart = teleOpStart - endGameStart;


	theInterval = setInterval(function () {

		timerForCalcs = ((timer != 0) && (timer == timerAdjust)) ? timerRestart : timer - timerAdjust;

		minutes = parseInt(timerForCalcs / 60, 10);
		seconds = parseInt(timerForCalcs % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.textContent = minutes + ":" + seconds;

		switch (timer--) {
			case teleOpStart:
				document.querySelector("#gameMode").innerHTML = "Tele-Op";
				document.querySelector("#autoStage").className = document.querySelector("#autoStage").className.replace(" w3-red", "");
				document.querySelector("#teleStage").className += " w3-red";
				timerAdjust = endGameStart;
				timerRestart = endGameStart - postGameStart;
				//window.alert("Tele-Op is Starting! Switch Tabs!");
				document.getElementById("timeAlert").style.display = "block";
				break;
			case endGameStart:
				document.querySelector("#gameMode").innerHTML = "End Game";
				document.querySelector("#teleStage").className = document.querySelector("#teleStage").className.replace(" w3-red", "");
				document.querySelector("#endgameStage").className += " w3-red";
				timerAdjust = postGameStart;
				break;
			case postGameStart:
				document.querySelector("#gameMode").innerHTML = "Game Over";
				document.querySelector("#endgameStage").className = document.querySelector("#endgameStage").className.replace(" w3-red", "");
				document.querySelector("#postgameStage").className += " w3-red";
				clearInterval(theInterval);
				break;
			default:
				break;
		}
	}, 1000);  // one second intervals = 1,000 milliseconds
}


function beginCountdown(timerElementID, minutes) {
	var duration = 60 * minutes;
	var display = document.getElementById(timerElementID);
	startTimer(duration, display);
}