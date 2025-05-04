/*
------ What is Scope? -------
Scope determines the visibility and accessibility of variables, functions, and objects in a particular part of your code.

++++++++ Types of Scope in JavaScript ++++++++++
1. Global Scope
- Variables declared outside any function/block are in the global scope.
- Accessible anywhere in the code.
*/

let name = "Ganesh";        // Global scope

function printName(){
     let nickname = "James";    
     console.log(name)          // Accessible
     console.log(nickname);     
}
// printName();
// console.log(name);
// console.log(nickname);      // ReferenceError: nickname is not defined [Not Accessible here...]


// 2. Function Scope (Local Scope) : Variables declared inside a function are only accessible within that function.

function sayHello(){
      let msg = "Hello";      // function scope 
      console.log(msg);
}

// sayHello();
// console.log(msg);        // ReferenceError: msg is not defined


// 3. Block Scope : 1. Variables declared with let and const are block-scoped. 2. A block is anything between {} like if, loops, functions.

{
const var1 = "java";
let var2 = "javascript";
var var3 = "python"           // 'var' is NOT block scoped
}

// console.log(var1);       // ReferenceError: var1 is not defined
// console.log(var2);       // ReferenceError: var2 is not defined
// console.log(var3);       // python


// 4. Lexical Scope (Static Scope) : Inner functions have access to variables of their outer functions due to scope chaining.

function Outer(){
       let outerVar = "Inside Outer function"

       function Inner(){
           let innerVar = "Inside Inner function"
           console.log(outerVar);  // can access outer scope 
           console.log(innerVar);
       }
     //   console.log(innerVar);      // ReferenceError: innerVar is not defined
       Inner();
}

// Outer();
// console.log(outerVar);   // ReferenceError: outerVar is not defined

// Expected Output : 
// Inside Outer function
// Inside Inner function

/*
--------- What is Hoisting? ----------------
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function) before code execution.
So:
Variables (var) and
Function declarations
are "hoisted" — their declarations are moved to the top, but not necessarily their initializations.

*/

// 1. Variable Hoisting

// console.log(x);          // undefined
var x = 5;

/*
==== Behind the scenes (interpreted as) =======

var x;           // declaration hoisted
console.log(x);  // undefined
x = 5;           // initialization remains in place

*/

//====== With let and const ======

// console.log(y);   // ReferenceError: Cannot access 'y' before initialization
let y = 6;
// console.log(y);   // 6


// console.log(z);   // ReferenceError: Cannot access 'z' before initialization
const z = 10;
// console.log(z);   // 10

/* 
-------- Important Note ----------

Variables declared with let and const are also hoisted, but they stay in the 
Temporal Dead Zone (TDZ) from the start of the block until the line where they are initialized.
*/


// 2. Function Hoisting 

// Function Declarations are fully hoisted:

// sayName();    

function sayName(){
   console.log("Hello, Raman !");
}

// Note : Both declaration and body are hoisted.

// *** Note : Function Expressions are not hoisted

// sayHi(); // ReferenceError: Cannot access 'sayHi' before initialization

// Ye function expression hai.
let sayHi = function(){
   console.log("Hi");
}

// Note : So only the variable declaration sayHi is hoisted — the function expression isn’t.

/*
TDZ (Temporal Dead Zone) JavaScript ka wo phase hai jahan ek variable ko declare to kiya gaya hai, 
lekin usse initialize nahi kiya gaya hota, aur agar aap us variable ko uss samay access karne ki 
koshish karte ho, to ReferenceError milta hai.

In Simple Word : 
Jab aap let ya const ka use karte ho, to wo variable hoist to hota hai, lekin JavaScript execution ke dauraan jab tak uski initialization 
line tak nahi pahuncha jata, tab tak wo TDZ mein rehta hai.
Is duration ko hi Temporal Dead Zone kehte hain.
*/