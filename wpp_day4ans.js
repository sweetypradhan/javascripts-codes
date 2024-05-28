// Get the current date
const currentDate = new Date();

// Calculate the date of Christmas (December 25)
const christmasDate = new Date(currentDate.getFullYear(), 11, 25);

// Calculate the time difference in milliseconds
const timeDifference = christmasDate - currentDate;

// Convert milliseconds to days
const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

// Display the result
console.log(`There are ${daysLeft} days left until Christmas! 🎅`);


