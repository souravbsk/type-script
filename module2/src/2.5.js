"use strict";
{
    //
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const res1 = createArray("Bangladesh");
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const resGeneric = createArrayWithGeneric(true);
    const resGenericObj = createArrayWithGeneric({
        id: 222,
        name: "Sourav",
    });
    // touple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res10 = createArrayWithTuple("Neymar", 10);
    const res11 = createArrayWithTuple("Football", {
        name: "Asia",
    });
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: 'MRX', email: 'x@gmail.com', dev: 'Front end' });
    const student2 = addCourseToStudent({ name: 'MRX', email: 'x@gmail.com', hasWatch: 'Apple' });
    //
}
