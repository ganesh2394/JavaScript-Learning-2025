/* 
Type Conversion : 
In JavaScript, type conversion refers to changing one data type to another — either automatically (type coercion) or manually (type casting).
 */

// Number Conversion
let str = "123";
let number_string = Number(str);

// console.log(number_string);             // 123
// console.log(typeof number_string);      // number

let str_num = "123abc";
let numberString = Number(str_num);

// console.log(numberString);              // NaN
// console.log(typeof numberString);       // number


let bool_num = true;
let number_bool = Number(bool_num);

// console.log(number_bool);           // true : 1; false : 0
// console.log(typeof number_bool)     // number

let value = null;
let number_null = Number(value);

// console.log(number_null);           // 0
// console.log(typeof number_null)     // number


let unknown;
let number_unknown = Number(unknown);

// console.log(number_unknown);            // NaN
// console.log(typeof number_unknown);     // number

/*
Conclusion :-
Other -> Number 
"123" => 123
"123abc" => NaN
true => 1; false => 0
undefined => NaN
null => 0
*/

// String Conversion

let n1 = 123;
let string_n1 = String(n1);

// console.log(string_n1);             // 123
// console.log(typeof string_n1);      // string


let string_boolean = String(true);

// console.log(string_boolean);            // true || false
// console.log(typeof string_boolean);     // string

let string_null = String(null);

// console.log(string_null);               // null
// console.log(typeof string_null);        // string


let string_unknown = String(undefined);

// console.log(string_unknown);            // undefined
// console.log(typeof string_unknown);     // string

/*
Conclusion : 
Other ->  String
123 => "123"
true => true; false => false;
null => null
undefined => undefined
*/

// Boolean Conversion

// console.log(Boolean(123));          // true
// console.log(Boolean(""))            // false
// console.log(Boolean("ganesh"));     // true
// console.log(Boolean(null))          // false
// console.log(Boolean(undefined))     // false

/* 
Conclusion : 
Other -> Boolean
123 => true
"" => false
"ganesh" => true
null => false
undefined => false
*/

//  Implicit Conversion : Other Conversion

// console.log( typeof("123" + 234));     // string : 123234
// console.log(typeof("5" - 3));          // number : 2
// console.log(typeof(true + 2))          // number : 3
// console.log(typeof(123 + null));       // number : 123
// console.log(undefined + 234);          // NaN

// console.log(typeof("123" + true))      // string : 123true
// console.log(typeof("43" + null));       // string : 43null 
// console.log(typeof("54"+ undefined));    // string : 54undefined
