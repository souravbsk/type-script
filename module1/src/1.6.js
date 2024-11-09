"use strict";
// learning function
// normal function
// Arrow function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
// Argument of type 'boolean' is not assignable to parameter of type 'number'.ts(2345)
const addArrow = (num1, num2) => num1 + num2;
//object ----> function ------->  method
const poorUser = {
    name: "Sourav",
    balance: 0,
    addBalance(balance) {
        return `My New Balance is : ${this.balance + balance}`;
    },
};
const arr = [1, 4, 10];
const newArray = arr.map((elem) => elem * elem);
console.log(newArray);
