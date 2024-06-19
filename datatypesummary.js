// # primitive

// 7 types : call by value
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false
const outsideTemp = null;;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);
const bigNumber = 234567898797822222224564645646464455464n;

// # non primitive : refernce
// JavaScript is a dynamically typed language. 
// This means that variable types are determined at runtime, 
// and you do not need to explicitly declare the type of a variable before using it. 
// You can assign different types of values to a variable during its lifetime.
// Array
// Objects
// Functions
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function object
//        Object  =>  object

const heros = ["shaktiman", "naagraj","doga"];
let myObj ={
    name: "Vinuuuu",
    age:23,
}

const myFunction = function(){
    console.log("Hellu");
}
myFunction();
console.log(typeof bigNumber);