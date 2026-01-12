/*

=> Object:
-Object is an entity having state(properties -> variable) and behavior(method -> function)

const user = {
    name: "Faisal",
    id: 1
}
console.log(user);

_______________________________________________________________________________________________

=> Prototype:
- In JavaScript, a prototype is a mechanism that allows objects to inherit properties and methods from another object.
👉 JavaScript uses prototype-based inheritance, not class-based inheritance (like Java or C++).


// create object
const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    }
}

const employee1 = {
    salary: 50000
}

const employee2 = {
  salary: 60000,
};

const employee3 = {
  salary: 70000,
  calcTax() {
    console.log("Tax rate is 20% for employee 3");
  },
};

// create prototype and connect object
employee1.__proto__ = employee;  // now employee1 has a prototype named calcTax
employee2.__proto__ = employee;  // now employee2 has a prototype named calcTax
employee3.__proto__ = employee;  // now employee3 has a prototype named calcTax

// check property
employee1.calcTax(); // Tax rate is 10%
employee2.calcTax(); // Tax rate is 10%
employee3.calcTax(); // Tax rate is 20% -> own method priority is high


_______________________________________________________________________________________________


=> Class is js:

- class is a blueprint of an object.

// create a class
class Car {
    color = "Red";
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
}

// create a new object
const toyota = new Car();

console.log(toyota.color); // Red
toyota.start(); // Start
toyota.stop(); // Stop




_______________________________________________________________________________________________


=> Constructor in js: 

- A constructor in JavaScript is a special function or method used to create and initialize an object instance of a class.
👉 In JavaScript, constructors must be named constructor.

class Student {
    name;
    id;
    // create a custom constructor
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

// create a object 
const s1 = new Student("Faisal", 1);
const s2 = new Student("Lisa", 2);

console.log(`Name = ${s1.name}, id = ${s1.id}`);
console.log(`Name = ${s2.name}, id = ${s2.id}`);



_______________________________________________________________________________________________


=> Inheritance in js:

- In js, One class inherits properties and methods from another class.

// parent/ super/ base class
class Person {
    // name;
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log("Eat");
    }
    sleep() {
        console.log("Sleep");
    }
}


// child/ derived/ sub class create by Inheritance

class Engineer extends Person {
    work() {
        console.log("Building Software");
    }
}

class Doctor extends Person {
    work() {
        console.log("Checkup Patients");
    }
}


// create obj 1
console.log("Create a engineer object ...")
const e1 = new Engineer("Faisal");
console.log(`${e1.name} is a Engineer`);
e1.eat();
e1.sleep();
e1.work();

console.log("\n");

// create obj 1
console.log("Create a doctor object ...")
const d1 = new Doctor("Jihad");
console.log(`${d1.name} is a Doctor`);
d1.eat();
d1.sleep();
d1.work();



_______________________________________________________________________________________________


=> Super keyword:

// Parent Class
class parent {
    hello1() {
        console.log("Hello 1 Function");
    }
    hello2() {
        console.log("Hello 2 Function");
    }
}

// child class
class child extends parent{
    demo() {
        super.hello1();  //invoked parent's method
        super.hello2();  //invoked parent's method
    }
}

const obj = new child();
obj.demo();

*/



