/* 
1️⃣ Stack Memory:

Used for: 
- Primitive data types
- Function calls (call stack)
- Local variables

*** Stored values are copied, not referenced.

✅ Primitive types: number, string, boolean, null, undefined, symbol, bigint

📌 Example (Stack)

let a = 10;
let b = a;   // copy of value

b = 20;

console.log(a); // 10
console.log(b); // 20





2️⃣ Heap Memory

Used for: 
- Objects 
- Arrays
- Functions (reference stored in stack, actual data in heap)

Stored by reference, not copied.

📌 Example (Heap)

let obj1 = { name: "Faisal" };
let obj2 = obj1;   // reference copy

obj2.name = "Rahman";

console.log(obj1.name); // Rahman
console.log(obj2.name); // Rahman



*/