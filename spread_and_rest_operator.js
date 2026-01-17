/* 
🔹 1️⃣ Spread Operator (...) :

- The spread operator expands an array or object into individual elements.

✅ Use Cases:

// 1. Copy array:

const arr = [1, 2, 3, 4];
const copyArr = [...arr];
console.log(copyArr); // [ 1, 2, 3, 4 ]



// 2. Copy object:

const obj = {
  name: "Abdur Rahman Faisal",
  id: 463,
};
const copyObj = {...obj};
console.log(copyObj); // { name: 'Abdur Rahman Faisal', id: 463 }



// 3. Merge array:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergeArr = [...arr1, ...arr2];
console.log(mergeArr); // [ 1, 2, 3, 4, 5, 6 ]



// 4. Merge object:

const obj1 = {
    name: "Abdur Rahman Faisal"
}
const obj2 = {
    id: 463
}
const user = {...obj1, ...obj2};
console.log(user); // { name: 'Abdur Rahman Faisal', id: 463 }



// 5. Spread in array:

const arr = [1, 2, 3];
const arr1 = [100, 200, 300, ...arr];
console.log(arr1); // [ 100, 200, 300, 1, 2, 3 ]



// 6. Spread in objects:
const obj1 = { name: "Faisal", age: 22 };
const obj2 = { id: 101, ...obj1 };
console.log(obj2); // { id: 101, name: "Faisal", age: 22 }



// 7. Function arguments:

const arr = [1, 2, 3];

function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(...arr)); // 6




___________________________________________________________________________________


🔹 2️⃣ Rest Operator (...)

- The rest operator collects multiple elements into a single array.

✅ Use Cases:

// 1. In function parameters:

// If we don't know how many parameter are there
function sum(...num) {
    // return a + b + c + ... (not correct way)

    // we can use reduce method
    return num.reduce((prev, curr) => prev + curr);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

*/

