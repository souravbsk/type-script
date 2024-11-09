{
  // type guard &   in guard

  // type guard

  // typeof  --> type guard

  type Alphanumeric = number | string;

  const add = (param1: Alphanumeric, param2: Alphanumeric) => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };


  const result  = add('2','6')
  console.log(result)

  //in guard


type NormalUser = {
    name:string;
}
type AdminUser = {
    name:string;
    role:string;
}

const getUser = (user:NormalUser | AdminUser) => {
    if ('role' in user) {

console.log(   `My Name is ${user.name} my role is ${user.role}` )
    }
    else{

        console.log(`My Name is ${user.name}`)

    }
}



const normalUser: NormalUser = {
 name: 'John Doe'
}
const adminUser: AdminUser = {
    name: 'John Doe',
    role: 'Admin'

}

getUser(adminUser)


  //
}
