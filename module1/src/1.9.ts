// type alias

type Student = {
  name: string;
  age: number;
  gender: string;
  contactNo?: string;
  address: string;
};

{
  const studest1: Student = {
    name: "neymar",
    age: 56,
    gender: "male",
    contactNo: "+87545454",
    address: "Dhaka",
  };

  const student2: Student = {
    name: "ronaldinho",
    age: 56,
    gender: "male",
    address: "kishoreganj",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Sourav Basak";
  const isAdmin: IsAdmin = true;

  
}
