{
  // promise

  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const getTodo = async ():Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data
  };

  getTodo();

  
  // simulate

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("error failed to load data");
      }
    });
  };

  // calling create promise  function
  const showData = async () => {
    const data: string = await createPromise();
    console.log(data, "hello world");
    return data;
  };

  showData();

  //
}
