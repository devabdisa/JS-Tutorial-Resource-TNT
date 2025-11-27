//  Decisions & loops (for loop)

// - What are Loops in JS

// Loops are control structures that allow a program to execute a block of code repeatedly based on a condition.

// Loops offer a quick and easy way to do something repeatedly.

// Loops are used for iterating over a collection of items or executing a set of instructions multiple times.

// If a condition evaluates to true, the loop’s statement is executed.

// When the condition evaluates to false, the loop stops.

// Types of Loops in JS

// for
// for/in
// for/of
// while
// do/while

// JS for loop

// loops through a block of code a number of times

// - for loop Syntax

// text

// for (initialization; condition; update) {
//         // statements (code block to be executed)
// }

// - initialization

// Executed (one time) before the execution of the code block.

// Used to initialize a variable

// - condition

// Defines the condition for executing the code block.

// The code inside the for loop is executed as long as this condition is true.

// - post/final-expression

// Executed (every time) after the code block has been executed.

// Updates the variable we initialized

// Examples of Decision Loops (For Loop)

// A. Simple counter Loop
// 0 - 2
// for (let i = 0; i <= 2; i++) {
//   console.log(i);
// }

// Analogy #1: Counting Down to New Year
// ****************************
// Analogy: Think of a countdown timer for New Year's Eve, where you want to count down the last ten seconds before midnight.

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// console.log("Happy new Year 💥🎇");

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// console.log("Happy New Year 🎇");

// B. Iterate over array elements

// Log elements of an array without using for Loop
// let numbers = [1, 2, 3, 4, 5]

// console.log(numbers[0])
// console.log(numbers[1])
// numbers.length

// console.log(numbers.length);

// using for Loop
// for(let i =0;i < numbers.length;i++){
//     console.log(numbers[i]);
// }

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// let i = 0;
// while (i < 3) {
//   console.log(i); // prints 0, 1, 2
//   i++;
// }




// break statement
// used to exit a loop immediately, regardless of the loop's condition.



// continue statement
// skips the current iteration and moves to the next iteration of the loop.









// C. Break and continue

// Break

// Find number 10 from arrays of numbers

// let numbers = [1, 3, 6, 10, 12];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] == 10) {
//     console.log(numbers[i]);
//     break;
//   }
// }



// Continue
// Log every elements of an array except number 10

// let numbers = [1, 3, 6, 10, 12,15,7,21];

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] == 10){
//         continue;
//     }
//     console.log(numbers[i]);
// }



