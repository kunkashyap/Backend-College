// const math = require('./utils/math.utils')  

// console.log(math.add(5,2));
// console.log(math.multiply(12,2));




//Destructuring import
const {subtract , divide} = require('./utils/math.utils')
console.log(subtract(12,3));

//notice here we did this w/o declaring a math variable
// we just called out the subtract function from the module in math.utils

//Error Handling
try {
    console.log(divide(10,0));
    
} catch (error) {
    console.log("ERROR", error.message);
    
}


//Using 'chalk' package for colored terminal output
// ran npm install chalk@4

const chalk = require('chalk')
console.log(chalk.green("Success!"));
console.log(chalk.red.bold("Error!"));
console.log(chalk.blue.italic("hi, I am Kunal !"));


