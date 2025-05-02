/* JavaScript Datatypes : Datatypes define karte hain ki variable kis type of data hold kar sakta hai
Javascript ek dynamically typed language hai means you don’t have to specify the data type when declaring a variable

Categories : 1. Primitive (immutable and hold single value) 2. Non Primitive (can hold collections of values or more complex entities)

Primitive Datatypes : 1. String 2. Number 3. BigInt 4. Boolean 5. Undefined 6. Null 7. Symbol
Non Primitive Datatypes : Object, Array, Function, Date, RegExp

*/

// Note : All primitive types, except null, can be tested by the typeof operator. typeof null returns "object"

// 🔹 Primitive Data Types
let name = "Ganesh";                        // string
let age = 22;                               // number
let isLoggedin = true;                      // boolean
let status;                                 // undefined
let bigNum = 12345678901234567890n;         // bigint
let nothing = null;                         // object : null
let id = Symbol('id');                      // symbol

// 🔸 Non-Primitive (Reference) Data Types
let person = { name: "Ram", age: 33 };      // object
let scores = [10, 20, 30];                  // array (typeof returns object)
function greet() { return "Hi"; }           // function
let today = new Date();                     // date (typeof returns object)
let pattern = /[a-z]+/;                     // regexp (typeof returns object)

//  Checking all with typeof
console.log("name: ", typeof name);               // string
console.log("age: ", typeof age);                 // number
console.log("isLoggedin: ", typeof isLoggedin);   // boolean
console.log("status: ", typeof status);           // undefined
console.log("bigNum: ", typeof bigNum);           // bigint
console.log("nothing: ", typeof nothing);         // object (quirk in JavaScript)
console.log("id: ", typeof id);                   // symbol

console.log("person: ", typeof person);           // object
console.log("scores: ", typeof scores);           // object (Arrays are objects)
console.log("greet: ", typeof greet);             // function
console.log("today: ", typeof today);             // object
console.log("pattern: ", typeof pattern);         // object


// Note : All primitive types, except null and undefined, have their corresponding object wrapper types.

let user = null;
console.log(user);        // null
console.log(typeof user); // object (this is a known bug in JavaScript)


// Note : null is a primitive datatype and represents the intentional absence of any value or object. It is not an object, it's a primitive value.