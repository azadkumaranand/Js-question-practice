function sum (a, b){
    if (a==b) {
        return 3*(a+b);
    }
    return a+b;
}

let result = sum(9, 9);

console.log(`Sum is: ${result}`);