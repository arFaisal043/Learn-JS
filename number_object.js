const a = 10000;
console.log(typeof(a)); // number
console.log(a.toString()); // 10000
console.log(a.toFixed(2)); // 10000.00
console.log(a.toLocaleString()); // 10,000

const b = 10.10;
console.log(parseInt(b)); // 10



/*
Use cases:

1. find max
const arr = [1, 2, 33, 4, 5, 6, 7];

let max = Number.NEGATIVE_INFINITY;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
    }
}
console.log(max); // 33

*/