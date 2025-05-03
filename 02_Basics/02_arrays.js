// flat() – Flattens nested arrays

let anotherArray = [1, 2, 3, [4, 5, 6], 7, [11, 12, [15, 16, 17]]];
// console.log(anotherArray);

let real_AnotherArray = anotherArray.flat(3);  // or Infinity
// console.log(real_AnotherArray);


let marvle_heros = ["Ironman", "Spiderman", "Thor"]
let dc_heros = ["Batman", "Superman", "Flash"];

// console.log(marvle_heros);       // [ 'Ironman', 'Spiderman', 'Thor' ]

// # Push : Appends new elements to the end of an array, and returns the new length of the array.

// marvle_heros.push(dc_heros);
// console.log(marvle_heros);       // [ 'Ironman', 'Spiderman', 'Thor', [ 'Batman', 'Superman', 'Flash' ] ]

// # Concat : Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let all_heros = marvle_heros.concat(dc_heros);
// console.log(marvle_heros);         // [ 'Ironman', 'Spiderman', 'Thor' ]
// console.log(all_heros);            // [ 'Ironman', 'Spiderman', 'Thor', 'Batman', 'Superman', 'Flash' ]


// Spread Operator : Another way to combine two or more array 

let all_new_heros = [...marvle_heros, ...dc_heros];
console.log(all_new_heros);         // [ 'Ironman', 'Spiderman', 'Thor', 'Batman', 'Superman', 'Flash' ]

// some() - Returns true if any element matches
// every() - Returns true if all elements match

let arr = [1, 2, 3];

// console.log(arr.some(x => x > 2));                   // true
// console.log(arr.every(x => x > 0));                  // true

// ------------- Creation & Conversion -------------------

// The Array.isArray() static method determines whether the passed value is an Array.

console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray("[]"));
// Expected output: false


console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false


// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

// The Array.of() static method creates a new Array instance from a variable number of arguments, 
// regardless of number or type of the arguments.
let a1 = "foo";
let a2 = 2;
let a3 = "bar";
let a4 = true;

console.log(Array.of(a1, a2, a3, a4));
// Expected output: Array ["foo", 2, "bar", true]

console.log(Array.of());
// Expected output: Array []