/*
----------- JavaScript Array ------------------
An array is a special variable that hold multiple values in a sigle variable.
Note : In JavaScript, arrays are not primitives but are instead Array objects.

Characteristics : 
1. JavaScript arrays are resizable and can contain a mix of different data types.
2. JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
3. JavaScript arrays are zero-indexed,
4. JavaScript array-copy operations create shallow copies.

Type : object
*/

// Declaring an Array

// Way -01
let numbers = [1, 2, 3, 4, 5];                  // Array of numbers
let members = ["Raman", "Suresh", "Manav"]      // Array of strings
let mixed = [1, "hello", true, null];           // Mixed data types
let empty = [];                                 // Empty array

// Way-02
let evenArray = new Array(2, 4, 6, 8)

// How to access arrya elements

numbers["foo"] = 6;            // Adds a custom property "foo" to the array (not an array index)

// console.log(numbers[0]);       // Outputs: 1 (accessing the first array element)
// console.log(numbers[2]);       // Outputs: 3 (accessing the third array element)
// console.log(numbers["foo"]);   // Outputs: 6 (accessing the custom "foo" property)

/*
 What's Actually Happening Behind the Scenes:
 {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  length: 5,
  foo: 6     // Custom property (NOT part of the indexed array)
}

*/
// console.log("Length : ",numbers.length);    // length of numbers is still remains same : 5

// console.log(numbers);                   // [ 1, 2, 3, 4, 5, foo: 6 ]



/*
Note : 
you can add string properties to arrays, it's important to remember that arrays in JavaScript are designed to use numerical indices. 
This is why the "foo" property is treated as an object property and is not part of the array's list of indexed elements.

 */


/*
Shallow Copy : 
A shallow copy means that a new object or array is created, but the nested objects or arrays within it still point to the same 
references as the original ones. In other words, the top-level elements are copied, but the inner elements are shared between the 
original and the copy.
*/
let original = {name : "Suresh", details : {age : 23, location : "Indore"}};

let shallowCopy = {... original};  // or Object.assign({}, original)

shallowCopy.details.age = 33;

// console.log(shallowCopy.details.age);    // 33
// console.log(original.details.age);       // 33 → This change affects the original object too!



// Outer object: original and shallowCopy are the outer objects.
// Inner object: details is the inner object (nested within the outer object).

// The outer objects (original, shallowCopy) are separate copies.
// The inner object (details) is shared between both the original and the shallow copy.




/*
Deep Copy : 
A deep copy creates a completely new object or array, where all nested objects or arrays are also copied entirely, meaning no 
references are shared between the original and the new copy. The original and the new object are entirely independent.
*/

let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.details.age = 35;

// console.log(original.details.age);  // 33 → The original object is not affected
// console.log(deepCopy.details.age);   // 35 → The deep copy has its own copy of the inner object

// Both the outer objects and inner objects are completely independent after a deep copy.
// Any changes made to the inner objects in one copy do not affect the other copy.


// ---------------- Array Properties and Methods -------------------

let arr = [1, 2, 3]
console.log("Original : ", arr);

// length : return the length of the array
// console.log(arr.length);

// push() – Adds item(s) to the end of an array
arr.push(4);
// console.log(arr);

// pop() – Removes the last item from an array
arr.pop();
// console.log(arr);

// unshift() - Adds item(s) to the beginning
arr.unshift(6);
// console.log(arr);

// shift() – Removes the first item
arr.shift();
// console.log(arr);

// concat() – Merges two or more arrays

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let wholeArr = arr1.concat(arr2);
// console.log(wholeArr);

// join() – Converts array to string with a separator
let string_arr = arr.join("-");
// console.log(string_arr);
// console.log(typeof string_arr);


// Slice : slice(start, end) – Returns a shallow copy of a portion
let nums = [0, 1, 2, 3, 4];
// console.log("A : ", nums);    // A :  [ 0, 1, 2, 3, 4 ]

let sliceArr = nums.slice(1, 4) 
// console.log(sliceArr);            // [1, 2, 3] – does NOT modify original
// console.log("Now A : ", nums);    // Now A :  [ 0, 1, 2, 3, 4 ]


// Splice : splice(start, deleteCount, ...items) – Changes array (add/remove)
let a = [1, 2, 3, 4];
// console.log("B : ", a);     // B :  [ 1, 2, 3, 4 ]


let spliceArr = a.splice(1, 2);
// console.log(spliceArr);         // [ 2, 3 ]
// console.log("Now B : ", a);     // Now B :  [ 1, 4 ]


// indexOf() – Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// console.log(arr.indexOf(2));


// includes() – Determines whether an array includes a certain element, returning true or false as appropriate.
// console.log(arr.includes(3));   // true

// reverse() – Reverses the array (This method mutates the array and returns a reference to the same array.)
let r = [5,6,7].reverse();
// console.log(r);               // [ 7, 6, 5 ]


// sort() – Sorts array (alphabetically or by custom logic)
let sort_num = [5,2,6,1].sort();  // internally : [11,2,22,1].sort((a, b) => a - b)
// console.log(sort_num);          // [ 1, 2, 5, 6 ]

let sort_char = ['b', 'f', 'c', 'a'].sort();
// console.log(sort_char);           // [ 'a', 'b', 'c', 'f' ]

// forEach() – Iterates over each item (does not return new array)
// ['a', 'b', 'c', 'd'].forEach(x => console.log(x));     //  // Prints each item

// find() – Returns first item matching a condition
let find_val = [10, 20, 30].find(x => x > 15);         
// console.log(find_val);        // 20


// findIndex() – Returns index of first item matching condition
let find_idx = [10, 20, 30].findIndex(x => x > 15); 
// console.log(find_idx);         // 1


// filter() – Creates new array with elements that pass the test, Returns the elements of an array that meet the condition specified in a callback function.
let result = arr.filter(x => x != 2);
// console.log(result);

/*
Working : 
- filter() creates a new array.
- It loops through each item of the original array.
- For every element, it applies a condition (callback).
- If the condition returns true, the element is added to the result array.
*/
// reduce() – Reduces array to a single value

let accumulated_result = arr.reduce((acc, val)=>acc + val, 0)
// console.log(accumulated_result);


/*
Working : 
- reduce() takes a callback function and a starting value (called the "initial accumulator").
- It loops through the array and keeps accumulating the result.
At each step:
  - acc is the current accumulated value.
  - val is the current array element.
Note : 0 is initial value
*/

