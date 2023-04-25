console.log("JavaScript file linked");

// Set the opening and closing hours in 24-hour format
const weekdaysOpeningHour = 9;
const weekdaysClosingHour = 17;
const saturdayOpeningHour = 10;
const saturdayClosingHour = 16;

  // Get the current day and hour in 24-hour format
const now = new Date();
const currentDay = now.getDay();
const currentHour = now.getHours();

 // Check if the business is open or closed
if (currentDay === 0 || currentHour < weekdaysOpeningHour || currentHour >= weekdaysClosingHour) {
    // Closed on Sundays or outside weekdays hours
    document.getElementById("status").innerHTML = "Sorry, we're closed.";
  } else if (currentDay === 6 && (currentHour < saturdayOpeningHour || currentHour >= saturdayClosingHour)) {
    // Closed on Saturdays outside Saturday hours
    document.getElementById("status").innerHTML = "Sorry, we're closed.";
  } else {
    // Open
    document.getElementById("status").innerHTML = "We're open!";
  }