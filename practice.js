/*

const getData = (data) => {
    setTimeout(() => {
        console.log("Data", data);
    })
}

getData(1);

Data:  1
Data:  3
Data:  2 
*/



// find unique elm on an array
const arr = [1, 2, 1, 2, 3, 4, 3];
let ans = 0;

for(let i = 0; i < arr.length; i++) {
    ans ^= arr[i];
}
console.log(ans);