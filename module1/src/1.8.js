"use strict";
//destructuring
{
    const user = {
        id: 345,
        name: {
            firstName: "sourav",
            middleName: "hello",
            lastName: "Basak",
        },
        contactNo: "++801629351823",
        address: "kishoreganj",
    };
    // object destructuring
    const { contactNo, name: { middleName }, } = user;
}
// array destructuring
const myFriends = ["ronaldo", "pele", "neymar", "silva", "vini", "antony"];
const [, , bestFriend, ...rest] = myFriends;
