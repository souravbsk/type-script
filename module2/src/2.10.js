"use strict";
{
    // mapped types
    const arrOfNumber = [1, 2, 5];
    // const arrOfString : string[] = ['1','2','3']
    const arrOfString = arrOfNumber.map(number => {
        return number.toString();
    });
    console.log(arrOfString);
    const area1 = {
        height: '10',
        width: '20',
    };
    //
}
