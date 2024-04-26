//Set =>1 Q3.


function myfunc(a, b){
    if(a==b){
        return (a+b)*3;
    }else{
        return a+b;
    }
    // return a+b;
}

let result = myfunc(9, 9);

// console.log(result);

//Q4.

function myfunc2(a){
    if(a>19){
        return Math.abs(a-19)*3;
    }
    return Math.abs(a-19);
}

result = myfunc2(20);

// console.log(result);

function myfunc3(a, b){
    if(a==50 || b==50 || a+b==50){
        return true;
    }
    return false;
}

result = myfunc3(25, 25);

console.log(result);