// variables scope:
// 'use strict';
//block
//function scope->local scope
//global scope

console.log(name);

let name = 'azad';

{
    //variables block scope
}

{
    // console.log(variable1);
    variable1 = "Azad";
    console.log(name);
    
}

// let, const ,var, automatically

function myFunc(){
    // let variable1 = "sultan";
    console.log(variable1);
}

myFunc();

// console.log(variable1);

