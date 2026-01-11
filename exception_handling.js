/* 
In JavaScript, 
try - The try block contains the code that might throw an error.
catch - The catch block executes only if an error occurs in the try block.
finally - The finally block executes after the try and catch blocks, whether an error occurred or not.

try {
  // Code that may cause an error
} 
catch (error) {
  // Code to handle the error
} 
finally {
  // Code that always runs, no matter what
}



// example 1: Handles runtime errors safely. | Runtime error = error that occurs during program execution

try {
  let result = 10 / x; // x is not defined
  console.log(result); // here come an error
} 
catch (err) {
  console.log("Error is: ", err.message);
}



// example 2: Custom Error Using by throw

const input = prompt("Enter a number: ");
console.log(input);
const val = Number(input);

const ans = 10 / val;

try {
    if(val == 0) {
        // custom error msg
        throw new Error("Division by zero is not allowed");
    }
    if(val < 0) {
        throw new Error("Input can not be a Negative number");
    }
    else {
        console.log("Ans is = ", ans);
    }
}
catch(err) {
    console.log(err.message);
}
finally {
    console.log("I will execute no matter what");
}

*/



// example 2: Custom Error Using by throw

const input = prompt("Enter a number: ");
console.log(input);
const val = Number(input);

const ans = 10 / val;

try {
    if(val == 0) {
        // custom error msg
        throw new Error("Division by zero is not allowed");
    }
    if(val < 0) {
        throw new Error("Input can not be a Negative number");
    }
    else {
        console.log("Ans is = ", ans);
    }
}
catch(err) {
    console.log(err.message);
}
finally {
    console.log("I will execute no matter what");
}