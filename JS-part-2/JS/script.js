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

function greet(name) {
  console.log("hello " + name);
  //template literal
  console.log(`Hello ${name}`);
}

//Argument

greet("bob");

function dif(a, b) {
  console.log(a, b + "c");
}

dif(4, 6);




