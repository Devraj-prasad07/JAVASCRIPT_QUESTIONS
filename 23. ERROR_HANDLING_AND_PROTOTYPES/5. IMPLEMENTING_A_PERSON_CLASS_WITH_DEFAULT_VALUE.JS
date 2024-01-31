/*Create a class called Person with two properties: name and age. The class should have a method called
getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
constructor to set the values of name and age to "Unknown" and 0 if they are not provided. */

class person{
    constructor(name = "Unknown", age = 0){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `Name : ${this.name}, Age : ${this.age}`
    }
}

const personDetails = new person("Devraj", 22);
console.log(personDetails.getDetails());             // Output = Name : Devraj , Age : 22

// const personDetails = new person("Devraj");
// console.log(personDetails.getDetails());           // Output = Name : Devraj, Age : 0

// const personDetails = new person();
// console.log(personDetails.getDetails());            // Output = Name : Unknown, Age : 0
