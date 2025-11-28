// 1st Exam:

/*
var name = "Faisal";
function sayName() {
    console.log(this.name);
    
}

// -- Execution Context for this code: Here, only will GEC.cz there is no invoked the function. and console.log(sayName()) will be "undefine"

GEC-
    --Creation context:
                     --name = undefine
                     --memory allocate for "name" & "sayName()"
    -- Execution context:
                     -- name = tom                 





// 2nd Exam:

var name = "Tom";

function tom() {
    console.log(this.name + "Runs");
}
console.log(tom());



* GEC:
     - Creation Context:
        --> name = undefine
        --> memory allocate for "name" & "sayName()"
     - Execution Context:
        --> name = tom
        --> tom() will execute

                ** FEC: [for tom() function]
                      - Creation Context: empty
                      - Execution Context: 
                        --> log() execution

                                *** FEC: [for log() function]
                                       - Creation Context: empty
                                       - Execution Context: empty
*/                     


