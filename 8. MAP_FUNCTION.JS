/* Create a new array using the map function whose each element is equal to the
original element plus 5. */

let newArr = [1,2,3,4,5];

let result = newArr.map((el) => {
 return el + 5
});
console.log(newArr);
console.log(result);