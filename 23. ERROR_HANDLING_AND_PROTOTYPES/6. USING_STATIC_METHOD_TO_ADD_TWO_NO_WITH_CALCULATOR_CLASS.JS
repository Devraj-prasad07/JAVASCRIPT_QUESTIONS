/*Create a class called Calculator with a static method called add. The add method should take two numbers as
arguments and return their sum. Instantiate the Calculator class and call the add method. */

class Calculator{
    static add(a,b){
    return a + b;
    }
}

const calcualte = Calculator.add(2,4);
console.log(calcualte);