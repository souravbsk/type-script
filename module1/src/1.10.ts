{
  //

  // union type

  //   type FrontEndDev = "React" | "Angular" | "Vue" | "Svelte" | "Ember";

  //   type FullstackDev = "express" | "django" | "flask" | "fastapi";

  //   type Developer = FrontEndDev |  FullstackDev;

  //   const newDeveloper: FrontEndDev = "React";

  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "Male" | "Female";
  //     bloodGroup: "A+" | "AB+" | "B+" | "O+" | "A-" | "AB-" | "B-";
  //   };

  //   const user1: User = {
  //     name: "John",
  //     gender: "Male",
  //     bloodGroup: "A+",
  //   };

  type FrontEndDev = {
    skills: string[];
    designation1: "Front End Developer";
  };
  type BackendDev = {
    skills: string[];
    designation2: "Back End Developer";
  };

  type FullstackDev = FrontEndDev & BackendDev;

  const fullstackdevelper: FullstackDev = {
    skills: ["html", "css", "js", "express", "mongodb"],
    designation1: "Front End Developer",
    designation2: "Back End Developer",
  };

  //
}
