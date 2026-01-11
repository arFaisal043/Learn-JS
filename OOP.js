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
*/

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