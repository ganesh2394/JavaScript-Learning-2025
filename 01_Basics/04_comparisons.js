/* 
Normal Comparision 
*/

// console.log(2 > 1);         // true
// console.log(2 >= 2);        // true
// console.log(3 < 1);         // false
// console.log(62 <= 71);      // true
// console.log(30 != 20);      // true


/* 
== Equal (loose equality)
*/

// console.log(4 == 4);        // true
// console.log("4" == 4);      // true

/* 
=== Strict equal (value + type)
*/

// console.log(4 === 4);        // true
// console.log("4" === 4);      // false

/*
!= Not equal (loose)
*/

// console.log(4 != "4")       // false

/*
!== Strict not equal
*/

// console.log(4 !== "4")      // true


// console.log(null == undefined)      // true
// console.log(null === undefined)     // false

// Note: null and undefined have different data types.
// That's why strict equality (===) returns false,
// even though loose equality (==) returns true.


// Special Cases : 

// null and undefined are considered equal in loose comparison
console.log(null == undefined);     // true

// NaN is never equal to anything, not even itself
console.log(NaN == NaN);            // false

// 0 is a falsy value, so it equals false in loose comparison
console.log(0 == false);            // true

// Empty string "" is also falsy, so it's loosely equal to false
console.log("" == false);           // true

// An empty array [] is coerced to "", which is falsy → equals false
console.log([] == false);           // true

// [] becomes an empty string when coerced → "" == "" → true
console.log([] == "");              // true

// [1] becomes "1" as a string, which is then coerced to number → 1 == 1 → true
console.log([1] == 1);              // true
