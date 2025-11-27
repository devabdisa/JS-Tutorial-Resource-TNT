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

var person2 = {
  firstName: "James",
  lastName: "Bond",
  address: {
    city: "London",
    country: "UK",
  },
};
console.log(person2.address.city);
