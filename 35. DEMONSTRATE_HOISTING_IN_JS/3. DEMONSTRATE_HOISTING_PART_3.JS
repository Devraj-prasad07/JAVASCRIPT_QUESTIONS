/* Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside
the function using the var keyword and log its value to the console before it is assigned a value to
demonstrate variable hoisting. */

function addNumbers(sum1,sum2){
    console.log(sum);     // UNDEFINED DUE TO HOISTING
    var sum = sum1 + sum2; 
    return sum;
}

console.log(addNumbers(5,5));   // 10