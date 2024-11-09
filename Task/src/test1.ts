{
  console.log(
    "Hello World, I will complete this dcourse successfully and become a Next level Web Developer!"
  );

  const createUser = (
    name: string,
    age: number,
    role?: "admin" | "user" | "guest"
  ) => {
    console.log(name, age, role);
  };

  createUser("sourav", 20, "admin");

  //Task 3: Object Types, Type Alias, & Literal Types

  type Person = {
    Name: string;
    Address: string;
    hairColor: "black" | "brown" | "blonde" | "red" | "gray" | "other";
    eyeColor: "brown" | "blue" | "green" | "gray" | "hazel" | "other";
    income: number;
    expense: number;
    Hobbies: string[];
    FamilyMembers: number;
    Job: string;
    skills: string[];
    MaritalStatus: string;
    Friend: string[];
  };

  interface Book {
    name: string;
    author: string;
    page: number;
  }

  interface Magazine {
    name: string;
    author: string;
    page: number;
    edition: number;
  }

  // union type
  type BookORMagazine = Book | Magazine;
  type BookAndMagazine = Book & Magazine;

  const myReadingMaterial: BookORMagazine = {
    name: "Tech world",
    author: "Sourav",
    page: 200,
  };

  // Intersection Type

  const specialEdition: BookAndMagazine = {
    name: "Book track",
    author: "Sourav",
    page: 200,
    edition: 1,
  };
  //Task 4: Intersection Types, Type Guards, & Discriminated Unions

  //Intersection Types

  const reverseString = (str: string): string => {
    console.log(str);

    let reverStr: string = "";

    for (let i = 0; i < str.length; i++) {
      reverStr = str[i] + reverStr;
    }

    return reverStr;
  };

  const result: string = reverseString("hello");
  console.log(result);

  const addition = (...value2: number[]): number => {
    console.log(value2);

    const sumResult: number = value2.reduce(
      (preValue: number, currectValue: number) => preValue + currectValue,
      0
    );

    return sumResult;
  };

  const suResult = addition(4, 4, 5);
  console.log(suResult);

  const processInput = <T>(input: T): number => {
    if (typeof input === "string") {
      // If input is a string, return its length
      return input.length;
    } else if (typeof input === "number") {
      // If input is a number, return its square
      return input * input;
    } else {
      // This should never happen because TypeScript narrows the type
      throw new Error("Input must be a string or a number");
    }
  };

  // Example usage
  console.log(processInput<string>("hello"));
  console.log(processInput<number>(4));

  interface User {
    name: string;
    email: string;
  }
  interface Admin {
    adminlevel: string;
  }

  type AdminUser = User & Admin;

  const describeAdmin = (user: AdminUser) => {
    return `name: ${user.name}  , email: ${user.email} , adminlevel: ${user.adminlevel}`;
  };

  describeAdmin({
    name: "sourav",
    email: "sourav@gmail.com",
    adminlevel: "admin",
  });

  interface Employee {
    name: string;
    address?: {
      city?: string;
      street?: string;
    };
  }

  const getEmployeeCity = (employee: Employee): string | undefined => {
    return employee.address?.city; // Optional chaining to safely access the city
  };

  // Example usage
  const employee1: Employee = {
    name: "Sourav",
    address: {
      city: "Kolkata",
    },
  };

  const employee2: Employee = {
    name: "Ravi",
    address: {},
  };

  const employee3: Employee = {
    name: "Maya",
  };

  console.log(getEmployeeCity(employee1)); // Output: 'Kolkata'
  console.log(getEmployeeCity(employee2)); // Output: undefined
  console.log(getEmployeeCity(employee3)); // Output: undefined

  const getDisplayName = (name: string | null | undefined): string => {
    if (name === null || name === undefined) {
      return "Anonymous";
    } else {
      return name;
    }
  };

  console.log(getDisplayName("Sourav Basak"));

  const processData = (data: unknown): unknown => {
    if (typeof data === "string") {
      return data.toUpperCase();
    } else if (typeof data == "number") {
      return data * 2;
    } else {
      return data;
    }
  };

  console.log(processData(2));

  const handleError = (message: string): never => {
    throw new Error("Content not available ");
  };



  const removeDuplicates = <T>(arr:T[]):T[] => {
    return [...new Set(arr)];
  }
// Example usage
const numberArray = [1, 2, 3, 3, 4, 5, 5, 6];
const stringArray = ["apple", "banana", "apple", "orange", "banana"];

const uniqueNumbers = removeDuplicates<number>(numberArray);
const uniqueStrings = removeDuplicates<string>(stringArray);

console.log(uniqueNumbers);  // Output: [1, 2, 3, 4, 5, 6]
console.log(uniqueStrings);  // 






// Define a type alias for the user data
type User1 = {
    name: string;
    age: number;
  };
  
  // Asynchronous function to simulate fetching user data
  const fetchUserData = async (): Promise<User1> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulating user data
        const userData1: User1 = {
          name: 'Sourav',
          age: 25
        };
        resolve(userData1);
      }, 2000); // Simulating a delay of 2 seconds
    });
  };
  
  // Calling the async function and logging the result
  const getUserData = async () => {
    try {
      const user = await fetchUserData();
      console.log('Fetched user data:', user);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  
  getUserData();
  








  function isString(value: unknown): value is string {
    return typeof value === 'string';
  }






function printUpperCase(value: unknown): void {
    if (isString(value)) {
      // After isString check, TypeScript knows value is a string here
      console.log(value.toUpperCase());
    } else {
      console.log('Value is not a string');
    }
  }
  
  console.log(printUpperCase(123))




// Function to access the property value using a key constrained by keyof
function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  type Person1 = {
    name: string;
    age: number;
    email: string;
  };
  
  
  // Example object
  const person: Person1 = {
    name: 'Sourav',
    age: 25,
    email: 'sourav@example.com',
  };
  
  // Example usage
  const name = getPropertyValue(person, 'name');  // Returns 'Sourav'
  const age = getPropertyValue(person, 'age');    // Returns 25
  const email = getPropertyValue(person, 'email'); // Returns 'sourav@example.com'
  
  console.log(name);  // Output: 'Sourav'
  console.log(age);   // Output: 25
  console.log(email); // Output: 'sourav@example.com'
  
  //
}
