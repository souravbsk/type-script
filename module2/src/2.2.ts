{
  // interface

  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRoll1 = User1 & { role: string };

  const user1: UserWithRoll1 = {
    name: "John",
    age: 30,
    role: "admin",
  };

  // Type '{ name: string; age: number; }' is not assignable to type 'UserWithRoll1'.
  // Property 'role' is missing in type '{ name: string; age: number; }' but required in type '{ role: string; }'.ts(2322)

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User1 {
    role: string;
  }

  const user2: UserWithRole2 = {
    name: "Janesd",
    age: 25,
    role: "use",
  };

  //js : object, array ==> object | function => object

  type Roll = number[];
  const rollNumber1: Roll = [1, 2, 3];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber2: Roll2 = [1, 2, 4, 5];




  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;


  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add2: Add2 = (num1, num2) => num1 + num2;

  //
}
