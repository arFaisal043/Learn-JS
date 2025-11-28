// ................. OBJECT ....................
/*
let student = {
    fullName: "Abdur Rahman Faisal",
    age: 22,
    marks: 90.5,
    printMarks: function(){
        console.log(`marks = ${this.marks}`);
    }
}
console.log(student);
console.log(student.printMarks())
*/



// ...................... PROTOTYPE ...........................

/*
const employee = {
    calcTax() {
        console.log(`tax rate is 10%`);
    }
}
const employee1 = {
    salary: 50000,
}
const employee2 = {
    salary: 60000,
}
const employee3 = {
    salary: 70000,
    calcTax() {
        console.log(`tax rate is 15%`);
    }
}

employee1.__proto__ = employee;
employee2.__proto__ = employee;
employee3.__proto__ = employee;

console.log(employee1)
console.log(employee2)
console.log(employee3)
*/



// .................... Classes in js ..........................
/*
class structCar {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.Brand = brand;
    }
}

const tesla = new structCar();
const bmw = new structCar();
const lexus = new structCar();

tesla.setBrand("TESLA");
bmw.setBrand("BMW");
lexus.setBrand("LEXUS");

console.log(tesla);
console.log(bmw);
console.log(lexus);
*/


// ....................... CONSTRUCTOR ...........................

/*
 *** A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties. ***

class structCar {
    constructor(brand , milage) {
        this.brand = brand;
        this.milage = milage;
        console.log("creating a new object");
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

const bmw = new structCar("bmw" , 10);
const tesla = new structCar("tesla" , 20);
console.log(bmw);
console.log(tesla);
*/




// ...................... INHERITANCE .......................
/*
In programming, inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one.


class person {
    constructor(species) {
        this.species = "homo sapience";
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("DO Nothing");
    }
}

class engineer extends person{
    work() {
        console.log("solve problems");
    }
}

class doctor extends person {
    work() {
        console.log("Medical checkup");
    }
}

const faisal = new engineer();
const abc = new doctor();

// console.log(person);

// console.log(engineer);
// console.log(doctor);

console.log(faisal);
console.log(abc);
*/




// ..................... STRONG KEYWORD ........................

/*
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


/* 
Practice Question: 1
You are creating a website for your university. create a class 'User' with 2 properties 'name' and 'email'. it also has a method called viewData() that allows user to view website data.


class User {
    constructor(name , email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("This is Data........");
    }
}

const student1 = new User("Abdur Rahman Faisal" , "arfaisal463@gmail.com");
const student2 = new User("Israt Jahan" , "esha825@gmail.com");
const student3 = new User("Jannatul Naima" , "nowshin123@gmail.com");
console.log(student1);
console.log(student2);
console.log(student3);
*/

/*
Practice Ques: 2
Create a new Class called "Admin" which inherits from the "User". Add a new method called editData() to admin that allows it to edit website data.

class User {
    constructor(name , email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("This is Data........");
    }
}

class Admin extends User{
    constructor(name , email) {
        super(name , email);
    }
    editData() {
        console.log("This data can be edited.........");
    }
}

const admin1 = new Admin("admin" , "admina@gmail.com");
console.log(admin1);
*/



