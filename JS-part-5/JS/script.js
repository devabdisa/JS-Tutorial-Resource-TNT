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
// const test2 = document.getElementsByClassName("red");
// console.log(test2);

// // 4. getElementsByTagName() method
// const test3 = document.getElementsByTagName("div");
// console.log(test3);

// // 5. querySelectorAll() method
// const test4 = document.querySelectorAll(".red");
// console.log(test4);



//  Selecting elements (HTML collection vs NodeList)
// Selecting multiple elements and changing properties by one instruction

// Use for loop to apply same property for multiple elements

// HTML collection vs NodeList

// HTML collection
// It is always live means when there is a change in the document, it will be automatically updated to reflect the change.

// Selectors that return HTML collection:

// getElementsByClassName()

// getElementsByTagName()

// Returns DOM element (i.e., only things that has opening tag and closing tag inside)

// The returned list is live

// NodeList
// Selectors that return NodeList:

// querySelectorAll()

// Returns DOM node (i.e., everything inside the selected element)

// The returned list is static


//   HTMLCollection vs NodeList

// const items = document.getElementsByClassName("red");
// console.log(items)


// const items = document.querySelectorAll(".red");
// console.log(items)


// for (let i = 0; i < items.length; i++) {
//     items[i].className = "yellow";
// }