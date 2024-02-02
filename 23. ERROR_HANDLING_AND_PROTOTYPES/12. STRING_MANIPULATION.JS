/*Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. Thefunction should return a callback function “logString” that logs the sentence 
“The manipulated string is: “ along with the manipulated string or the new string to the console. */


function manipulateString(inputstring,callBack){
const stringConversion = inputstring.toUpperCase();
return callBack(stringConversion);
};

function logString(manipulateString){
console.log(`The manipulated string is: ${manipulateString}`);
}

manipulateString("hello world",logString);