/*
=========== What is Chaining? ===========

Chaining means calling multiple methods one after another on the same array (or object), where each method returns 
something that the next method can use.

Example :-

We have a list of products. Each product has a name and a price.
We want to:
1. Filter only products above ₹500
2. Add 18% GST to those prices
3. Get the final total of these updated prices

*/

const products = [
    { name: "Headphones", price: 1500 },
    { name: "USB Cable", price: 300 },
    { name: "Monitor", price: 7000 },
    { name: "Mouse", price: 450 }
];

const totalGSTPrice = products
  .filter(product => product.price > 500)          // Step 1: Only products > 500
  .map(product => product.price * 1.18)            // Step 2: Add 18% GST
  .reduce((acc, price) => acc + price, 0);         // Step 3: Sum all

console.log("Total with GST:", totalGSTPrice.toFixed(2));
// Expected Output : Total with GST: 10030.00



