"use strict";
var _a, _b;
{
    // ternary operator || optional changing  || nullish coalescing
    var age = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("no adult");
    }
    var isAdult = age >= 18 ? "adult" : "no adult";
    console.log({ isAdult: isAdult });
    //   nullish coalescing
    // null/undefined ===> decision making
    var isAuthenticated = null;
    var user1_1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    console.log({ user1: user1_1 });
    var user_1 = {
        name: "sourav",
        address: {
            city: "kolkata",
            state: "west bengal",
            presentAddress: "kolkata",
        },
    };
    var permanentAddress = (_b = (_a = user_1 === null || user_1 === void 0 ? void 0 : user_1.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Address";
    console.log({ permanentAddress: permanentAddress });
}
