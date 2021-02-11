"use strict";
// ======function type in typescrip=======
let greet = () => {
    console.log('greet function');
};
greet();
let myFunction;
myFunction = () => {
    console.log('call function');
};
myFunction();
// using option param ?
// param inside function
const add = (a, b, c = 5) => {
    console.log(a + b);
    console.log(c);
};
add(4, 10, '10');
const min = (a, b) => {
    return a + b;
};
let result = min(10, 5);
console.log(result);
