{
  //

  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resGeneric = createArrayWithGeneric<boolean>(true);

  interface User {
    id: number;
    name: string;
  }
  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Sourav",
  });

  // touple

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Neymar", 10);

  const res11 = createArrayWithTuple<string, { name: string }>("Football", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };



  const student1 = addCourseToStudent<{name:string; email:string;dev:string}>({name:'MRX', email:'x@gmail.com', dev:'Front end'})
  const student2 = addCourseToStudent<{name:string; email:string;hasWatch:string}>({name:'MRX', email:'x@gmail.com', hasWatch:'Apple'})



  //
}
