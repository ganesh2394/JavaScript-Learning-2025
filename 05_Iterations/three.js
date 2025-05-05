/* 
=========== .filter() – Filtering Out Items ============
- Creates a new array
- Keeps only the elements where the condition is true

*/

let numbers = [1, 2, 3, 4, 5, 6, 7];

let oddNumbers = numbers.filter((num)=> num % 2 != 0);

// console.log(oddNumbers);

/*
============ .map() – Transforming Every Element ===========
- Creates a new array
- Applies a function to every element
- Returns the transformed value

*/

let newNumbers = numbers.map((num)=>num+1);
// console.log(numbers);
// console.log(newNumbers);

// Expected Output : 
// [1, 2, 3, 4, 5, 6, 7]
// [1, 2, 3, 4, 5, 6, 7]

/*
============= .reduce() – Reducing to a Single Value ========
- Applies a function on each item, accumulating a result
- Returns a single output (sum, product, string, object, etc.)


Syntax : 

array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);

o accumulator: stores the result of the previous computation
o currentValue: current element being processed
o initialValue: (optional) starting value of accumulator

*/

const expenses = [1000, 2500, 300, 400];

// Calculate total expense

const total = expenses.reduce((acc, value)=> acc + value, 0);
// console.log(total);

// Expected Output : 4200


// Total Price in Cart

const cart = [
    { product: "Laptop", price: 50000 },
    { product: "Mouse", price: 1500 },
    { product: "Keyboard", price: 3000 }
  ];
  
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);
  console.log(cartTotal); // Output: 54500
  