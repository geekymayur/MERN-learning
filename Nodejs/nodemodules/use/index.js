// import installed mdoles and use in project

// require chalk 
const chalk = require("chalk");
// reqyure validator
const validator = require("validator");

let email = validator.isEmail("myiuhjhgfhg@jjhghg.com");

console.log(chalk.bgRed(email));

console.log(chalk.bgYellow.black("   Mayur   "));