// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoogedIn = false
const outsideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 34567890987654n


// reference (non-primitive)

// Array, Objects, Functions

const heros = ["hulk", "thor"]
let myObj = {
    name:"mandeep",
    age: 21
}

const myfunction = function () {
    console.log("hello world");
}


console.log(typeof bigNumber);
