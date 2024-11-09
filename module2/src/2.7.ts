{
    // generic constrain with key of operator 

    // this is the most common use case
    // it is used to constrain the type of a generic parameter
  

    type Vehicle = {
        bike:string;
        car:string;
        ship:string;
    }



    
    
    type Owner2 = keyof Vehicle; // with key of operator
    

    
//   const person1:Owner2 = 'train'
  
  //   Type '"train"' is not assignable to type 'keyof Vehicle'.ts(2322)
  
  const person2:Owner2 = 'bike'

  

    type Owner = 'bike' | 'car' | 'ship'; // manually
    // output:  Owner2 is "bike" | "car" | "ship"  // output: true


    const  getPropertyValue = <X,Y extends keyof X> (obj:X,key:Y) =>{
        return obj[key]
    } 
  



 const user = {
    name: 'John',
    age: 30,
    occupation: 'Developer',
}



    const result1 = getPropertyValue(user, 'name')





    // 
}