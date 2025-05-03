/*
Date object is used to work with date and time. It provides methods to get, set, and manipulate dates and times.
*/

let date = new Date();  // Current date and time

// console.log(date.toString());   // Sat May 03 2025 06:31:37 GMT+0000 (Coordinated Universal Time)

// Getting Date and Time Components

let today = new Date();

// console.log(today.getFullYear());     // 2025
// console.log(today.getMonth());        // 0-11 (January = 0)
// console.log(today.getDate());         // Day of month: 1-31
// console.log(today.getDay());          // Day of week: 0 (Sun) to 6 (Sat)

// console.log(today.getHours());        // 0-23
// console.log(today.getMinutes());      // 0-59
// console.log(today.getSeconds());      // 0-59
// console.log(today.getMilliseconds()); // 0-999

// Setting Date and Time Components

// today.setFullYear(2026);
// today.setMonth(11);         // December
// today.setDate(25);          // Day
// today.setHours(10);
// today.setMinutes(30);


// Other Useful Date Methods

let timestamp = Date.now();              // Current time in milliseconds since Jan 1, 1970
// console.log(new Date(timestamp));        // Convert timestamp to Date

// console.log(today.toString());           // Full string format
// console.log(today.toDateString());       // Date part only
// console.log(today.toTimeString());       // Time part only
// console.log(today.toISOString());        // ISO format (for APIs)
// console.log(today.toLocaleString());     // Localized date & time


// Compare Dates

let d1 = new Date('2024-01-01');
let d2 = new Date('2025-01-01');

// console.log(d1 < d2);                    // true
// console.log(d1.getTime() === d2.getTime()); // false

// Notes : 
// Months are 0-indexed (January = 0, December = 11).
// Date.now() gives current time in milliseconds.
// Use .toISOString() or .toLocaleString() for readable output.
// Always compare dates using .getTime() or operators like <, >.
