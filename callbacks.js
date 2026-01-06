/* 
- A callback is a function passed as an argument to another function.

- Callback Hell (also called Pyramid of Doom) occurs when multiple nested callbacks make code hard to read and maintain.

- Callback is not good code(create complex structure), we resolve this using Promises, then we again resolve promise to async await.
callback --> promises --> async await


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





// callback hell example:

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


// callback hell:

console.log("Data 1 loading ...");
getData(1, () => {
    console.log("Data 2 loading ...");
    getData(2, () => {
        console.log("Data 3 loading ...");
        getData(3, () => {
            console.log("Successfully all data loaded");
        });
  });
});

*/