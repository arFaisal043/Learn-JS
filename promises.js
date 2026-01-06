/*
- A JavaScript Promise is an 'object' representing the eventual result (completion or failure) of an asynchronous operation.

- It is a solution of callback hell

- When should we use promise in javascript?
In JavaScript, you should use promises to manage asynchronous operations in a more organized and readable way than traditional callbacks,
primarily to avoid "callback hell". Promises provide a cleaner structure for handling future values or errors. 




// create a promise:

const promise = new Promise((resolve, reject) => {
    console.log("I am a promises");
    // resolve("Successful");
    // reject("some error occurred");
})




// How promise work:

function getPromise(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data:", data);
            //resolve("success");
            reject("error");
        }, 6000);
    })
}
let promise = getPromise(1); // it return a promise with success or fail status
// when data is not execution(means before 6 secs) promise show pending status, but after execute the data, promise show success status.





// How use promise:

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        // resolve("SUCCESS");
        reject("ERROR");
    })
}

let promise = getPromise();

// Use promise for 'resolve':
// promise.then((res) => {
//     console.log("PROMISE FULFILLED", res);
// })

// Use promise for 'reject':
promise.catch((err) => {
    console.log("PROMISE FULFILLED", err);
})





// promise chain:

// Assume that this is api 1
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 1...");
            resolve("SUCCESS");
        }, 2000);
    });
}

// Assume that this is api 2
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 2...");
            reject("error");
        }, 2000);
    });
}

console.log("Fetching data 1...");
asyncFunc1().then((res) => {
    console.log(res); // will come msg of resolve fn
    console.log("Fetching data 2...");
    asyncFunc2().catch((err) => {
        console.log(err);
    });
});

*/


// promise chain:

// Assume that this is api 1
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 1...");
            resolve("SUCCESS");
        }, 2000);
    });
}

// Assume that this is api 2
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 2...");
            reject("error");
        }, 2000);
    });
}

// Assume that this is api 3
function asyncFunc3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 3...");
            resolve("SUCCESS");
        }, 2000);
    });
}

console.log("Fetching data 1...");
asyncFunc1().then((res) => {
    console.log(res); // will come msg of resolve fn
    
    console.log("Fetching data 2...");
    asyncFunc2().catch((err) => {
        console.log(err);
        
        console.log("Fetching data 3...");
        asyncFunc3().then((res) => {
            console.log(res);
        })
    });
});