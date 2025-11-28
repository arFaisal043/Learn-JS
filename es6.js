// .............. SPREAD OPERATOR ................
/*
let poorCountry = ["BD" , "SR"];
let richCountry = ["US" , "CAN"];

 let allCountry = [...poorCountry , ...richCountry];
let allCountry = richCountry.concat(poorCountry)

console.log(allCountry);


const show = (...numbers) => {
    let sum = 0;
    for( let val of numbers) {
        sum += val;
    }
    console.log(`sum = ${sum}`);
}

show(1 , 92 , 84 ,47);
*/



// ....................... SCOPE IN JS ............................
/*
let myname = "faisal";
const myFun = () => {
    console.log(myname);
}
myFun()
*/


// ...................... HOISTING IN JS .........................

/*
myName = "Abdur Rahman";
console.log(myName);
var myName;
*/


//.......................MULTIDYMENTIONAL ARRAY .....................
/*
let bd = ["dhaka" , "khulna"];
let ind = ["delhi" , "kolkata"];

let asia = [bd , ind];
console.log(asia);
console.log(asia[0][1]);
*/


// ...................... ARRAY DE-STRUCTURING ...................

/*
let cities = ["dhaka" , "khulna" , "barisal" , "savar"];

let [a , b , c , d] = cities;
console.log(a);
console.log(b);
*/




// ....................... ARRAY MAP and SET ......................
/*
const fruits = new Map();
fruits.set("apple" , 400);
fruits.set("mango" , 300);
fruits.set("lichi" , 500);

console.log(fruits.values());
console.log(fruits.keys());



const fruits = new Map();
fruits.set("apple" , 400);
fruits.set("mango" , 300);
fruits.set("lichi" , 500);

for( let val of fruits.values() ) { // for values
    console.log(val);
}
for( let val of fruits.keys() ) {   // for keys
    console.log(val);
}



const fruits = new Map();
fruits.set("apple" , 400);
fruits.set("apple" , 400);
fruits.set("mango" , 300);
fruits.set("lichi" , 500);

//fruits.delete("apple");
//fruits.clear("apple");

for( let val of fruits.values() ) {
    console.log(val); 
}
*/

