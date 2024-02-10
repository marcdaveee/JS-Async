// Get a promise

const getPromise = () => {
  // fetch something

  return new Promise((resolve, reject) => {
    resolve("Resolved data!");
    // reject("Some errors");
  });
};

// getPromise().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// Cleaner format
getPromise()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   using fetch API

function getTodo() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Resolved: ", data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
}

getTodo();
