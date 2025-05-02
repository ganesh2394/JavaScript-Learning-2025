/*
JavaScript Variable : A variable is like a container that stores a value - such a number, text or data so you can use it later in your code.
Example : 
*/

let name = "Ganesh";

/* 
let - is a keyword to declare a variable.
name - is a variable/container
Ganesh - a value stored inside variable.
 */

const AccountNumber = '293837';
let Balance = 3422.00;
var AccountHolderName = "Rajkumar";
IFSC_Code = "SBI3638D88";

// console.log(AccountNumber);  // 293837

// console.table([AccountNumber, AccountHolderName, Balance, IFSC_Code])

let message;

// console.log(message)        // undefined

/*
Note : Scope ka matlab hota hain ki ham variable to code me kha access or use kar sakte.
Types : 
1. Globle Scope - Variable ko function or block ke bahar declare karna so that it can be accessible anywhere in the code. 
2. Block Scope[const and let] - Varible ko block {} ke andar declare karna so that it can only accessible inside that {} block.
3. Functional Scope[var] - Variable ko function ke ander declare kiya jata hain so that i can only accessible inside that function.
*/


// Global Scope
let b = 20
const a = 10;

{
    // Inside a block (Block Scope)
    // 'a' and 'b' are accessible here because they are declared in the global scope
    console.log(a);
    console.log(b);
    console.log(c); //  undefined (due to hoisting of var c)

}

// 'var c' is function-scoped, but since it's declared globally, it's available everywhere after declaration
var c = 50;

// Function Scope
function definationOfA() {
    var c = 30;
    console.log("Value of C : ", c);

}

definationOfA();    // Calls the function and prints 30

function display() {
    console.log(a);
    console.log(b);
    console.log(c);
}

display();  // Calls the function and prints 10, 20, 50


