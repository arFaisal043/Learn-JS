/* 
- A callback is a function passed as an argument to another function.

- Callback Hell (also called Pyramid of Doom) occurs when multiple nested callbacks make code hard to read and maintain.



// callback example 1:
const sum = (a, b) => {
    console.log(a + b);
}
const calc = (a, b, sum) => {
    sum(a, b);
}
calc(1, 2, sum); // Sum fn pass as a parameter


// callback example 2:
const hello = () => {
    console.log("Hello...");
}
setTimeout(hello, 3000); // setTimeout(() => {....}, 3000)





// callback hell:

const getData = (data, getNextData) => {
    // here, getNextData is a anonymous fn
    setTimeout(() => {
      console.log(`Data: ${data}`);

      // If getNextData exist then run otherwise could come an error
      if(getNextData) {
        getNextData();// The callback should be inside the setTimeOut, not the outside
      }
    }, 2000);
}

// A function that prints data after 2 seconds, then runs a callback
getData(1, () => {
    getData(2, () => {
        getData(3, () => {})
    });
});

*/