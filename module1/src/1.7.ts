{
  // spread operator
  // rest oprator
  // destructuring

  //learn spread operator

  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["neymar", "ronaldinho", "silva"];

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

  const mentorList = {
    ...mentors,
    ...mentors2,
  };
  console.log(mentorList);

  // learn rest operator

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(friend));
  };

  greetFriends("neymar", "vini", "antony", "pele");


}
