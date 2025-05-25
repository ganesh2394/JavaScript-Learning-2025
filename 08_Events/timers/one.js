// console.log("FIRST TASK");

// setTimeout(()=>{
//      console.log("Wait for a second")
// }, 1000)

// console.log("THIRD TASK");


console.log("Start");

setTimeout(function(){
     console.log("Time Out")
}, 1000);

Promise.resolve().then(function () {
     console.log("Promise")
})
console.log("End");



