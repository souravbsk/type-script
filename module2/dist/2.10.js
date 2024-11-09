"use strict";
{
    // mapped types
    var arrOfNumber = [1, 2, 5];
    // const arrOfString : string[] = ['1','2','3']
    var arrOfString = arrOfNumber.map(function (number) {
        return number.toString();
    });
    console.log(arrOfString);
    var area1 = {
        height: '10',
        width: '20',
    };
    //
}
