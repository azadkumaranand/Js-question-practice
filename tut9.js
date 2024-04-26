let arr = [5, 78, 6, 12, 74, 3];
let arr2 = arr;

// sorting=> assending or desending order 

let sortedArrAssending = arr2.sort((a,b)=>{
    return a-b;
});
let sortedArrDessending = arr2.sort((a,b)=>{
    return b-a;
});

// console.log(sortedArrDessending);

//forach()

arr.forEach((e,index, array) => {
    console.log(e, index);
});