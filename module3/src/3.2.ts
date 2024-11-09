{
  // oop inheritance

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name}  is sleeping for ${numOfHours} hours`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name}  is sleeping for ${numOfHours} hours`);
    }
  }

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);

      this.designation = designation;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name}  is sleeping for ${numOfHours} hours`);
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name}   is taking ${numOfClass} classes`);
    }
  }

  const student1 = new Student("Mr. studet", 20, "kishoregnaj");

  const teacher1 = new Teacher(
    "Mr.techer",
    30,
    "brazil",
    "programming tteacher"
  );


  console.log(teacher1.getSleep(2));
  //
}
