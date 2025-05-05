/* 
========= How to Iterate array of object using for loop =============
*/

const users = [
    { name: "Amit", age: 25, isLoggedIn: true },
    { name: "Riya", age: 30, isLoggedIn: false },
    { name: "John", age: 22, isLoggedIn: true }
];


// Using forEach() to iterate:

users.forEach((user, index) => {
    console.log(`User ${index + 1}:`);
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Logged In: ${user.isLoggedIn ? "Yes" : "No"}`);
    console.log("-------------------");
});

// Expected Output : 

/*
User 1:
Name: Amit
Age: 25
Logged In: Yes
-------------------
User 2:
Name: Riya
Age: 30
Logged In: No
-------------------
User 3:
Name: John
Age: 22
Logged In: Yes
-------------------
*/

// Notes:
// user refers to each object in the array.
// You can access object properties like user.name, user.age directly.
// index gives the position of the current object in the array.
  
// Problem : forEach does not return anything.

let numbers = [1, 2, 3, 4, 5];

const oddNumbers = numbers.forEach((num) =>{
    return num;
});

// console.log(oddNumbers);        // undefined 
