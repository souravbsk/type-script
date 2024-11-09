"use strict";
{
    //
    let anything;
    anything = "Hello world";
    anything = 42;
    // anything = true; // Error: Type 'true' is not assignable to type 'string |
    anything;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value);
            return `tHE converted value is  ${convertedValue * 1000} grams.`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result = kgToGm(1000);
    const result2 = kgToGm("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
