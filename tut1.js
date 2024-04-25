// variables scope:
// 'use strict';
//block
//function scope->local scope
//global scope

// console.log(name);

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

let input = document.querySelector('.input');
let box = document.querySelector('.box');

// input.addEventListener('input', ()=>{
//     console.log(input.value);
// })
input.addEventListener('change', ()=>{
    console.log(input.value);
})

box.addEventListener('click', ()=>{
    console.log("boxclicked")
})
box.addEventListener('mouseover', ()=>{
    console.log("mouseover")
    let red = 'blue';
    box.style.backgroundColor = red;
})
box.addEventListener('mouseout', ()=>{
    console.log("mouseout")
    let red = 'green';
    box.style.backgroundColor = red;
})

document.addEventListener('keydown', (e)=>{
    console.log(`key pressed: ${e.target}`);
})

document.addEventListener('load', ()=>{
    
})