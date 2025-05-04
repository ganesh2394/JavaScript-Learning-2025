// Singleton using Object constructor
const myObject1 = new Object();

// Also an object literal (non-singleton) - Create normal object
const myObject2 = {};

// console.log(myObject2);  // Outputs: {} 

/* Important Note : 
The term singleton does not mean using new Object() or {} — it refers to the pattern of creating only one instance of an object that is 
shared across the code.
*/

// Add some properties
myObject1.id = "123abc";
myObject1.name = "James";
myObject1.age = 23;

// console.log(myObject1);

// # Object.freeze() : Freezes an object. Other code cannot delete or change its properties.

// -------------- Combining Objects -------------

// 1. Using Object.assign()

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const combined = Object.assign({}, obj1, obj2);

// console.log(combined); // Output: { a: 1, b: 3, c: 4 }

// Note: If properties overlap, later objects overwrite earlier ones.

// 2. Using Spread Operator (...) – Modern & Preferred

const merged = { ...obj1, ...obj2 };

// console.log(merged); // Output: { a: 1, b: 3, c: 4 }

// Note : Overwrites duplicate keys from left to right.

// 3. Deep Merge (Nested Objects) – Manual or with Libraries
// For nested (deep) objects, a shallow merge will not merge inner objects properly:

const deepMerged = {...obj1, ...obj2 };

// console.log(deepMerged) 

// To deep merge, use libraries like Lodash: _.merge({}, obj1, obj2);


/*

The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. 
It returns the modified target object.

Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2, ...,  sourceN)

Tips : If you want to keep the original objects unchanged, always merge into 
a new empty object ({}) as the first argument in Object.assign() or use spread syntax in a new object.

*/


/*
---------------------- Object Nesting -------------------------
A nested object is simply an object inside another object. 
It allows you to model more complex structures by grouping related data.
*/

// Example 1: Basic Nested Object

const user = {
     name : "Rahul",
     age : 23,
     address : {
         city : "Indore",
         state : "Madhya Pradesh",
         pincode : 455201
     }
}

// console.log(user.address.pincode);      // 455201
// console.log(user["address"]["city"]);   // Indore

// Example 2: Nested Objects with Arrays

const student = {
     name : "Shivam",
     subjects : ["Maths", "Science", "English"],
     marks : {
         Maths : 78,
         Science : 88,
         English : 90,
     },
}

// console.log(student.subjects[2]);       // English
// console.log(student.marks.Science);     // 88
// console.log(student.marks["English"]);  // 90


// Example 3: Object with Nested Functions

const employee = {
     name : "Jeevan",
     department : {
         name : "HR",
         manager : {
             name : "Suresh Sharma",
             greeting : function(){
                console.log("Welcome from the manager!");
             }
         }
     }
}

// employee.department.manager.greeting();

// Note : 
// You can access nested properties using dot notation or bracket notation.
// Always check if the parent object exists to avoid TypeError.

/*
Optional: Safe Access using Optional Chaining (?.)
This prevents errors if any level is undefined.
*/

// console.log(employee?.department?.manager?.name);       // Suresh Sharma

/*
1. Object.keys(obj) : 
Returns an array of the keys (property names) of the object.
*/
console.log(Object.keys(obj1));               // [ 'a', 'b' ]

/*
2. Object.values(obj)
Returns an array of the values of the object.
*/
console.log(Object.values(obj1));             // [ 1, 2 ]

/*
3. Object.entries(obj)
Returns an array of the object’s key-value pairs (as nested arrays).
*/
console.log(Object.entries(obj1));      // [ [ 'a', 1 ], [ 'b', 2 ] ]

// To check if a key is present in a JavaScript object, you can use one of the following methods:

// 1. in Operator (Recommended for keys)
console.log("a" in obj1)        // true

// 2. hasOwnProperty() Method (Checks own properties only)
console.log(obj1.hasOwnProperty("ab"));  // false
