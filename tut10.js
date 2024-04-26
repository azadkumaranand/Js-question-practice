let arr = [5, 78, 6, 12, 74, 3];

//map=>wen can store in a variable which map has been returned
//result will be array
let arr2 = arr.map((element, index, array)=>{
    // console.log(element, index);
    return element*2;
})
let arr3 = arr.forEach((element, index, array)=>{
    // console.log(element, index);
    // return 5;//we can't return 
})

// console.log(arr2);

arr3 = arr.filter((element, index, array)=>{
    // console.log(element, index, array);
    return element>18;
})
console.log(arr3);

//every()

arr3 = arr.every((element, index, array)=>{
    return element>18;
})
// console.log(arr3);
arr3 = arr.some((element, index, array)=>{
    return element>18;
})

// console.log(arr3);

//reduce()

arr3 = arr.reduce((prev, elemnt)=>{
    console.log("return ", prev);
    return elemnt+10;
})

console.log(arr3)