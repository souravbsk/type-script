{
  // interface - generic

  interface Developer<T, X=null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }


  // _______________________________________________________________________

  type AsusBrand = {
    brand: string;
    model: string;
    display: string;
  };



  const richDeveloper: Developer<AsusBrand> = {
    name: "Sourav Basak",
    computer: {
      brand: "Asus",
      model: "Zenbook",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };


//   _______________________________________________________________________


  interface AppleWatch {
    brand: string;
    model: string;
    isStart: boolean;
    isBlock: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const poorDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: " Basak",
    computer: {
      brand: "Asus",
      model: "Zenbook",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "Apple",
      isStart: true,
      isBlock: false,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };



  //
}
