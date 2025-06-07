/* 
There are four ways to create an object :-

1. Using Object Literals
2. Using new Object()
3. Using constructor function
4. Using Classes

 */

// Tarika 01 : 
const person = {
     name : "James",
     age : 34,
     email : "james.morgan@example.com",

     // nested object
     address : {
          city : "Delhi", 
          zip : 231123,
     },

     // method
     greet : function(){
         console.log(`Hey ! My name is ${this.name}`);
        //  console.log(this);
     }
}

// Access Properties

// Using Dot Notation
console.log(person.name);

// Using Bracket Notation
console.log(person["age"]);

// Useful for dynamic keys
let key = "email"
console.log(person[key]);

// person.greet();

// console.log(this); // output : {}




// Tarika 02 :

const User1 = new Object();
User1.name = "Harish Sharma";
User1.age = 23;
User1.sayHello = function(){
     console.log(`Hello My name is ${this.name}`);
     console.log(this);
}

// User1.sayHello();

// Tarika 03 :

function User2(username, isLoggedin, countSubscriber){
     this.username = username;
     this.isLoggedin = isLoggedin;
     this.countSubscriber = countSubscriber;
}

// create instance 
const user1 = new User2("Norty", true, 340);
console.log(user1);
const user2 = new User2("Anthonyi", false, 10000);
console.log(user2);

// Tarika 04 :
class User3{
     constructor(name, isLoggedin, age){
          this.name = name;
          this.isLoggedin = isLoggedin;
          this.age = age;
     }
}

const user31 = new User3("Brook", true, 43);
// console.log(user31 instanceof User3);
console.log(user31);



/*
| Method                | Description                                       |
| --------------------- | ------------------------------------------------- |
| `Object.keys(obj)`    | Array of keys                                     |
| `Object.values(obj)`  | Array of values                                   |
| `Object.entries(obj)` | Array of \[key, value] pairs                      |
| `Object.assign()`     | Copies properties                                 |
| `Object.freeze(obj)`  | Makes object immutable                            |
| `Object.seal(obj)`    | Prevents adding/removing keys, but allows updates |
*/

// Returns an array of keys (property names) of an object.
const keys = Object.keys(user31);
console.log(keys)

// Returns an array of values of the object’s own properties.
const values = Object.values(user31);
console.log(values)

// Returns an array of key-value pairs as sub-arrays.
const entries = Object.entries(user31);
console.log(entries);

// Copies all enumerable properties from one or more source objects to a target object.
const sourse = {a : 1, b : 2};
const target = {c : 3, d : 4};

const merged = Object.assign(target, sourse);
console.log("Merged : ",merged);

// Freezes an object — makes it immutable. You can’t add, remove, or update properties.
const obj = {name : "Yoyo"};
Object.freeze(obj); 

// obj.address = "Amaltash Jila Colony";          // ------ ignore
// obj.name = "Summy";                            // ----- ignore

console.log(obj)

// Seals an object — you can update existing properties, but not add or remove any.

const obj1 = {
      username : "Travish",
      isMarried : false,
      age : 23,
}

Object.seal(obj1);

obj1.username = "Harry";
obj1.countSubscriber = 345;

console.log(obj1);