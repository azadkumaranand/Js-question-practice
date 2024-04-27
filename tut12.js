//function local and global variable
let a = 19;
function myfunc(a, b, c){
    let ca=23;
    for(let i=0; i<4; i++){
        //we can access ca variable here 
    }
    //we can access ca variable here 
}

//we can't access ca variable here 

// myfunc(34, 33, 54);

//Break statement is used for stop the loop at certain conditions
for(let i = 0; i< 10; i++){
    // console.log(i);
    if(i===5){
        break;
    }
}

//continue statement is used for skip the loop

for(let i = 0; i< 10; i++){
    // console.log(i);
    if(i==5){
        continue;
    }
}

//Q1. write a javascript program to cheack a given number is prime or not

function isPrime(a){
    let flag = true;
    if(a<=1){
        flag=false;
    }
    for(let i=2;i<a;i++){
        if(a%i==0){
            flag = false;
            break;
        }
    }
    if(flag == true){
        console.log(a, " is a prime number");
    }else{
        console.log(a, " is not a prime number");
    }
}

isPrime(1);