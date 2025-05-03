/*
JavaScript Object : 
In JavaScript, an object is a non-primitive data type that allows you to store multiple values as key-value pairs. 
It's one of the most commonly used data structures for organizing and managing complex data.

*/

// Syntax : Using Literals
let mySym = Symbol("key1");
let person = {
     name : "Raman",     // by default keys as a string treat ki jati hai => "name" : "Raman"
     age : 23,
     "full name" : "Raman Sharma",         // Key with space must be in quotes
     location : "Indore",
     isLoggedIn : false,
     loginStatusDays : ["Monday", "Wednesday"],
     
     greeting : function () {
         console.log("Hello JavaScrip Learner!"); 
     },

     [mySym] : "Symbol_value",          // Using Symbol as a key
}

// console.log(person);

// Accessing Object Properties :  

// Way - 01 [Using Dot Notation ]
// console.log(person.name)        // Raman
// console.log(person.age)         //  23

// Way - 02 [Using Bracket Notation]
// console.log(person[location])   // Error - ReferenceError: location is not defined
// console.log(person["location"])     // Indore

// Full Name ko access karne ka sirf ek hi tarika hai ki ham ["key"] ka use kare
// console.log(person["full name"]);       // Raman Sharma


// Modifying Object Properties

person.age = 30;            // Updating property
person.gender = "male";     // Adding new property
delete person.isLoggedIn    // Deleting property

// console.log(person)

// console.log(person.greeting);    // Function reference (doesn't execute)
// person.greeting();               // Executes function → "Hello JavaScript Learner!"


// console.log(person[mySym]);

person.helloGreeting = function(){
     console.log(`Hello, ${this.name} From JavaScript Tutorial.`);
     
}

// Note : this refers to the current object (person in this case).

// person.helloGreeting();
/*
Important Question : How to use symbol as a key or how to define symbol inside an object 
*/

//Object.freeze(obj) makes an object immutable:
// Cannot add, update, or delete properties after freezing.

// Object.freeze(person);


/*
-------- Symbol -------------

const mySym = Symbol("uniqueKey");

const obj = {
  [mySym]: "Symbol value here"
};

Important :
- Symbol("uniqueKey") creates a unique and immutable value.
- [mySym] ensures that the symbol is used as the key, not as the string "mySym".
- If you write mySym: "value" (without brackets), it becomes a regular string key, not a Symbol.

*/

let id = Symbol("uniqueKey");

let user = {
      name : "Ram",
      age : 23,
      [id] : "101",
}

console.log(user);
// Access sybol value
console.log(user[id])         // 101

// Access all keys of object

console.log(Object.keys(user))    // Doesn't show the Symbol key

// How to show the symbol key ? : Object.getOwnPropertySymbols(obj)

// Shows the Symbol key
console.log(Object.getOwnPropertySymbols(user));  // [ Symbol(uniqueKey) ]

/*
Important Note : 
- Symbol keys are not visible in for...in loops or Object.keys()—they are non-enumerable by default.
- Use Object.getOwnPropertySymbols(obj) to access Symbol keys.
*/