
const a = 10;
const pi = 3.1416;
console.log(`a = ${a}`);
console.log(`pi = ${pi}`);


// conditional statement

if(true) {
    console.log("true");
} else {
    console.log("False");
}

const age = 19;
console.log(age > 18 ? "Adult" : "Not Adult");



// Loops
for(let i = 0; i < 10; i++) {
    console.log(i);
}


// Basic Object
const car = {
    model: "BMW",
    year: 2020,
    color: "Red"
}
console.log(car.model);
console.log(car.color); // red

car.color = "blue"
console.log(car); // blue



// Basic Array
const arr = [1, 2, 3, 40, 5, 6, 7];
console.log(arr); // [1, 2, 3, 40, 5, 6, 7]
console.log(arr.sort((a, b) => a-b));   //[1, 2, 3, 5, 6, 7, 40];