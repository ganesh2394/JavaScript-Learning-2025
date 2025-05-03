/*
JS String : string is a sequence of characters used to represent text.
Strings are one of the most common primitive data types.
*/
// ways of string declaration
let name1 = "Ganesh";     // Double quotes
let name2 = 'Raj';        // Single quotes
let name3 = `Hello`;      // Backticks (template literals)

// console.table([name1, name2, name3]);

/*
Properties : 
-> Immutable: You cannot change individual characters.
-> Indexable: You can access characters using indices.

Template Literals (Backticks)
-> Allow string interpolation and multi-line strings:
*/

let name = "Ganesh";
let msg = `Hello, My name is ${name} `
// console.log(msg);

// Strings are 0-indexed.
// You can iterate strings using for...of or a loop.
// Always prefer template literals for dynamic content.

/*
----------------------- String Methods and Properties-----------------------
*/

let str = "MyLearningHub";

// Returns length of the string
// console.log(str.length);

// Converts to uppercase
// console.log(str.toUpperCase());

// Converts to lowercase
// console.log(str.toLowerCase());

// Checks if string contains substring
// console.log(str.includes("Hub"));       // true
// console.log(str.includes("hub"));       // false

// Returns position of substring
// console.log(str.indexOf("Hub"));           // 10  

// Retures character of specific index
// console.log(str.charAt(10));                // H

let message = "    Ram      ";
// console.log(message.length);           // 13

let newMsg = message.trim();
// console.log(newMsg.length);          // 3

// Extracts a section of string
// console.log(str.slice(2,7));             // Learn

// Replaces part of string
// console.log(str.replace("Hub", "Tutorial"));        // MyLearningTutorial

// Checks if string contains substring
// console.log(str.startsWith("Learn"));          // true : "My"; false : "Learn"

// Checks if string starts with given text
// console.log(str.endsWith("Hub"));       // true
// console.log(str.endsWith("Learn"));     // false

let greet = "My name is Raghav";

let inArray = greet.split(" ")
// console.log(inArray);            // [ 'My', 'name', 'is', 'Raghav' ]

let chars = 'hello'
// console.log(chars.split(""));       // [ 'h', 'e', 'l', 'l', 'o' ]


