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
