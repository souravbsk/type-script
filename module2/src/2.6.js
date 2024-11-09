"use strict";
{
    // constraints
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ id: 11, name: 'MRX', email: 'x@gmail.com', dev: 'Front end' });
    const student2 = addCourseToStudent({ id: 22, name: 'MRX', email: 'x@gmail.com', hasWatch: 'Apple' });
    //   const student3 = addCourseToStudent({emni:'emni'})
    // "emni": Unknown word.cSpell
    // Object literal may only specify known properties, and 'emni' does not exist in type '{ id: number; name: string; email: string; }'.ts(2353)
    //
}
