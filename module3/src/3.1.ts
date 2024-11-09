{
    // oop-class


class Animal {
    constructor(public name:string, public species:string, public sound:string) {
        this.name=name;
        this.species = species;
        this.sound = sound;
    }

    makeSound(value:string){
        console.log(value)
        console.log(`The ${this.name}  says ${this.sound} `);
    }


}


const  dog = new Animal('Buddy','Dog','Woof');
const cat = new Animal('guddy','cat','meaw meaw')
console.log(dog.makeSound('hello'))
console.log(cat);



    // 
}