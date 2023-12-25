/*Check for Divisibility.
Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2.
Use a for loop and continue statement. */

function Divisibility(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      console.log(array[i]);
    } else if (array[i] % 2 === 0) {
      continue;
    }
  }
}

let array = [23, 44, 56, 78, 45, 67, 98,15,30];
Divisibility(array);

