"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    // spread operator
    // rest oprator
    // destructuring
    //learn spread operator
    var bros1 = ["Mir", "Firoz", "Mizan"];
    var bros2 = ["neymar", "ronaldinho", "silva"];
    bros1.push.apply(bros1, bros2);
    console.log(bros1);
    var mentors = {
        prisma: "Firoz",
        redux: "Tonmoy",
        dbms: "rita",
    };
    var mentors2 = {
        typescript: "Mezba",
        next: "Sourav",
        react: "Rakib",
    };
    var mentorList = __assign(__assign({}, mentors), mentors2);
    console.log(mentorList);
    // learn rest operator
    var greetFriends = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (friend) { return console.log(friend); });
    };
    greetFriends("neymar", "vini", "antony", "pele");
}
