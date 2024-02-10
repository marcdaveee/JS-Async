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

// using async await
const getTodoUsingAsync = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todosss/5"
  );

  if (response.status !== 200) {
    throw new Error("Failed to get todo using async");
  }

  const data = await response.json();
  return data;
};

getTodoUsingAsync()
  .then((data) => {
    console.log("Get todo using async: ", data);
  })
  .catch((err) => {
    console.log("Rejected:", err.message);
  });
