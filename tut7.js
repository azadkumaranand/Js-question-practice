console.log(Number.EPSILON);

let x = 5;

let y = 5.00000000000001254;

if (x-y<Number.EPSILON) {
    console.log("approx equal");
}
console.log(x==y);