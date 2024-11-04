// learning function
// normal function
// Arrow function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 2);

// Argument of type 'boolean' is not assignable to parameter of type 'number'.ts(2345)

const addArrow = (num1: number, num2: number): number => num1 + num2;

//object ----> function ------->  method

const poorUser: {
  name: string;
  balance: number;
  addBalance: Function;
} = {
  name: "Sourav",
  balance: 0,
  addBalance(balance: number): string {
    return `My New Balance is : ${this.balance + balance}`;
  },
};





const arr: number[] = [1,4,10]
const newArray = arr.map((elem:number):number => elem*elem)


console.log(newArray)