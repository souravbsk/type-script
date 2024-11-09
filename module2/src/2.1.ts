{
  //
  let anything: any;

  anything = "Hello world";
  anything = 42;

  // anything = true; // Error: Type 'true' is not assignable to type 'string |
  anything as number;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value);

      return `tHE converted value is  ${convertedValue * 1000} grams.`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as number;

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
  //
}
