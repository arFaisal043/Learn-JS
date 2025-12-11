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
    } else {
        check = "Odd";
    }
    return check;
};

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(5));



// rob 3: find prime number

let checkPrime = (n) => {

    let cnt = 0;
    for(let i = 2; i < n; i++) {
        if(n % i == 0) {
            cnt++;
        }
    }

    if(cnt == 0) {
        console.log("Prime");
    } 
    else {
        console.log("Not prime");
    }
}

checkPrime(25);