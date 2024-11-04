"use strict";
// learning function
// normal function
// Arrow function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
// Argument of type 'boolean' is not assignable to parameter of type 'number'.ts(2345)
var addArrow = function (num1, num2) { return num1 + num2; };
//object ----> function ------->  method
var poorUser = {
    name: "Sourav",
    balance: 0,
    addBalance: function (balance) {
        return "My New Balance is : ".concat(this.balance + balance);
    },
};
var arr = [1, 4, 10];
var newArray = arr.map(function (elem) { return elem * elem; });
console.log(newArray);
