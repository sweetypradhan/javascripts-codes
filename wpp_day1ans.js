// Create a new Date object for the current date and time
let today = new Date();

// Get the current day as a number (0-6) where 0 represents Sunday and 6 represents Saturday
let day = today.getDay();

// Array containing the names of the days of the week
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Display the current day by accessing the array with the current day number
console.log("Today is :" + " " + days[day]);

// Create a new Date object instance for the current time
let now = new Date();

// Get the current hours, minutes, and seconds
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

// Determine if the current time is AM or PM
let ampm = hours >= 12 ? 'PM' : 'AM';

// Convert hours from 24-hour format to 12-hour format
hours = hours % 12;

// If the hour is '0' (midnight in 24-hour time), change it to '12' to reflect 12-hour time
hours = hours ? hours : 12;

// Add a leading zero to minutes if less than 10 for proper formatting
minutes = minutes < 10 ? '0' + minutes : minutes;

// Add a leading zero to seconds if less than 10 for proper formatting
seconds = seconds < 10 ? '0' + seconds : seconds;

// Display the current time in AM/PM format
console.log("Current time is : " + hours + ampm + ':' + minutes + ':' + seconds);
