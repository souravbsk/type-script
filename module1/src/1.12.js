"use strict";
{
    //nullable type
    const searchName = (value) => {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName(null);
    //   unknown typeof
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof value === "string") {
            const [speed, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(speed) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log("Invalid input");
        }
    };
    getSpeedInMeterPerSecond(`1000 km^-1`);
    // never
    const trowError = (msg) => {
        throw new Error(msg);
    };
    trowError('muskil se error hogaya');
}
