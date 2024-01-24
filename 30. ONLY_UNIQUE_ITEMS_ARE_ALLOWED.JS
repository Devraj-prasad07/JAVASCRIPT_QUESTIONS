/* Only unique items are allowed.

You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You have to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.*/

let arrOfNumbers = [1,2,3,4,5,6,7,3,2,1,4,5,6,7,8,9,10,12,13,15,16,19,16,17,18,20,13];

function removeDuplicates(arrOfNumbers){
   const set = new Set(arrOfNumbers);
   return set;
}

console.log(removeDuplicates(arrOfNumbers));