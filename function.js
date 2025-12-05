/*

function add(a, b) {
  return a + b;
}
const res = add(2, 3);
console.log(res);

function namePrint(str) {
  console.log(`Hello, ${str}`);
}

namePrint("Faisal");


// Assign a function on a variable
const a = function() {
    console.log("Hello");
}
a()


function func(...something) {
    const sum = (something[0] + something[1]) * something[4];
    console.log(sum);
}

func(1, 2, 3, 4, 5);



// function return type

function f1() {
  return f2();
}
function f2() {
  return f3();
}
function f3() {
  console.log("I'm from f3");
}
f1();




// Arrow Function
const funcName = (a, b) => {
  return a*b;
}
console.log(funcName(2, 3));


const square = (a) => a*a;
console.log(square(3));





// For each over an array
const cities = ["Dhaka", "Khulna", "Sylhet"];
cities.forEach( (val) => {
  console.log(val);
})





// - Array Method

// Map: --> new Array
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((val) => {
  return val*val;
})
console.log(newArr); // [ 1, 4, 9, 16, 25 ]


// Filter: --> new Array
const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter((val) => {
  return val % 2 == 0;
})
console.log(newArr); // [ 2, 4 ]


// Reduce Method: single output
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((prev, curr) => {
  return prev + curr;
})
console.log(sum); 


//// find max value using reduce function
const arr = [66, 3, 21, 69, 90, 1]
const max = arr.reduce((prev, curr) => {
  return prev < curr ? curr : prev;
})
console.log(max);


*/


// Anonymous function: A function without have any name
// setTimeout(() => {
//   console.log("This msg will be run after 3 seconds.....");
// }, 3000);




// IIFE: It run exactly once
// ( () => {
//   console.log("This is IIFE function")
// } )()




// Generator functions: generator functions return an iterator (specifically, a Generator object) that can be iterated over using its next() method.
// function* counter() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const cnt = counter();
// console.log(cnt.next()); // { value: 1, done: false }
// console.log(cnt.next()); // { value: 2, done: false }
// console.log(cnt.next()); // { value: 3, done: false }
// console.log(cnt.next()); // { value: undefined, done: true }
// console.log(cnt.next().value); // 1
// console.log(cnt.next().value); // 2
// console.log(cnt.next().value); // 3
// console.log(cnt.next().value); // undefined



