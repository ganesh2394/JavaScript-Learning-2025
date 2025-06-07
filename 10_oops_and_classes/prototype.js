const Manager = {
     name : "Harish Chouhan",
     email : "harish.chouhan.manager@company.com",
     address : "Ashok Nagar, New Delhi",
}

const Employee1 = {
      username : "Rohan Sharma",
      age : 23,
      address : {
         city : "Indore",
         zip : 47263,
         state : "Madhya Pradesh"
      },
      isEmployee : true,
}

const User = {
     username : "Tanishq Dubey",
     age : 28,
     email : "tanishq.dubey@example.com",
}

Employee1.__proto__ = Manager;

// console.log(Employee1);
// console.log(Employee1.name)

// console.log(User.name);
// console.log(User.email);

Employee1.sayHello  = function(){
     console.log(`Hey ! My name is ${this.username}`);
}

// Note : Only constructor functions or classes have a .prototype property.

// Employee1.sayHello();

// ---------- Class works -------------

const myName = "Harish     ";

// TODO: Return the Actual lenght of the string (all) excluding the extra space.
// console.log(myName.trim().length);   --> iska use nahi karna hai.

// console.log(typeof String)  // function

String.prototype.trueLength = function(){
     console.log(this);
     console.log(`The Actual lenght is ${this.trim().length}`)
}

// myName.trueLength();
// "suresh".trueLength();
// "naman".trueLength();


/** Summary :

| Term        | Used with             | Purpose                                                    |
| ----------- | --------------------- | ---------------------------------------------------------- |
| `__proto__` | Any object            | Points to the prototype object it inherits from            |
| `prototype` | Constructor functions | Defines the prototype for all instances created with `new` |


 */