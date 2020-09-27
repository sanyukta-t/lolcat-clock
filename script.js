var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var timeEventJS = document.getElementById("timeEvent");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
var LOLcatImageJS = document.getElementById("lolcat");
	if (time == partyTime){
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "IZ PARTEE TIME!!";
	}
	else if (time == napTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
	}
	else if (time == lunchTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
	}
	else if (time == wakeupTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
	}
	else if (time < noon) {
		messageText = "Good morning!";
	}
	else if (time > evening) {
    messageText = "Good Evening!";
	}
	else {
	  messageText = "Good afternoon!";
	}
timeEventJS.innerText = messageText;
LOLcatImageJS.src = image;

var updateClock = function()
{
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};
showCurrentTime();
};
updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);
///////
var isPartyTime;
var PartyButton = document.getElementById("partyTimeButton");

var partyEvent = function() {

   if (isPartyTime == false) {
      isPartyTime = true;
      time = partyTime;
			PartyButton.innerText = "PARTY TIME!";
      PartyButton.style.backgroundColor = "#222";
			LOLcatImageJS.src = image;

   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      PartyButton.innerText = "PARTY OVER :(";
      PartyButton.style.backgroundColor = "#0A8DAB";
			LOLcatImageJS.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg"
			messageText = "IZ PARTEE TIME!!";

   }
	 
};
PartyButton.addEventListener("click", partyEvent);

/////
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");
////functions///
var wakeUpEvent = function()
{
    var wakeUpTime = wakeUpTimeSelector.value;
};
var lunchEvent = function()
{
    var lunchTime = lunchTimeSelector.value;
};
var napEvent = function()
{
    var napTime = napTimeSelector.value;
};
PartyButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
