let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Promise resolved!");
      }, 2000);
});

promise.then(message => {
    console.log(message);
  });
 
  let PromiseData = new Promise((resolve, reject) => {
    reject("Promise rejected!");
  });
  
  PromiseData.then((message) => {
      console.log("Resolved:", message);
    })
    .catch((error) => {
      console.error("Error:", error);
    });