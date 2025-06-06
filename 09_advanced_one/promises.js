// Create Promise One

const promiseOne = new Promise(function(resolve, reject){
     let success = true;
     if(success){
         resolve("Operation was successful.");
     }else{
         reject("Operation Failed");
     }
});

// Consuming Promise One

promiseOne.then(function(result){
     console.log("Inside Task One - Success : ", result);
}).catch(function(error){
     console.log("Inside Task One - Error : ", error);
});

// Create Promise Two
const promiseTwo = new Promise(function(resolve, reject){
       let success = true;
       if(success){
           resolve("Sent Message successfully!")
       }else{
          reject("Something went wrong!")
       }
});

// Consume Promise Two

promiseTwo.then(function(result){
     console.log("Inside Task Two - Success: ", result);
}).catch(function(error){
     console.log("Inside Task Two - Error: ", error);
}).finally(function(){
     console.log("Inside Task Two - Either Operation Resolved or Rejected.")
});

// Create Promise Three
const promiseThree = new Promise(function(resolve, reject){
      let success = false;
      if(success){
         resolve({username:"James", email:"james@mail.com", age:45});
      }else{
        reject("Something went wrong!")
      }
});

// Consuming Promise Three
promiseThree.then(function(result){
    //  console.log("Inside Task Three - Result :", result);

    // Thenable Chaining
     return result.username;
}).then(function(username){
     console.log("Task Three 2nd Then - Result : ", username);
})
.catch(function(error){
     console.log("Inside Task Three - Error: ", error);
     
})

// Direct Consuming Promise 

new Promise(function(resolve, reject){
      let success = true;
      if(success){
        resolve({username:"ramesh", age:23, email:"ramesh.gour@mail.com"});
      }else{
        reject("Data Failed to Fetch !");
      }
}).then(function(response){
      console.log("Inside Direct Promise - Response: ",response);
}).catch(function(error){
     cosole.log("Inside Direct Promise - Error :", error);
}).finally(function(){
     console.log("Inside Direct Promise - Either Resolved or Rejected")
})


// use async and await 

// async function fetchData(){
//        try {
//          const response = await promiseThree;
//          console.log("Inside Async Task 01 - Response :",response);
//        } catch (error) {
//          console.log("Inside Async Task 01 - Error :", error)
//        }
// }

// fetchData();


// Fetch Api Calls 

async function getAllUsers(){
         try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/");
            const data = await response.json();
            console.log("Data :", data);

          //   console.log(typeof response)
         } catch (error) {
            console.log("Error: ", error)
         }
}

getAllUsers();

// ---- using then() and catch() ----

fetch("https://jsonplaceholder.typicode.com/users/")
.then((response)=>{
     return response.json();
})
.then((data)=>{
      console.log("Inside Direct Fetch APIs(using Thenable and Catch) - Data : ",data);
})
.catch((error)=>{
      console.log("Inside Direct Fetch APIs(using Thenable and Catch) - Error :", error);
})
.finally(()=> console.log("Inside Direct Fetch APIs(using Thenable and Catch) - Either Resolved or Rejected !"))