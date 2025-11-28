// prob 1: Write a function that takes three numbers and returns the largest one

const findLargest = (a, b, c) => {
    let max = 0;
    if(a > b && a > c) max = a;
    if(b > a && b > c) max = b;
    else max = c;

    return max;
}
console.log(findLargest(5, 2, 9));


// prob 2: Write a function that takes a number and returns "Even" if even, "Odd" if odd

const checkEvenOdd = (x) => {
    let check = true;

    if(x % 2 == 0) {
        check = "Even";
    }
    else {
        check = "Odd";
    }
    return check;
};

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(5));