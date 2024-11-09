{
    // utility types

    //pick
    type Person = {
        name: string;
        age: number;
        email?:string;
        contactNo:string
    }

    // Pick

    type NameAge = Pick<Person,'name' | 'age'>;


    // Omit
    type ContactInfo = Omit<Person, 'name' | 'age'>;


    // Required

    type  RequiredPerson = Required<Person>;


    //partial

    type PersonPartial = Partial<Person>




    // Readonly

    type PersonReadOnly = Readonly<Person>
    const person1: PersonReadOnly ={
        name:'MR X',
        age: 30,
        email: 'mr.x@gmail.com',
        contactNo: '1234567890'
    }

    // person1.name = 'Sourav'
    
    // Cannot assign to 'name' because it is a read-only property.ts(2540)



    // Record Type

    type MyObj = Record<string,string>
    const Obj1:MyObj = {
        a:'aa',
        b:'bb',
        c:'cc',
        d:'dd'
    }

    type MyObj2 = Record<string,unknown>
    const Obj2:MyObj2 = {
        a:'aa',
        b:'bb',
        c:'cc',
        d:'dd',
        e:123
    
    }

    //
}