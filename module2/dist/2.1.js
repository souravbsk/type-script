"use strict";
{
    //
    var anything = void 0;
    anything = "Hello world";
    anything = 42;
    // anything = true; // Error: Type 'true' is not assignable to type 'string |
    anything;
    var kgToGm = function (value) {
        if (typeof value === "string") {
            var convertedValue = parseFloat(value);
            return "tHE converted value is  ".concat(convertedValue * 1000, " grams.");
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    var result_1 = kgToGm(1000);
    var result2 = kgToGm("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
