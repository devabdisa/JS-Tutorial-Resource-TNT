// // alert('hello world')
// // How do we define/declare a function in JS

// // Function Declaration
// function greet() {
//   console.log("Hello");
// }

// // const greet = function(){
// //     console.log("hello")
// // }

// // Function Expression
// const greet2 = function () {
//   console.log("Hello from exp");
// };

// // Invoking/Calling a function
// greet();
// greet2();

// function greet(name) {
//   console.log("hello " + name);
//   //template literal
//   console.log(`Hello ${name}`);
// }

// //Argument

// greet("bob");

// function dif(a, b) {
//   console.log(a, b + "c");
// }

// dif(4, 6);

// Functions That Return a Value

// function greet(name) {
//   return name;
// }

// let namevar = greet("Abebe");

// console.log(namevar);

// function adder(num1, num2) {
//   console.log("hello");
//   return num1 + num2;
// }

// // console.log(adder(4, 6));

// function average(num1, num2) {
//   let sum = adder(num1, num2);
//   console.log("hello from avg");

//   return sum / 2;
// }

// let avg = average(4, 6);
// console.log(avg);

// Variable Scoping

{
}
// 1.Global Scope
// A variable declared outside any function or block has global scope
// It can be accessed anywhere in the program
// Can be declared using var, let, or const

// 2.Function Scope
// Variables declared inside a function are only accessible within that function
// They cannot be accessed outside the function
// Can be declared using var, let, or const

// 3.Block Scope
// Introduced with let and const in ES6
// Variables declared inside {} (like loops or conditionals) cannot be accessed outside the block
// Can be declared using let or const (not var)

// Key Differences:
// var is function-scoped but not block-scoped
// let and const are both function-scoped AND block-scoped

// //Global scope
// let globalVar = "I am global";

// function showGlobal() {
//   console.log(globalVar); // Accessible inside the function
// }

// showGlobal(); // Output: I am global
// console.log(globalVar); // Output: I am global (Accessible outside too)

//function scope
// function showLocal() {
//   let localVar = "I am local";
//   console.log(localVar); // Works inside the function
// }

// showLocal(); // Output: I am local
// // console.log(localVar); // Error! localVar is not defined outside the function

//Block scope

// let blockVar = "I am block-scoped";
// console.log(blockVar); // Works inside the block

// console.log(blockVar); // Error! blockVar is not accessible outside
