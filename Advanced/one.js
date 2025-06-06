/** Promise in JS :
The Promise() constructor creates Promise objects. It is primarily used to wrap callback-based APIs that do not 
already support promises. */

/** 
 * Syntax :-
 * new Promise(executer)
 * 
 * --- executor ----
A function to be executed by the constructor. It receives two functions as parameters: resolveFunc and rejectFunc. 
Any errors thrown in the executor will cause the promise to be rejected, and the return value will be neglected.
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Task successfully completed.");
  }, 1000);
});

promise1.then((value) => {
  console.log(value);
});

console.log(promise1);
/** Output : 
Promise { <pending> }
Task successfully completed. */
