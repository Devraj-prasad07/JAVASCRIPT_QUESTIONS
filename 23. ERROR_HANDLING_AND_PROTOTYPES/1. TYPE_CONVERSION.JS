/* Write a function called convertToNumber that takes a string as an argument and returns the equivalent
number. If the string cannot be converted to a number, the function should return the string "Invalid number".
Use error handling in javascript to achieve this output.*/

function convertToNumber(ans) {
    try {
      const number = Number(ans);
      if (!isNaN(number)) {
        console.log("Valid number:", number);
      } else {
        console.log("Invalid number");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  convertToNumber(123);
  convertToNumber("devraj");
  
