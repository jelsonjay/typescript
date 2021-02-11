"use strict";
// example 1
let user1;
// example 2
let user2;
user2 = (name, gender) => {
    console.log(`${name} says ${gender}`);
};
// example 3
let date;
date = (ageOne, ageTwo, action) => {
    if (action === 'add') {
        return ageOne + ageTwo;
    }
    else {
        return ageOne - ageTwo;
    }
};
// example 4
let myDatails;
myDatails = (obj) => {
    console.log(`${obj.name} is ${obj.age} years old ${obj.gender}`);
};
