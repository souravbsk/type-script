{
  // ternary operator || optional changing  || nullish coalescing

  const age: number = 18;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("no adult");
  }

  const isAdult = age >= 18 ? "adult" : "no adult";
  console.log({ isAdult });

  //   nullish coalescing
  // null/undefined ===> decision making

  const isAuthenticated = null;
  const user1= isAuthenticated ?? "Guest";

  console.log({ user1 });
  // { user: 'Guest' }

  type User = {
    name: string;
    address: {
      city: string;
      state: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "sourav",
    address: {
      city: "kolkata",
      state: "west bengal",
      presentAddress: "kolkata",
    },
  };



  const permanentAddress = user?.address?.permanentAddress ?? "No Address";
  console.log({permanentAddress})
}
