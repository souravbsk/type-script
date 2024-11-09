"use strict";
{
    //   const person1:Owner2 = 'train'
    //   Type '"train"' is not assignable to type 'keyof Vehicle'.ts(2322)
    const person2 = 'bike';
    // output:  Owner2 is "bike" | "car" | "ship"  // output: true
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: 'John',
        age: 30,
        occupation: 'Developer',
    };
    const result1 = getPropertyValue(user, 'name');
    // 
}
