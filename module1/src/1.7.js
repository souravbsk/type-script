"use strict";
{
    // spread operator
    // rest oprator
    // destructuring
    //learn spread operator
    const bros1 = ["Mir", "Firoz", "Mizan"];
    const bros2 = ["neymar", "ronaldinho", "silva"];
    bros1.push(...bros2);
    console.log(bros1);
    const mentors = {
        prisma: "Firoz",
        redux: "Tonmoy",
        dbms: "rita",
    };
    const mentors2 = {
        typescript: "Mezba",
        next: "Sourav",
        react: "Rakib",
    };
    const mentorList = Object.assign(Object.assign({}, mentors), mentors2);
    console.log(mentorList);
    // learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(friend));
    };
    greetFriends("neymar", "vini", "antony", "pele");
}
