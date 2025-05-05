// ======== Loops (Iteration) ============

// Run a block of code multiple times.

// -------- 1. for loop ---------------

for(let i=0; i<3; i++){
     console.log("Count : ", i);
}

// Expected Output : 
// Count :  0
// Count :  1
// Count :  2

// --------- 2. while loop ------------

let i = 1;
while(i <= 3){
    console.log("Iteration : ", i);
    i++;
}

// Expected Output : 
// Iteration :  1
// Iteration :  2
// Iteration :  3

// ------ 3. do...while loop ------------

// Runs at least once

let count = 5;

do{
     console.log(count);
     count++;
}while(count <= 3);

// Expected Output : 5

// --------- 4. for...of loop (for arrays) --------------

let fruits = ["Apple", "Banana", "Grapes", "Papaya"];

for(let fruit of fruits){
     console.log(fruit);
}

// Expected Output : 
// Apple
// Banana
// Grapes
// Papaya

// -----------5. for...in loop (for objects) ---------
let person = {name : "Ravi", age : 23};

for(let key in person){
    console.log(key +  " : " +  person[key]);
}

// Expected Output : 
// name : Ravi
// age : 23

// ============== Jumping Statements =============

// ---- break : Exits the loop early. ----

for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
  }

// Expected Output : 
// 0
// 1
// 2

// ----- continue : Skips the current iteration.------

for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}

// Expected Output : 
// 0
// 1
// 3
// 4


// ================ forEach Loop ===============

// Sample array of programming languages
let coding = ["java", "javascript", "python", "swift"];

// ---------- Example 1: Basic forEach using anonymous function ----------
coding.forEach(function(item){
     // Prints each item in the array
     console.log(item);
})

// ---------- Example 2: Using arrow function ----------
coding.forEach((item) => {
     // Arrow function to log each item
     console.log(item);
})

// ---------- Example 3: Using a named function ----------
function printItem(item){
     // A named function that logs an item
     console.log(item);
}

// Passing the function reference to forEach
coding.forEach(printItem);

// ---------- Example 4: Accessing item, index, and full array ----------
coding.forEach((item, index, arr) => {
     // item   => current element in array
     // index  => current index of element
     // arr    => the full array itself
     console.log(item, index, arr);
});
