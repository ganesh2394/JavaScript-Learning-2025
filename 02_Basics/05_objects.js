/*
 ------------- JavaScript Destructuring --------------
Destructuring is a concise way to extract values from arrays or properties from objects and assign them to variables.

*/

// ==== Array Destructuring ====

const arr = [1, 2, 3];

const [a, b, c] = arr;      

// console.log(a)      // 1
// console.log(b)      // 2
// console.log(c)      // 3

// Skipping Elements:

const [x, ,y] = [12, 14, 16];

// console.log(x);     // 12
// console.log(y);     // 16

// Using Rest (...)

const[first, ...rest] = [1, 2, 3, 4, 5];

// console.log(first);     // 1
// console.log(rest);      // [ 2, 3, 4, 5 ]


// ==== Object Destructuring ====

const user = {
     name : "Ganesh",
     age : 22,
     location : "Indore"
}

const {name , age, location} = user;

// console.log(name);      // Ganesh
// console.log(age);       // 22
// console.log(location);  // Indore


// Rename Variable:
const{name : username} = user;
// console.log(username);          // Ganesh


// Set Default Value:
const {gender = "male"} = user;
// console.log(gender);        // male


// Nested Object Destructuring:

const profile = {
    user: {
      id: 1,
      info: {
        name: "Ravi",
        age: 28
      }
    }
  };
  
//   const {
//     user: {
//       info: { name, age }
//     }
//   } = profile;
  
//   console.log(name); // Ravi
//   console.log(age);  // 28
  

// Function Parameter Destructuring:

function greeting ({name, age}){
     console.log(`Good Morning, ${name} , you are ${age} years old.`);
}
// greeting({name : "Shivam", age : 33});      // Good Morning, Shivam , you are 33 years old.

/*
----------------  JSON & API in JavaScript ---------------
# ==== What is JSON? =====
JSON stands for JavaScript Object Notation.
It's a lightweight data-interchange format, used to send and receive data between server and client.


JSON Format Example:
{
 "name": "Ganesh",
  "age": 22,
  "isLoggedIn": true
}

JavaScript provides two main methods to handle JSON:

🔹 JSON.stringify()
Converts a JavaScript object into a JSON string.

const user = { name: "Ganesh", age: 22 };
const jsonString = JSON.stringify(user);

console.log(jsonString); // '{"name":"Ganesh","age":22}'

🔹 JSON.parse()
Converts a JSON string into a JavaScript object.

# ==== What is an API? ====
API = Application Programming Interface
APIs allow communication between different software systems.

---- JSON + API ---
When a website fetches data from a server (e.g., weather, user info), it often comes in JSON format.


*/

/* 
Fetching Data from a JSON API in JavaScript

Using fetch() (Modern JavaScript way):

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())         // convert to JSON
  .then(data => console.log(data))           // access JSON data
  .catch(error => console.error("Error:", error));

This will print an array of user objects fetched from the JSONPlaceholder dummy API.


*/