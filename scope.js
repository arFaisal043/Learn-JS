/**
Scope = Visibility
- Scope determines the accessibility (visibility) of variables.

JavaScript variables have 3 types of scope:
Global scope, Function scope, Block scope



// Global Scope:

const name = "Faisal";
function printName() {
    console.log(name);
}
printName();




// Function scope:

function sayHello() {
    const msg = "Hello";
    console.log(msg);
}
console.log(msg);  // ReferenceError: msg is not defined




// Block scope:

if (1) {
  var age2 = 25;
  console.log(age2);
}
console.log(age2);

if(1) {
    let age = 25;
    console.log(age);
}
console.log(age); // not work

if (1) {
    const age1 = 25;
    console.log(age1);
}
console.log(age1);

*/