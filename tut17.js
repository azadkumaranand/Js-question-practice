// let obj3 = {
//     name: "Abhijeet",
//     age: 32,
//     subject: ["Html & CSS", "JavaScript", "PHP", "Laravel"],
//     group: ["grp1", "grp2", "grp3"],
//     getDetails: function () {
//       // this//represent obj1
//       console.log(`Hello ${this.name}, your subjects are ${this.subject}`);
//       return 10;
//     },
// };

// class is a template for object

class myClass{
    //constructor method called automatically
    constructor(name, age, subject){
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    getDetails() {
        // this//represent obj1
        console.log(`Hello ${this.name}, your subjects are ${this.subject}`);
        return 10;
    }
}
let arr1= ["Html & CSS", "JavaScript", "PHP", "Laravel"]
let obj1 = new myClass("Abhijeet", 20, arr1);
let obj2 = new myClass("Arvind", 20, arr1);
let obj3 = new myClass("Azad", 29, arr1);
obj1.getDetails();
obj2.getDetails();