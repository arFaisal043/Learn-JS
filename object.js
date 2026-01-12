/*
- store multiple data-types

// SIngleton: -> Object.create


// Object literals:

- An object literal is the simplest and most common way to create an object in JavaScript. 
It is a list of zero or more property name-value pairs (key-value pairs) enclosed in curly braces {}. 

const users = {}




// Basic Structure:

const student = {
    fullName: "Abdur Rahman Faisal",
    age: 22,
    marks: 90.5,
    printMarks: function () {
        console.log(`marks = ${this.marks}`);
    },
};
console.log(student);

-- 2 way of access:
console.log(student.age); // 22
console.log(student["age"]); // 22







const users = {
    name: "Abdur Rahman Faisal",
    id: 2023200000043,
    "email id": "arfaisal@gmail.com"
}

console.log(`Types of user id = ${typeof users.id}`);
console.log(`User id = ${users.id}`);
console.log(users["email id"]);







const users = {
    name: "Abdur Rahman Faisal",
    id: 2023200000043,
    "email id": "arfaisal@gmail.com"
}

// changes value
users.name = "Faisal";

console.log(users); // { name: 'Faisal', id: 2023200000043, 'email id': 'arfaisal@gmail.com' }

// freeze
Object.freeze(users);

// changes value again
users.name = "Abdur Rahman";

console.log(users); // here can not be changed by new value






// Real life example:

// - Count all unique elements

// const arr = [1, 2, 1, 3, 1, 2, 4, 3, 4, 2, 1, 5];
// const obj = {};

// for(let val of arr) {
//     if(val in obj) {
//         obj[val]++;
//     }
//     else {
//         obj[val] = 1;
//     }
// }
// console.log(obj); // { '1': 4, '2': 3, '3': 2, '4': 2, '5': 1 }
*/

const users = {
    name: "Abdur Rahman Faisal",
    id: 2023200000043,
    "email id": "arfaisal@gmail.com"
}

// changes value
users.name = "Faisal";

console.log(users); // { name: 'Faisal', id: 2023200000043, 'email id': 'arfaisal@gmail.com' }

// freeze
Object.freeze(users);

// changes value again
users.name = "Abdur Rahman";

console.log(users); // here can not be changed by new value
