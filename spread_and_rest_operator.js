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


*/


// move zero at the end
const arr = [0, 1, 2, 3, 0, 0, 4]

// sol 1:

let idx = 0; // 0 / 1 / 2 / 3

for(let i = 0; i < arr.length; i++) {
    if(arr[i] != 0) {
        arr[idx] = arr[i]; // [1, 2, 3, 4]
        idx++;
    }
}

for(let i = idx; i < arr.length; i++) {
  // arr.push(0) // -> which keeps adding zeros to the end, creating an infinite loop
    arr[i] = 0;
}
console.log(arr); // [1, 2, 3, 4, 0, 0, 0]
