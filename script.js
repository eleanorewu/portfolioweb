// loader
window.addEventListener("load", function(){
            
    var load_screen = document.getElementById("loader");
     setTimeout(function(){
    //     //document.body.removeChild(load_screen);
           document.getElementById("loader").style.opacity = '0';
       },3000);
  
        setTimeout(function(){
            document.getElementById("loader").style.display = 'none';
        },4000);  
  });

//Clock;
function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    var shortDays = [
            'Sun', //Sunday starts at 0
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
    ];
    var longDays = [
            'Sunday', //Sunday starts at 0
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
    ];
    var months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    d = new Date(); //This returns Wed Apr 02 2014 17:28:55 GMT+0800 (Malay Peninsula Standard Time)
    m = d.getMonth();
    month = (months[m]);
    date = d.getDate();
    year = d.getFullYear();
    x = d.getDay(); //This returns a number, starting with 0 for Sunday

    var day = (shortDays[x]);
    var longDay = (longDays[x]);

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = (currentHours === 0) ? 12 : currentHours;

    // Compose the string for display
    var currentTimeString = day + " " + currentHours + ":" + currentMinutes + " " + timeOfDay;
    var longTimeString = longDay + ", " + month + " " + date + ", " + year;
    $("#clock").html(currentTimeString);
    $("#date").html(longTimeString);

}

$(document).ready(function() {
    updateClock();
    setInterval('updateClock()', 1000);
});
