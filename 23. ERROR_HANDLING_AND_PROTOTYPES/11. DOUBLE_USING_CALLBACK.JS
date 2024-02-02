/*Double using callback.

Write a function that takes in an array of integers and a callback function, and returns a new array where each
element is doubled using the callback. */

const array = [1, 2, 3, 4, 5];

function doubleArray(array, callBack) {
  const doubledArray = array.map((num) => {
    return callBack(num);
  });
  return doubledArray;
}

function callBack(num){
  return num * 2;
}

console.log(doubleArray(array,callBack));