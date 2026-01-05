/*
- Synchronous vs Asynchronous in JavaScript

- Synchronous (Blocking)
Code executes line by line, in order.
Each operation must complete before moving to the next.
Like waiting in a queue.

example:
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");


-----------------------------


- Asynchronous (Non-blocking)
Code can continue executing while waiting for operations to complete.
Uses callbacks, promises, or async/await.
Like placing an order and continuing with other tasks.

example:
console.log("Task 1");
console.log("Task 2");
setTimeout(() => {
    console.log("Task 3"); // it takes 3 secs
}, 3000)
console.log("Task 4"); // not waiting for Task 3

*/