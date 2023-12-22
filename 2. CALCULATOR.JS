/*  Calculator
 Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
 to perform the operation on the two numbers.
 The calculator function should"
 1. Take in two numbers, num1 and num2, and a string representing a mathematical operator
 2. Use a switch statement to determine which operation to perform based on the value of the operator
 3. If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
 operation and store the result in a variable called result.
 4. If the operator is not one of the valid operators, log "Invalid operator" to the console */


 function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero");
                return;
            }
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(`Result: ${result}`);
}

calculator(5, 3, '+');
calculator(10, 4, '*');
calculator(8, 2, '/');
calculator(6, 0, '/');
calculator(4, 7, '%');