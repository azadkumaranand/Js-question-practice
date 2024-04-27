//Object

let obj1 = {
  name: "Azad",
  age: 32,
  subject: ["Web Development", "Cyber security", "Data Science"],
  group: ["grp1", "grp2", "grp3"],
  getDetails: function () {
    // this//represent obj1
    console.log(`Hello ${this.name}, your subjects are ${this.subject}`);
  },
};

let obj2 = {
  name: "Arvind",
  age: 32,
  subject: ["Html & CSS", "JavaScript", "PHP", "Laravel"],
  group: ["grp1", "grp2", "grp3"],
  getDetails: function () {
    // this//represent obj1
    console.log(`Hello ${this.name}, your subjects are ${this.subject}`);
    return 10;
  },
};

let obj3 = {
    name: "Abhijeet",
    age: 32,
    subject: ["Html & CSS", "JavaScript", "PHP", "Laravel"],
    group: ["grp1", "grp2", "grp3"],
    getDetails: function () {
      // this//represent obj1
      console.log(`Hello ${this.name}, your subjects are ${this.subject}`);
      return 10;
    },
  };

let age = obj2.age;
let subject = obj2.subject;
let getDetails1 = obj3.getDetails();
// console.log(getDetails1);

const getDetails = function () {
  console.log("hello getdetails function");
};

// getDetails();
