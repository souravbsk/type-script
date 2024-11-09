{
  // instanceof guard

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("Iam making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string ) {
      super(name, species);
    }
    makeBark(){ 
        console.log('I am barking')
    }
  }




  class Cat extends Animal {
    constructor(name: string, species: string ) {
      super(name, species);
    }
    makeMeaw(){ 
        console.log('I am make Meaw')
    }
  }



  const dog = new Dog('Dog bai',  'Dog');
  const cat = new Cat ('Cat bai',  'Cat'); 







  // instanceof guard
  function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog;
  }
  function isCat(animal: Animal): animal is Cat {
    return animal instanceof Cat;
  }
  
  // instanceof guard
  function getAnimal(animal: Animal) {
    if (isDog(animal)) {
        return animal.makeBark();
    }
    if (isCat(animal)) {
        return animal.makeMeaw();
    }
  }



  getAnimal(dog)






  //
}
