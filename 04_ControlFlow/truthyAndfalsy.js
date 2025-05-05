/*
In JavaScript, truthy and falsy values determine how values behave in boolean contexts, like inside if conditions.
*/

/* 

======= What is a Falsy Value? ==========
A falsy value is a value that is considered false when evaluated in a boolean context.

List of Falsy Values:-

Value       |      Description
------------|--------------
false       |  Boolean false itself
0           |  Number Zero
-0          |  Negative Zero
0n          |  BigInt Zero
""          |  Empty String
null        |  null value
undefined   |  Undefined value
NaN         |  Not a Number

=========  What is a Truthy Value? =============
A truthy value is any value that is not falsy, meaning it evaluates to true in a boolean context.

Examples of Truthy Values:-
=> true
=> "hello" (non-empty string)
=> 42, -5 (non-zero numbers)
=> [] (empty array)
=> {} (empty object)
=> function() {} (any function)

*/

// Example : falsy
if(0){
    console.log("This won't run");
}

// Example : truthy
if("Hello"){
     console.log("It will run.")       
}

// Output : It will run.

/* ============ Nullish Coalescing Operator (??) ===================
The Nullish Coalescing Operator (??) in JavaScript is used to provide a default value when a variable is either null or undefined.

Syntax : 

let result = a ?? b;

Note : 
- If a is not null or undefined, result is a.
- If a is null or undefined, result is b.
*/

let username;
let defaultName = "Guest";

let nameToDisplay = username ?? defaultName;
console.log(nameToDisplay); // Output: Guest

// Difference Between || and ??:

let count = 0;

console.log(count || 5);  // Output: 5 → Because 0 is falsy
console.log(count ?? 5);  // Output: 0 → Because 0 is not null or undefined

/* 
======== Use Case =========

1. Default function parameters:
*/

function greet(userName) {
    console.log("Hello", userName ?? "Guest");
}
greet();  // Hello Guest
  
// 2. Settings fallback:

let userSettings = {
    theme: null
};

let theme = userSettings.theme ?? "light";
console.log(theme); // Output: light

// Note : ?? cannot be used directly with || or && without parentheses, or it will throw an error.

// Invalid:
// let result = a || b ?? c; // SyntaxError

// Correct:
// let result = (a || b) ?? c; // correct


/* =============== Ternary Operator =================

The ternary operator is a shorthand way of writing an if...else statement. 
It allows you to assign values or execute expressions based on a condition — all in one line.

Syntax :-

condition ? expressionIfTrue : expressionIfFalse;

*/

let isLoggedIn = true;

const userStatus = isLoggedIn ? "Welcome to JS Tutorial" : "Please Login";

// console.log(userStatus);        // Output : Welcome to JS Tutorial


// Nested Ternary (Use with caution for readability):

const score = 86;

const grade = score > 90 ? "A"
            : score > 75 ? "B"
            : score > 60 ? "C"
            : "D";

// console.log("You Got Grade : ",grade);      // You Got Grade :  B


