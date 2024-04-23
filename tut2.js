// Q1. Write a JavaScript program to find the area of a triangle where three sides are 5,6, 7.

//formula
/**

A = √[s(s-a)(s-b)(s-c)]

s = (a+b+c)/2

*/

// let areaOfTriangle = Math.sqrt(64);

let a = 5;
let b = 6;
let c = 7;

let s = (a+b+c)/2;

let areaOfTriangle = Math.sqrt((s*(s-a)*(s-b)*(s-c)));

console.log(areaOfTriangle.toFixed(2));


