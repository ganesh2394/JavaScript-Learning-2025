/*
------- What is Control Flow? ---------

Control Flow refers to the order in which the statements or instructions in a program are executed.
By default, JavaScript code runs from top to bottom, line by line, unless control flow structures (like if, for, while, switch, etc.) 
alter that flow.

Types of Control Flow in JavaScript:
1. Sequential Execution
2. Conditional Statements
3. Switch Statement
4. Loops
5. Break and Continue
6. Function Calls

*/

//=========  1. Sequential Execution =========== 

// Code runs in the order it's written

let a = 10;
let b = 12;
let result = a + b;
// console.log("Result : ", result);       // 22


// ========== 2. Conditional Statements ==============

// Used to make decisions in code.

// a. if statement

let age = 12;

// if(age > 18){
//     console.log("You are eligible for vote.");
// }

// Expected Output : You are eligible for vote.


// b. if...else statement

// if (age > 20) {
//     console.log("You are eligible for vote.");
    
// } else {
//     console.log("You are not eligible for vote.");
// }

// Expected Output : You are not eligible for vote.

// c. if...else if...else

// let score = 85;

// if (score >= 90) {
//     console.log("Grade A");
//   } else if (score >= 80) {
//     console.log("Grade B");
//   } else {
//     console.log("Grade C");
//   }

// Expected Output : Grade B

// ======== 3. Switch Statement ============

// Used for multiple condition checks — better than many if-else blocks when checking one variable.

// let fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("Apples are red.");
//     break;
//   case "banana":
//     console.log("Bananas are yellow.");
//     break;
//   default:
//     console.log("Unknown fruit.");
// }

// Expected Output : Apples are red.


// ======== Loops (Iteration) ============

// Run a block of code multiple times.

// -------- 1. for loop ---------------

// for(let i = 0; i<3; i++){
//      console.log("Count : ", i);
// }

// Expected Output : 
// Count :  0
// Count :  1
// Count :  2

// --------- 2. while loop ------------

let i = 1;
// while(i <= 3){
//     console.log("Iteration : ", i);
//     i++;
// }

// Expected Output : 
// Iteration :  1
// Iteration :  2
// Iteration :  3

// ------ 3. do...while loop ------------

// Runs at least once

let count = 5;

// do{
//      console.log(count);
//      count++;
// }while(count <= 3);

// Expected Output : 5

// --------- 4. for...of loop (for arrays) --------------

let fruits = ["Apple", "Banana", "Grapes", "Papaya"];

// for(let fruit of fruits){
//      console.log(fruit);
// }

// Expected Output : 
// Apple
// Banana
// Grapes
// Papaya

// -----------5. for...in loop (for objects) ---------
let person = {name : "Ravi", age : 23};

// for(let key in person){
//     console.log(key +  " : " +  person[key]);
// }

// Expected Output : 
// name : Ravi
// age : 23

// ============== Jumping Statements =============

// ---- break : Exits the loop early. ----

// for (let i = 0; i < 5; i++) {
//     if (i === 3) break;
//     console.log(i);
//   }

// Expected Output : 
// 0
// 1
// 2

// ----- continue : Skips the current iteration.------

// for (let i = 0; i < 5; i++) {
//     if (i === 2) continue;
//     console.log(i);
// }

// Expected Output : 
// 0
// 1
// 3
// 4

// ========= Function Calls (Nested Execution) =======

// Functions create their own execution context and affect control flow.

function greet(){
    console.log("JS Function Executed");
}

// console.log("START");
// greet();
// console.log("END");

// Expected Output : 
// START
// JS Function Executed
// END

// =========== 5. try...catch (Exception Handling) ===========

// Used to handle errors in the code without stopping the program.

try {
    let result = 10 / 0;
    throw new Error("Something broke!");
  } catch (error) {
    console.log("Error caught: ", error.message);
  }
  
// Expected Output : Error caught:  Something broke!

// Note : Control flow yahan error ke case mein catch block mein chala jata hai.


