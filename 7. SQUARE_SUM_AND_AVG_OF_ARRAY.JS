/* Square and sum the array elements using the arrow function and then find the
average of the array. */

let arr = [1,2,3,4,5];

const square = arr.map((num) => num * num);
console.log(`The square of the arr is : ${square}`);

const sum = square.reduce((a,b) => a + b);
console.log(`The sum of the arr is : ${sum}`);

const avg = sum / arr.length;
console.log(`The avg of the arr is : ${avg}`);