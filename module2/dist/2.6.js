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
    // constraints
    var addCourseToStudent = function (student) {
        var course = "Next Level Web Development";
        return __assign(__assign({}, student), { course: course });
    };
    var student1 = addCourseToStudent({ id: 11, name: 'MRX', email: 'x@gmail.com', dev: 'Front end' });
    var student2 = addCourseToStudent({ id: 22, name: 'MRX', email: 'x@gmail.com', hasWatch: 'Apple' });
    //   const student3 = addCourseToStudent({emni:'emni'})
    // "emni": Unknown word.cSpell
    // Object literal may only specify known properties, and 'emni' does not exist in type '{ id: number; name: string; email: string; }'.ts(2353)
    //
}
