{
    // conditional type


type a1 = string
type a2 = boolean
type y =  a1 extends null ? true : false


type y1 = a1 extends null ? true : a2 extends undefined ? undefined : any



type Sheikh = {
    bike: string;
    car:string;
    ship: string;
    plane:string;
}

type CheckVehicle<T> = T extends  keyof Sheikh ? true : false

type HasTractor = CheckVehicle<'plane'>








    // 
}