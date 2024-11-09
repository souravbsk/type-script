"use strict";
{
    //   const person1:Owner2 = 'train'
    //   Type '"train"' is not assignable to type 'keyof Vehicle'.ts(2322)
    var person2 = 'bike';
    // output:  Owner2 is "bike" | "car" | "ship"  // output: true
    var getPropertyValue = function (obj, key) {
        return obj[key];
    };
    var user_1 = {
        name: 'John',
        age: 30,
        occupation: 'Developer',
    };
    var result1 = getPropertyValue(user_1, 'name');
    // 
}
