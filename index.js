// 1.  Write a for loop using javascript and it will show only odd numbers between 1 - 20. Ex: 2, 4, 6, 8, 10 ,12, 14, 16, 18, 20
for(let i = 1; i <= 20; i++) {
    if(i % 2 != 0) {
      console.log(i);
    }
}



// 2. Write a function names sumArray(arr) that takes an array of numbers and returns the sum of all the numbers. Ex: sumArray([1, 2, 3, 4]); // Output: 10
const arr = [1, 2, 3, 4];

const sumArray = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(`Sum = ${sumArray(arr)}`);



// 3. Write a JavaScript function named mergeArrays(arr1, arr2) that takes two arrays as arguments and returns a new array. Ex. mergeArrays([1,2],[3,4]) //Output: [1,2,3,4]
const arr1 = [1, 2];
const arr2 = [3, 4];

const mergeArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
};
console.log(mergeArrays(arr1, arr2));