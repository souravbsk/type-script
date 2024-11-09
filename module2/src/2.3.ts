{
  // generic type

  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [1,5,8,4,9];
  const rollNumbers: GenericArray<number> = [1, 5, 8, 4, 9];

  // const mentors:string[] = ['Mr. X','Mr. Y', 'Mr. Z'];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray:boolean[] = [true,false,true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ id: number; name: string; age: number }> = [
    {
      id: 1,
      name: "John Doe",
      age: 100,
    },
    {
      id: 2,
      name: "Jane Ali",
      age: 50,
    },
  ];

  // generic tuple

  type GenericTuple<x, y> = [x, y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const rollNumbersTuple: GenericTuple<number, number> = [1, 5];

  const UserWithID: GenericTuple<number,{name:string; age:number;}> = [123, { name: "sourav", age: 22 }];

  //
}
