"use strict";
var _a, _b;
{
    // ternary operator || optional changing  || nullish coalescing
    const age = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("no adult");
    }
    const isAdult = age >= 18 ? "adult" : "no adult";
    console.log({ isAdult });
    //   nullish coalescing
    // null/undefined ===> decision making
    const isAuthenticated = null;
    const user1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    console.log({ user1 });
    const user = {
        name: "sourav",
        address: {
            city: "kolkata",
            state: "west bengal",
            presentAddress: "kolkata",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Address";
    console.log({ permanentAddress });
}
