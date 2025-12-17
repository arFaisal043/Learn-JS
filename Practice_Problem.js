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

/*
// Using reduce method:
const findMax = arr.reduce( (prev, curr) => {
    return prev < curr ? curr : prev;
})
console.log(findMax);
*/

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

/*
// using filter method
const newArr = arr1.filter((val) => {
    return val % 2 == 1;
})
console.log(newArr);
*/

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

// 6. Write a function named removeDuplicates that takes an array and returns a new array with duplicate elements removed.

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

/*
// USing filter method:
const removeDuplicates = (arr2) => {
   return arr2.filter((item, index) => arr2.indexOf(item) === index);
};
console.log(removeDuplicates(arr2));
*/
