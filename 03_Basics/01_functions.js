/*
----------- What is a Function? --------
A function in JavaScript is a reusable block of code that performs a specific task.

Syntax : 

function func_name(parameters){
    // code to be executed
}
*/
// -- function definition --
function greet(){
    console.log("Hello JavaScript Learners!");
}

// console.log(greet);     // [Function: greet] : reference

// greet();        // (Execution) Output : Hello JavaScript Learners!

/* 
----- Parameters vs Arguments ----------
Parameter - The variable listed in function definition.
Argument - The actual value passed to the function.

*/
// username is a parameter
function sayHello(username){
    console.log(`Hello, Mr. ${username}!`);
}

// while calling funtion
// sayHello("Harshit Sharma");     // "Harshit Sharma" is an argument

/*
---------------- Types of Functions -------------------
*/

// 1. Function Declaration

function addTwoNumbers(n1, n2){
    return n1 + n2;
}

// console.log(addTwoNumbers(2,3));        // 5

// 2. Function Expression

const multiply = function(x, y) {
    return x * y;
};

// console.log(multiply(5,2));     // 10

// 3. Arrow Function (ES6)

const divide = (a, b) => a / b;

// console.log(divide(5,2));       // 2.5

/*
------------ Default Parameters ------------
Meaning : If no argument is passed, the default value is used.
*/

// default value of user is "Unknown"
function sayGoodMorning(user = "Unknown"){
    return `Good Morning ${user}!`
}

// console.log(sayGoodMorning(""));        // Good Morning !
// console.log(sayGoodMorning("Rahul"));   // Good Morning Rahul!
// console.log(sayGoodMorning());          // Good Morning Unknown!


/*
# Rest Parameters (...) : Used when we don’t know how many arguments will be passed.
*/

function sumAll(...numbers){
     return numbers.reduce((acc, value) => acc + value, 0);
}

// console.log("Sum of five Natural numbers : ",sumAll(1, 2, 3, 4, 5));                    // 15
// console.log("Sum of six Fibonacci  series numbers : ", sumAll(0, 1, 1, 2, 3, 5));       // 12


/*
----------- Return Statement ------------
The return keyword is used to return a value from the function.
*/

function squre(a){
    return a * a;
}

// let result = squre(9);
// console.log("Square : ", result);       // Square :  81

/*
---------- Anonymous Function ----------
A function without a name. Often used in callbacks.
*/

// setTimeout(function(){
//     console.log("Anonymous function executed");
// }, 1000)

// automatically executed after 1 second and print the statement : Anonymous function executed

/*
-------- IIFE (Immediately Invoked Function Expression) -------------
Executes immediately after it's defined.
*/

// (function(){
//     console.log("IIFE runs immediately!");
// })();

// Expected Output : IIFE runs immediately!