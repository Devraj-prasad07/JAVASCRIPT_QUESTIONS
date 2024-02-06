/* Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
them values and log their values to the console before and after they are declared to demonstrate variable
hoisting. */

{

  console.log(addNumbers);   // Cannot access 'addNumbers' before initialization.
  console.log(subtractNumbers);  // Cannot access 'subtractNumbers' before initialization.
  console.log(multiplyNumbers);   // undefined

  let addNumbers = 1 + 2;
  const subtractNumbers = 2 - 1;
  var multiplyNumbers = 2 * 3;

  console.log(addNumbers);     // 3
  console.log(subtractNumbers);   // 1
  console.log(multiplyNumbers);   // 6
  
}
