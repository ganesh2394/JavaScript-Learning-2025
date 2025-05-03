/*
 JavaScript has only one number type, which is floating-point (64-bit).
*/

let age = 25;              // Integer
let price = 99.99;         // Floating-point
let negative = -10;        // Negative number

// console.table([age, price, negative]);

/* 
Special Values : 

Infinity-Greater than any number
-Infinity-Less than any number
NaN-Not a Number
*/


/* 
---------------------------- Number Methods -------------------------
*/

let num = 123.456;

// Convert number to a string
console.log(num.toString());         // "123.456"

// Round to 2 decimal places
console.log(num.toFixed(2));         // "123.46" (returns a string)

// Get exponential representation
console.log(num.toExponential(2));   // "1.23e+2"

// Parse integer from string
console.log(parseInt("42px"));       // 42

// Parse float from string
console.log(parseFloat("3.14abc"));  // 3.14

// Convert string to number
console.log(Number("123"));          // 123

// Check if value is NaN (Not a Number)
console.log(isNaN("hello"));         // true

// Check if number is integer
console.log(Number.isInteger(10));   // true
console.log(Number.isInteger(10.5)); // false


/* 
---------------------------- Math Object Methods -------------------------
*/

// Math Constants

console.log(Math.PI)               // 3.14159... (Ratio of circle's circumference to diameter)
console.log(Math.E)                // 2.718... (Euler's number, base of natural logarithms)
console.log(Math.SQRT2)            // √2 ≈ 1.414
console.log(Math.SQRT1_2)          // √½ ≈ 0.707
console.log(Math.LN2)              // Natural log of 2
console.log(Math.LN10)             // Natural log of 10
console.log(Math.LOG2E)            // Log base 2 of E
console.log(Math.LOG10E)           // Log base 10 of E


// Rounding Methods

console.log(Math.round(4.6))       // 5 → Rounds to nearest integer
console.log(Math.floor(4.9))       // 4 → Always rounds **down**
console.log(Math.ceil(4.1))        // 5 → Always rounds **up**
console.log(Math.trunc(4.9))       // 4 → Removes decimal, returns integer part

// Arithmetic Methods

console.log(Math.abs(-5))          // 5 → Absolute value
console.log(Math.max(1, 5, 10))    // 10 → Largest value
console.log(Math.min(1, 5, 10))    // 1 → Smallest value
console.log(Math.pow(2, 3))        // 8 → 2 raised to power 3
console.log(Math.sqrt(16))         // 4 → Square root
console.log(Math.cbrt(27))         // 3 → Cube root

// Trigonometric Methods

console.log(Math.sin(Math.PI / 2)) // 1 → Sine of 90°
console.log(Math.cos(0))           // 1 → Cosine of 0°
console.log(Math.tan(Math.PI / 4)) // 1 → Tangent of 45°
console.log(Math.asin(1))          // π/2 → Arcsine
console.log(Math.acos(1))          // 0 → Arccosine
console.log(Math.atan(1))          // π/4 → Arctangent
console.log(Math.atan2(1, 1))      // π/4 → Angle from x-axis


// Logarithmic & Exponential Methods

console.log(Math.log(1))           // 0 → Natural log (base e)
console.log(Math.log10(100))       // 2 → Base-10 logarithm
console.log(Math.log2(8))          // 3 → Base-2 logarithm
console.log(Math.exp(1))           // 2.718 → Euler’s number to the power of 1


// Random Number

console.log(Math.random())         // Random float between 0 and 1 (excluding 1)

console.log(Math.floor(Math.random()*10));          // Random number between 0 to 10 (excluding 10)      


// Custom: Random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//   console.log(getRandomInt(1, 100));  // Example: 57