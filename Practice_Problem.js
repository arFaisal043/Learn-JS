/* 

// 1. Write a function named calculateSum that takes two arguments and returns the sum of the two arguments.

const calculateSum = (a, b) => a + b;
console.log(`Sum of a + b = ${calculateSum(2, 3)}`);


// 2. Write a function named isEven that takes one argument and returns true if the number is even, and false if it is not.

const isEven = (x) => {
  if (x % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(18));


// 3. Write a function named findMax that takes an array of numbers and returns the largest number from the array.

const arr = [2, 1, 150, 8, 12, 3, 2, 7];

// Using Custom function
const findMax = (arr) => {
  max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(`Max value is = ${findMax(arr)}`);


// Using reduce method:
const findMax = arr.reduce( (prev, curr) => {
    return prev < curr ? curr : prev;
})
console.log(findMax);



// 4. Write a function named filterOddNumbers that takes an array of numbers and returns a new array containing only the odd numbers.

const arr1 = [2, 1, 150, 8, 12, 3, 2, 7];

const filterOddNumbers = (arr1) => {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 1) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
};
console.log(`New Array = [${filterOddNumbers(arr1)}]`);


// using filter method
const newArr = arr1.filter((val) => {
    return val % 2 == 1;
})
console.log(newArr);



// 5. Write a function named countWords that takes a string and returns the number of words in the string.

const str = "JavaScript";
const countWords = (str) => {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    cnt++;
  }
  return cnt;
};
console.log(`The number of words = ${countWords(str)}`);



// 6. union of two arrays, arr1=[1, 2, 3], arr2=[3, 4, 5]

// using set operation
// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];

// const union = [...new Set([...arr1, ...arr2])];
// console.log(union);



// 7. Count all unique elements

// const arr = [1, 2, 1, 3, 1, 2, 4, 3, 4, 2, 1, 5];
// const obj = {};

// for(let val of arr) {
//     if(val in obj) {
//         obj[val]++;
//     }
//     else {
//         obj[val] = 1;
//     }
// }
// console.log(obj); // { '1': 4, '2': 3, '3': 2, '4': 2, '5': 1 }



// 8. Write a function named removeDuplicates that takes an array and returns a new array with duplicate elements removed.

// SOln 1: O(n^2)
const arr2 = [1, 2, 1, 3, 4, 5, 3];
const removeDuplicates = (arr2) => {
  const newArr2 = [];

  for (let i = 0; i < arr2.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[i] == newArr2[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (isDuplicate == false) {
      newArr2.push(arr2[i]);
    }
  }

  return newArr2;
};
console.log(
  `After removing duplicate value, new array = [${removeDuplicates(arr2)}]`
);


// Soln2: USing set: O(n)
const unique = [...new Set(arr)];
console.log(unique);


// Soln3: Using Object: O(n)
const arr = [1, 2, 1, 3, 1, 2, 4, 3, 4, 2, 1, 5];
const obj = {};

for(let val of arr) {
    if(val in obj) {
        obj[val]++;
    }
    else {
        obj[val] = 1;
    }
}
console.log(obj); // { '1': 4, '2': 3, '3': 2, '4': 2, '5': 1 }

// find keys from object
const output = Object.keys(obj);
console.log(output); // [ '1', '2', '3', '4', '5' ] 

// we get string, now convert onto an number
const numArr = output.map(Number);
console.log(numArr); // [ 1, 2, 3, 4, 5 ]





// prob9: find largest string on an array
// const str = ["c", "javascript", "js", "java", "python"];

// let largeStr = str[0];
// console.log(largeStr);

// for (let i = 1; i < str.length; i++) {
//   if (largeStr.length < str[i].length) {
//     largeStr = str[i];
//   }
// }

// console.log(largeStr);





// prob 10: find unique elm on an array
// const arr = [1, 2, 1, 2, 3, 4, 3];
// let ans = 0;

// for(let i = 0; i < arr.length; i++) {
//     ans ^= arr[i];
// }
// console.log(ans);


*/