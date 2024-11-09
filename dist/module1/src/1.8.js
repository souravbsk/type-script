"use strict";
//destructuring
{
    var user_1 = {
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
    var contactNo = user_1.contactNo, middleName = user_1.name.middleName;
}
// array destructuring
var myFriends = ["ronaldo", "pele", "neymar", "silva", "vini", "antony"];
var bestFriend = myFriends[2], rest = myFriends.slice(3);
