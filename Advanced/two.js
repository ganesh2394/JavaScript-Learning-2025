// How to create Promise ? [Basic Syntax]

const { response } = require("express");

/**
 * ==== 1. A Promise that Always Resolves =====
 */

let promise1 = new Promise((resolve, reject) => {
  resolve("Promise resolve successfully.");
});

promise1.then((value) => {
  console.log(value);
  // Expected Output : Promise resolve successfully.
});

/**
  ==== 2. A Promise that Rejects ====
 */

let promise2 = new Promise((resolve, reject) => {
  reject("Something went wrong");
});

promise2
  .then((value) => {
    console.log("Success: ", value);
  })
  .catch((error) => {
    console.log("Error: ", error);
    // Expected Output : Error:  Something went wrong
  });

/**
 * ==== Promise with a Time Delay (using setTimeout) =====
 */

let delayPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Task complete after 2's seconds.");
  }, 2000);
});

delayPromise.then((value) => {
  console.log(value);
  // Expected Output after 2 seconds : Task complete after 2's seconds.
});

/**
 * ==== Fetch user Data ====
 */

let promise4 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    setTimeout(function () {
      resolve({
        username: "James Connery",
        email: "james.connery@example.com",
        location: "London",
      });
    }, 2000);
  } else {
    reject("Something went wrong");
  }
});

promise4
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log("Error : ", error);
  })
  .finally(() => {
    console.log("Finally : Promise is either resolved or rejected");
  });

/** 
 * ====  Async/Await (Introduced in ES2017) =======
 * async: Declares a function that returns a Promise.
 * await: Pauses the execution inside async until the Promise is resolved or rejected.
 * 
 * Syntax:-
  async function myFunction() {
  const result = await somePromise();
  console.log(result);
}
 */

let promise5 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Loaded Data");
  }, 1000);
});

async function loadData() {
  console.log("Start loading...");
  const result = await promise5; // waits here
  console.log(result);
  console.log("Done!");
}

loadData();

/**
 * ==== Fetch API Example with async/await ====
 */

async function fetchUserData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}

fetchUserData();

// Note : try/catch block is used to handle errors just like synchronous code.
// await only works inside an async function.

/** 
 * ==== Parallel vs Sequential Await ====
 * 1. Sequential (one after another):
 *  async function loadData() {
    const user = await fetch('/user');
    const posts = await fetch('/posts');
    }

  2. Parallel(faster)

  async function loadData() {
  const [userRes, postsRes] = await Promise.all([
    fetch('/user'),
    fetch('/posts')
  ]);
}

| Keyword         | Purpose                            |
| --------------- | ---------------------------------- |
| `async`         | Marks a function as asynchronous   |
| `await`         | Waits for a Promise to resolve     |
| `try/catch`     | Handles errors in `async/await`    |
| `Promise.all()` | Runs multiple Promises in parallel |

 */

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data?.name);
    // Expected Output : Leanne Graham
  })
  .catch((error) => {
    console.log("Error : ", error);
  });
