"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    console.log("Hello World, I will complete this dcourse successfully and become a Next level Web Developer!");
    const createUser = (name, age, role) => {
        console.log(name, age, role);
    };
    createUser("sourav", 20, "admin");
    const myReadingMaterial = {
        name: "Tech world",
        author: "Sourav",
        page: 200,
    };
    // Intersection Type
    const specialEdition = {
        name: "Book track",
        author: "Sourav",
        page: 200,
        edition: 1,
    };
    //Task 4: Intersection Types, Type Guards, & Discriminated Unions
    //Intersection Types
    const reverseString = (str) => {
        console.log(str);
        let reverStr = "";
        for (let i = 0; i < str.length; i++) {
            reverStr = str[i] + reverStr;
        }
        return reverStr;
    };
    const result = reverseString("hello");
    console.log(result);
    const addition = (...value2) => {
        console.log(value2);
        const sumResult = value2.reduce((preValue, currectValue) => preValue + currectValue, 0);
        return sumResult;
    };
    const suResult = addition(4, 4, 5);
    console.log(suResult);
    const processInput = (input) => {
        if (typeof input === "string") {
            // If input is a string, return its length
            return input.length;
        }
        else if (typeof input === "number") {
            // If input is a number, return its square
            return input * input;
        }
        else {
            // This should never happen because TypeScript narrows the type
            throw new Error("Input must be a string or a number");
        }
    };
    // Example usage
    console.log(processInput("hello"));
    console.log(processInput(4));
    const describeAdmin = (user) => {
        return `name: ${user.name}  , email: ${user.email} , adminlevel: ${user.adminlevel}`;
    };
    describeAdmin({
        name: "sourav",
        email: "sourav@gmail.com",
        adminlevel: "admin",
    });
    const getEmployeeCity = (employee) => {
        var _a;
        return (_a = employee.address) === null || _a === void 0 ? void 0 : _a.city; // Optional chaining to safely access the city
    };
    // Example usage
    const employee1 = {
        name: "Sourav",
        address: {
            city: "Kolkata",
        },
    };
    const employee2 = {
        name: "Ravi",
        address: {},
    };
    const employee3 = {
        name: "Maya",
    };
    console.log(getEmployeeCity(employee1)); // Output: 'Kolkata'
    console.log(getEmployeeCity(employee2)); // Output: undefined
    console.log(getEmployeeCity(employee3)); // Output: undefined
    const getDisplayName = (name) => {
        if (name === null || name === undefined) {
            return "Anonymous";
        }
        else {
            return name;
        }
    };
    console.log(getDisplayName("Sourav Basak"));
    const processData = (data) => {
        if (typeof data === "string") {
            return data.toUpperCase();
        }
        else if (typeof data == "number") {
            return data * 2;
        }
        else {
            return data;
        }
    };
    console.log(processData(2));
    const handleError = (message) => {
        throw new Error("Content not available ");
    };
    const removeDuplicates = (arr) => {
        return [...new Set(arr)];
    };
    // Example usage
    const numberArray = [1, 2, 3, 3, 4, 5, 5, 6];
    const stringArray = ["apple", "banana", "apple", "orange", "banana"];
    const uniqueNumbers = removeDuplicates(numberArray);
    const uniqueStrings = removeDuplicates(stringArray);
    console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]
    console.log(uniqueStrings); // 
    // Asynchronous function to simulate fetching user data
    const fetchUserData = () => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulating user data
                const userData1 = {
                    name: 'Sourav',
                    age: 25
                };
                resolve(userData1);
            }, 2000); // Simulating a delay of 2 seconds
        });
    });
    // Calling the async function and logging the result
    const getUserData = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield fetchUserData();
            console.log('Fetched user data:', user);
        }
        catch (error) {
            console.error('Error fetching user data:', error);
        }
    });
    getUserData();
    function isString(value) {
        return typeof value === 'string';
    }
    function printUpperCase(value) {
        if (isString(value)) {
            // After isString check, TypeScript knows value is a string here
            console.log(value.toUpperCase());
        }
        else {
            console.log('Value is not a string');
        }
    }
    console.log(printUpperCase(123));
    // Function to access the property value using a key constrained by keyof
    function getPropertyValue(obj, key) {
        return obj[key];
    }
    // Example object
    const person = {
        name: 'Sourav',
        age: 25,
        email: 'sourav@example.com',
    };
    // Example usage
    const name = getPropertyValue(person, 'name'); // Returns 'Sourav'
    const age = getPropertyValue(person, 'age'); // Returns 25
    const email = getPropertyValue(person, 'email'); // Returns 'sourav@example.com'
    console.log(name); // Output: 'Sourav'
    console.log(age); // Output: 25
    console.log(email); // Output: 'sourav@example.com'
    //
}
