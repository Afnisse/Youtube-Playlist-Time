var totalTimeSeconds = 0;
var timestamp = document.getElementsByClassName("timestamp");
for (var i = 0; i < timestamp.length; i++) {
	var singleTimes = timestamp[i];
	var columnSpan = singleTimes.firstChild
	var time = columnSpan.innerText;
	totalTimeSeconds += parseTime(time);
}
console.log("totalTimeSeconds: "+totalTimeSeconds);
alert("Total Playlist Time: "+seconds2Hours(totalTimeSeconds));

function parseTime (timeString) {
	//console.log(timeString);
	var seconds = 0, minute = 0, hours = 0;
	var timeArray = timeString.split(":");
	seconds = parseInt(timeArray[0]);


	if (timeArray.length == 3) {
		seconds = parseInt(timeArray[2]);
		minute = parseInt(timeArray[1]);
		hours = parseInt(timeArray[0]);
	}else if (timeArray.length == 2) {
		seconds = parseInt(timeArray[1]);
		minute = parseInt(timeArray[0]);
		hours = 0;
	}else if (timeArray.length == 1) {
		seconds = parseInt(timeArray[0]);
		minute = 0;
		hours = 0;
	}
  
	var totalTime = seconds + (minute*60) + (hours*3600);
	console.log("Time: "+totalTime);
	return totalTime;
}

function seconds2Hours (seconds) {
	var secondsTime = seconds%60;
	var minutesTime = ((seconds - secondsTime)%3600)/60;
	var hoursTime = parseInt(seconds/3600);
	console.log(seconds+" => "+hoursTime+"h:"+minutesTime+"m:"+secondsTime+"s");
	//alert(seconds+" => "+hoursTime+"h:"+minutesTime+"m:"+secondsTime+"s");
	return hoursTime+"h:"+minutesTime+"m:"+secondsTime+"s";
}
