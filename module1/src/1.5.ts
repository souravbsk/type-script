// reference type -----------> error

const user: {
  firstName: String;
  middleName?: String;
  lastName: String;
} = {
  firstName: "Sourav",
  lastName: "Basak",
};


// for optional  property
// middleName?: String;

const user1: {
  readonly company:String,
  firstName: String;
  middleName?: String;
  lastName: String;
  isMarried:boolean;
} = {
  company:'Programming Hero', 
  firstName: "Sourav",
  lastName: "Basak",
  isMarried:true,
};
// Type '"Programming Hero Bangladesh"' is not assignable to type '"Programming Hero"'


