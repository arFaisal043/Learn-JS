// PI
console.log(Math.PI); // 3.141592653589793

// abs (absolute value)
const a = -3;
console.log(Math.abs(a)); // 3

// max and min value
const arr = [1, 22, 6, -3, 10];
console.log(Math.max(...arr)); // 22
console.log(Math.min(...arr)); // -3

// ceil and floor
const b = 9.5;
console.log(Math.ceil(b)); // 10
console.log(Math.floor(b)); // 9

// power
const c = [1, 2, 3, 4, 5];
const newC = c.map((val) => {
    return Math.pow(val, 2); // power 2
})
console.log(newC); // [ 1, 4, 9, 16, 25 ]


// random (range 0 to 1)
const code = Math.floor(100000 + Math.random()*900000);
console.log(code); // 780364



/*
// Use Cases:
1. find square root a+b
const fn = (a, b) => {
    return Math.sqrt(a + b);
}
console.log(fn(2, 3));


2. find power of 3 on an array
const c = [1, 2, 3, 4, 5];
const newC = c.map((val) => {
    return Math.pow(val, 3); // power 3
})
console.log(newC); // [ 1, 8, 27, 64, 125 ]

*/