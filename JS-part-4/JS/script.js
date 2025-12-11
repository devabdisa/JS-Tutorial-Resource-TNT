// The object oriented data model

// - What is Data model

// Refers to the way data is structured, organized, and manipulated within a software system.

// - What is Object Oriented Data Model?

// Data is represented and structured as an object.

// Is a way of modeling real world objects as a software objects.

// - Objects - are the things we are trying to define to the computer.

// - Sometimes OOP refered as class based programming
// - Classes - are a template for creating objects.

// - Core components of objects

// Attribute or Properties - are characteristics of the thing we are describing.
// Method/function(action) - are actions that can be performed on objects.

// The object oriented data model

// - Analogy: A Car

// 1. Attributes (Properties):

// Color: The color of the car (e.g., red, blue).

// Make: The manufacturer of the car (e.g., Toyota, Ford).

// Model: The specific model of the car (e.g., Camry, F-150).

// Year: The year the car was made (e.g., 2020).

// 2. Methods (Actions):

// Start Engine: A function that starts the car's engine.

// Drive: A function that allows the car to move forward.

// Stop: A function that stops the car.

// - The car represents an object. It has specific attributes(properties) that describe it and methods that define what it can do.

// - Definition of object-oriented programming (OOP)

// OOP is a programming paradigm that relies on the concept of objects.

// OOP is an approach to problem solving where all computations are carried out using objects.

// - Object in JavaScript

// An object is a non-primitive, structured data type in JavaScript.

// A JavaScript object is a collection of properties and methods, defined as a key-value pair.

// Each property has a key and a value.

// - How to create objects in JavaScript

// Creating object using object literal: using a simple key-value pair structure

// - Example:
// key:value,

// let person = {
//   firstName: "John",
//   lastName: "Alice",
//   address:

//   someFunction: () => {
//     return this.firstName;
//   },
// };

// let car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   startEngine: function () {
//     console.log("Engine started");
//   },
// };

// console.log(car);
// console.log(car.year)
// console.log(person.someFunction());
// console.log(person["firstName"]);

// var person2 = {
//   firstName: "James",
//   lastName: "Bond",
//   address: {
//     city: "London",
//     country: "UK",
//   },
// };
// console.log(person2);

// 6.3 - JavaScript object constructors

// What is a constructor function?

// Is a function that initializes/creates an object.

// Is a template or a blueprint for creating many objects of the same "type".

// Instantiation is the process of creating an instance (or object) from a constructor function in object-oriented programming.

// Rules or good practices creating a constructor function

// Name constructor functions with an upper-case first letter.

// How to create object instance from a constructor function

// Use the keyword "new" followed by the name of the constructor function to create Objects of the same type.

// "this" value/keyword

// Inside the constructor, "this" refers to the new object being created.

// class Student {
//   constructor(name, email) {
//     (this.name = name),
//       (this.email = email),
//       (this.getName = function () {
//         return this.name;
//       });
//   }
// }

// let student1 = new Student("James", "test@test.com");
// let student2 = new Student("", "abebe@test.com");
// let student3 = new Student("", "kebede@test.com");
// console.log(student1);
// console.log(student2);
// console.log(student3);


// Most common built-in JavaScript Objects:

// String(),
// Array(),
// Math(),
// Date(),
// Object(),
// JSON(),



// 1. Length
// const str = "Hello";
// console.log(str.length); // Outputs: 5

// 2. toUpperCase()
// const str = "Hello";
// console.log(str.toUpperCase());


// 3. toLowerCase()
// const str = "HELLO";
// console.log(str.toLowerCase());


// 4. charAt(index)
// const str = "JavaScript";
// console.log(str.charAt(3)); // Outputs: "c"

// 5. substring(start, end)
// const str = "Hello, world!";
// console.log(str.substring(0, 6)); // Outputs: "Hello"

// 6. indexOf(searchValue)
// const str = "Hello, world!";
// console.log(str.indexOf(""));

// 8. split(separator)
// const str = "Apple,banana";
// const fruits = str.split(",");
// console.log(fruits);

// 9. slice(startIndex, endIndex)
// const str = "Hello, world!";
// console.log(str.slice(0, 5)); // Outputs: "Hello"
// console.log(str.slice(-2)); // Outputs: "world!"


// let sentence = "  JavaScript is awesome!  ";

// console.log(sentence.length);            // 24 (including spaces)
// console.log(sentence.trim());            // "JavaScript is awesome!"
// console.log(sentence.toUpperCase());    // "  JAVASCRIPT IS AWESOME!  "
// console.log(sentence.indexOf("is"));    // 12
// console.log(sentence.includes("some"));  // false
// console.log(sentence.slice(2, 12));      // "JavaScript"
// console.log(sentence.replace("awesome", "fantastic"));  // "  JavaScript is fantastic!  "
// console.log(sentence.split(" "));       // Splits into words and empty strings due to spaces
// console.log(sentence.charAt(5));        // "S"



// Mostly used built-in JavaScript object (array object)  


// 1. push()  
// const arr = [1, 2, 3];  
// arr.push(4); // Adds 4 to the end  
// console.log(arr); // Outputs: [1, 2, 3, 4]  

// 2. pop()  
// const arr = [1, 2, 3];  
// const LastElement = arr.pop(); // Removes 3  
// console.log(LastElement); // Outputs: 3  
// console.log(arr); // Outputs: [1, 2]


// 3. shift()
// const arr = [1, 2, 3];
// const firstElement = arr.shift();
// console.log(firstElement); //
// console.log(arr); // Outputs: [2, 3]

// 4. unshift()
// const arr = [2, 3];
// arr.unshift(5); // Adds 1 to the beginning
// console.log(arr); // Outputs: [1, 2, 3]






// 7. indexOf()
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(3)); // Outputs: 2

// 8. includes()
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(3)); // Outputs: true



// 9. forEach()
// Executes a function for each element in the array (like a for loop).
//  Best for:
// When you want to do something for each item, but don’t want to return a new array.

// let fruits = ['apple', 'banana', 'mango'];

// fruits.forEach(function(x) {
//   console.log('I like ' + x);
// });

// const arr = [1, 2, 3, 4, 5];
// arr.forEach(x => console.log(x)); // Outputs: 1 2 3 4 5

// find()
// 🔹 What it does:
// Returns the first element that matches a condition.
// 🔹 Best for:
// When you're searching for just one matching item.
// let numbers = [5, 10, 15, 20];

// let result = numbers.find(function(num) {
//   return num >= 10;
// });

// console.log(result); // 15



// 10. filter()
// const numbers = [1, 2, 3, 4, 5];
// // Filter numbers greater than 3
// const filtered = numbers.filter(num => num > 3);
// console.log(filtered); // Outputs: [4, 5]

// // 11. map()
// const numbers = [4, 2, 6];
// const doubled = numbers.map((num) => num / 2);
// console.log(doubled); // Outputs: [2, 4, 6]



//  Mostly used built-in JavaScript object (Math object)


// 1. Math.ceil(x)
// Rounds a number UP to the nearest integer.
// console.log(Math.ceil(4.2)); // Outputs: 5

// 2. Math.floor(x)
// Rounds a number DOWN to the nearest integer.
// console.log(Math.floor(4.7)); // Outputs: 4

// 3. Math.round(x)
// Rounds a number to the nearest integer.
// console.log(Math.round(4.4)); // Outputs: 5

// 4. Math.random()
// Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random());
// Outputs a random number between 0 and 1
