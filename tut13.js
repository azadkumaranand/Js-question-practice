//Callback function

let element;

// element.addEventListener('click', myfunc)

function myfunc(){
    console.log("object")
}

// sum and display

function display(a){
    console.log(`Sum Is: ${a}`);
}

function sum(a, b, callbackfunc){
    let c = a+b;
    // console.log(callbackfunc);
    callbackfunc(c);
}

sum(85, 15, display);
// display()