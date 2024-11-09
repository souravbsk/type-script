"use strict";
{
    //nullable type
    var searchName = function (value) {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName(null);
    //   unknown typeof
    var getSpeedInMeterPerSecond = function (value) {
        if (typeof value === "number") {
            var convertedSpeed = (value * 1000) / 3600;
            console.log("The speed is ".concat(convertedSpeed, " ms^-1"));
        }
        else if (typeof value === "string") {
            var _a = value.split(" "), speed = _a[0], unit = _a[1];
            var convertedSpeed = (parseFloat(speed) * 1000) / 3600;
            console.log("The speed is ".concat(convertedSpeed, " ms^-1"));
        }
        else {
            console.log("Invalid input");
        }
    };
    getSpeedInMeterPerSecond("1000 km^-1");
    // never
    var trowError = function (msg) {
        throw new Error(msg);
    };
    trowError('muskil se error hogaya');
}
