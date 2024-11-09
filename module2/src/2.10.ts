{
    // mapped types
const arrOfNumber: number[] = [1,2,5];

// const arrOfString : string[] = ['1','2','3']


const arrOfString:string[] = arrOfNumber.map(number => {
    return number.toString()
})



console.log(arrOfString)





type AreaNumber = {
    height: number;
    width:number;
}

type  AreaString<T> = {
    [key in keyof T ] : T[key]
}

const area1: AreaString<{height:string; width:string}> = {
    height: '10',
    width: '20',
}






//
}