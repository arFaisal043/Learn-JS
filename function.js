function add(a, b) {
  return a + b;
}
const res = add(2, 3);
console.log(res);

function namePrint(str) {
  console.log(`Hello, ${str}`);
}

namePrint("Faisal");


// Assign a function on a variable
const a = function() {
    console.log("Hello");
}
a()


function func(...something) {
    const sum = (something[0] + something[1]) * something[4];
    console.log(sum);
}

func(1, 2, 3, 4, 5);



// function return type

function f1() {
  return f2();
}
function f2() {
  return f3();
}
function f3() {
  console.log("I'm from f3");
}

f1();