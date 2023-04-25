console.log("JavaScript file linked");

const openingHour = 9;
const closingHour = 17;

  // Get the current hour in 24-hour format
const now = new Date();
const currentHour = now.getHours();

  // Check if the business is open or closed
if (currentHour >= openingHour && currentHour < closingHour) {
    document.getElementById("status").innerHTML = "We're open!";
 } else {
    document.getElementById("status").innerHTML = "Sorry, we're closed.";
  }