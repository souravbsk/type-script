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
    //
    // function with generics
    var createArray = function (param) {
        return [param];
    };
    var res1 = createArray("Bangladesh");
    var createArrayWithGeneric = function (param) {
        return [param];
    };
    var resGeneric = createArrayWithGeneric(true);
    var resGenericObj = createArrayWithGeneric({
        id: 222,
        name: "Sourav",
    });
    // touple
    var createArrayWithTuple = function (param1, param2) {
        return [param1, param2];
    };
    var res10 = createArrayWithTuple("Neymar", 10);
    var res11 = createArrayWithTuple("Football", {
        name: "Asia",
    });
    var addCourseToStudent = function (student) {
        var course = "Next Level Web Development";
        return __assign(__assign({}, student), { course: course });
    };
    var student1 = addCourseToStudent({ name: 'MRX', email: 'x@gmail.com', dev: 'Front end' });
    var student2 = addCourseToStudent({ name: 'MRX', email: 'x@gmail.com', hasWatch: 'Apple' });
    //
}
