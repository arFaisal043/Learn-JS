//*** Array is Object
//*** Array is mutable(changeable)
//*** We can store multiple data-type in a single array

/*

// Array is Object
const a = [1, 2, 3];
console.log(typeof(a)); // object



// Array is mutable(changeable)
const arr = [1, 2, 3, 4]
arr[0] = 420;
console.log(arr);




/// Mixed Data Types in Arrays
const mixedArray = [
    "Hello", // String
    42, // Number
    true, // Boolean
    null, // Null
    undefined, // Undefined
    { name: "John" }, // Object
    [1, 2, 3], // Array (nested)
    function () {
    // Function
    return "I'm a function";
    }
];
console.log(mixedArray);



// for loop over an array
const arr = ["US", "BD", "Uk"]
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



// for each loop over an array -> (Higher Order Function)
const arr = [1, 2, 3, 4, 5]
arr.forEach((item) => {
    console.log(item);
})



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


// Reduce Method: --> single output
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((prev, curr) => {
  return prev + curr;
})
console.log(sum); 





// Json Array

const persons = [
  {
    name: "Faisal",
    id: 3,
    area: "Basabo",
    age: 22,
  },
  {
    name: "Jubayer",
    id: 4,
    area: "Shonirakhra",
    age: 21,
  },
  {
    name: "Mehedy",
    id: 7,
    area: "Nabisko",
    age: 23,
  },
];

const findAge = persons.find((elm) => {
  return elm.age > 22; // here elm is an object, not a number
});
console.log(findAge);

const findArea = persons.find(elm => elm.area == "Basabo");
console.log(findArea);





// prob 1: Write a function that returns the sum of all elements in an array
function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, -2, 8])); // 16

*/ 


