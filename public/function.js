"use strict";
// ======function type in typescrip=======
var greet = function () {
    console.log('greet function');
};
greet();
var myFunction;
myFunction = function () {
    console.log('call function');
};
myFunction();
// using option param ?
// param inside function
var add = function (a, b, c) {
    if (c === void 0) { c = 5; }
    console.log(a + b);
    console.log(c);
};
add(4, 10, '10');
var min = function (a, b) {
    return a + b;
};
var result = min(10, 5);
console.log(result);
