async function sayHello() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello, World!");
      }, 1000); 
    });
  }
  
  sayHello().then((message) => {
    console.log(message); 
  });

  async function throwError() {
    throw new Error("Виникла помилка при завантаженні!");
  }
  
  async function run() {
    try {
      await throwError();
    } catch (error) {
      console.error("Помилка:", error.message);
    }
  }
  
  run();