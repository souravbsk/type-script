{

    // constraints

    const addCourseToStudent = <T extends { id:number; name:string;email:string}>(student: T) => {
        const course = "Next Level Web Development";
    
        return {
          ...student,
          course,
        };
      };
    
    
    
      const student1 = addCourseToStudent<{id:number;name:string; email:string;dev:string}>({id:11,name:'MRX', email:'x@gmail.com', dev:'Front end'})
      const student2 = addCourseToStudent<{id:number;name:string; email:string;hasWatch:string}>({id:22,name:'MRX', email:'x@gmail.com', hasWatch:'Apple'})
    
    //   const student3 = addCourseToStudent({emni:'emni'})
// "emni": Unknown word.cSpell
// Object literal may only specify known properties, and 'emni' does not exist in type '{ id: number; name: string; email: string; }'.ts(2353)
    //
}