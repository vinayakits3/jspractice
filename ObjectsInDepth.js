//singleton

//object literals
// Object.create
const mySym =Symbol("key1")
const JsUser = {
    name:"Vinayak",
    age:"23",
    "fullname": "Vinayak Verma",
    // [mySym],

    [mySym] : 'key1',
    location: "jaifur",
    email:"vinayakits30@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday", "Saturday"]
}

// myArray = ["V","i"]

// console.log(JsUser.email)
// // console.log(JsUser[email])
// // console.log(JsUser["email"])
// console.log(JsUser["fullname"])
// console.log(JsUser.mySym);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "vinayak20130@gmail.com",
console.log(`the email is ${JsUser.email}`);
// Object.freeze(JsUser);
JsUser.email = "veryak30@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user")
}
JsUser.justgreeting2 = function (params) {
    console.log(`Hello jiii, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.justgreeting2());