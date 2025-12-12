// console.dir(document);
// console.log(document.body.children);
// console.log(document.body.childNodes);
// document.body.style.backgroundColor = "red";
// alert("hello class")
// console.dir(document.body.children[0].textContent);
// let test = (document.body.children[0].textContent = "Test");

// DOM manipulation: introduction

// Manipulating DOM involves:

// 1.Finding/selecting the element we want to work with
// 2.Altering the text or attributes of that element
// 3.Event listening

//  DOM manipulation: selecting elements

// 1. getElementById() method
// const test1 = document.getElementById("one")
// console.log(test1)

// // 2. querySelector() method
// const test2 = document.querySelector("#tech h1");
// console.log(test2);

//Multiple

// 3. getElementsByClassName() method
const test2 = document.getElementsByClassName("red");
console.log(test2);

// 4. getElementsByTagName() method
const test3 = document.getElementsByTagName("div");
console.log(test3);

// 5. querySelectorAll() method
const test4 = document.querySelectorAll(".red");
console.log(test4);
