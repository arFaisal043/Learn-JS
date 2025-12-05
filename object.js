// - store multiple data-types

const student = {
    fullName: "Abdur Rahman Faisal",
    age: 22,
    marks: 90.5,
    printMarks: function () {
        console.log(`marks = ${this.marks}`);
    },
};
console.log(student);
console.log(student.age); // 22
console.log(student["age"]); // 22
