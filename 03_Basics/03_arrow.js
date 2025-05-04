/*
--------- What is an Arrow Function in JavaScript? --------------
An Arrow Function is a shorter syntax to write functions in JavaScript, introduced in ES6 (ECMAScript 2015). 
It is especially useful for writing short, concise functions.

Basic Syntax : 
// Traditional Function
function add(a, b) {
    return a + b;
}
  
// Arrow Function
const add = (a, b) => a + b;

*/

// Syntax Variations

// 1. Single Parameter

const greet = name => `Hello, ${name}`;
// console.log(greet("Rahul"));

// 2. Multiple Parameters with implicit return

const addTwoNumber = (a, b) => (a + b);
// console.log(addTwoNumber(9, 4));        // 13

// 3. No Parameters

const sayHello = () => console.log("Hello Learners!");
// sayHello();

// 4. Multiline Function Body (with {} and return)

const subtract = (a, b) =>{
    const result = a - b;
    return result;
};

// console.log(subtract(9, 4));        // 5

//------------------- Important Differences from Regular Functions -----------------

function print(){
     console.log("Inside Normal Function")
     console.log(this);
}

// print();

const display = () =>{
    console.log("Inside Arrow Function")
    console.log(this)
}

// display();      // Inside Arrow Function {}

// console.log(this);      // {}


/* 
 ======= 1. No own this binding ==========

 Arrow functions do not have their own this context. They capture the this value from the enclosing lexical scope 
 (usually the surrounding function or object).
*/

const person = {
     name : "John",
     greeting : () => {
        console.log(`Hello, My name is ${this.name}`);
     },

     sayHello : function(){
        console.log(`Hello, my name is ${this.name}`);
        console.log(this);
     }
};

// person.sayHello();

person.name = "Mark";   // change context

// person.sayHello();

/* Important : Browser me this Window object ko refer karta hai or node environment me this global object yani empty object {} ko refer karta hai. */


function displayName(){
     let username = "Harish";
     console.log(this.username);
}

// displayName();      // undefined

/*
========== 2. Cannot be used as constructors ===========

You cannot use new keyword with an arrow function.
*/

const Person = (name) => {
     this.name = name;
}

// let p = new Person("Suresh");  // TypeError: Person is not a constructor

/*
=========== 3. No arguments object =================

Arrow functions do not have an arguments object.

const showArgs = () => {
  console.log(arguments); // ❌ ReferenceError
};

# Use rest parameters instead:

const showArgs = (...args) => {
  console.log(args); //  [1, 2, 3]
};
showArgs(1, 2, 3);

*/

/* =========== What is the difference in how this behaves in arrow functions compared to regular functions? ========

Strong Sample Answer:
English Version---
In JavaScript, arrow functions differ from regular functions in how they handle the this keyword. Arrow functions do not have their own this. Instead, they lexically 
bind this—meaning they inherit this from the surrounding scope where they are defined.
This makes arrow functions especially useful in situations like callbacks or methods where we want to preserve the context of this from an outer function or object.
However, because of this behavior, arrow functions are not suitable for object methods that rely on their own this, or for constructor functions where this needs to refer to the newly created object.

Hindi Version---
JavaScript mein arrow functions ka sabse bada difference yeh hota hai ki arrow function apna khud ka this nahi banata.
Arrow function mein this ko lexical scope se inherit kiya jata hai, yaani jis context (function ya block) mein arrow function likha gaya hai, usi ka this use hota hai.
Iska fayda yeh hota hai ki jab hum kisi outer function ke andar arrow function likhte hain (jaise callback ya setTimeout ke andar), toh arrow function automatically outer function ka this le leta hai — hume 
manually bind() ya self = this karne ki zarurat nahi padti.
Lekin arrow function ko constructor ke roop mein ya aise method mein jahan this current object ko point karna chahiye — wahan use nahi karna chahiye, kyunki us case mein this galat object ko point karega.

Example : 

const person = {
  name: "Ravi",
  greet: function () {
    console.log("Hello, " + this.name); // yahan 'this' person object ko point karega
  },
  greetArrow: () => {
    console.log("Hello, " + this.name); // yahan 'this' global scope ya window ko point karega
  }
};

person.greet();       // Hello, Ravi
person.greetArrow();  // Hello, undefined

Explanation :-

greet() mein regular function use hua hai, toh this person object ko point karta hai — output: Ravi.
Lekin greetArrow() mein arrow function use hua hai, jiska this global context se liya gaya hai — isliye this.name undefined aata hai.

*/


/* 
=========== IIFE (Immediately Invoked Function Expression) ============
It is a JavaScript function that is:
1. Defined and
2. Immediately executed (invoked) after its creation.

Syntax : 

(function() {
  // code inside IIFE
})();

---OR WITH ARROW FUNCTION---

(() => {
  // code inside IIFE
})();

# Why use IIFE?
- Create a private scope to avoid polluting the global namespace.
- Immediately execute logic that doesn’t need to be reused.
- Protect variables from being accidentally modified elsewhere.

*/

(function(){
    let secret = "Hidden Message";
    console.log(secret);
})();

// TypeError: (intermediate value)(intermediate value)(...) is not a function [Due to semi colon or ;]


// IIFE with Parameters:
(function(name){
    console.log(`Hello, Mr. ${name}`)
})("Raman");

// Arrow Function IIFE:

(() => {
    const today = new Date();
    console.log("Date is:", today.toDateString());
  })();

// Expected Output : 
// Hidden Message
// Hello, Mr. Raman
// Date is: Sun May 04 2025