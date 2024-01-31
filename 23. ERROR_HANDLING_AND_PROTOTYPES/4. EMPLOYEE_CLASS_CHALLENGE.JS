/*Create a class called Employee with three properties: name, position, and salary. The class should have a
method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
call the getSalary method. */

class employee{

    constructor(name,position,salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
   
    getName(){
        return `The Name of the employee is ${this.name}`
    }

    getPosition(){
        return `The Position of the employee is ${this.position}`
    }

    getSalary(){
        return `The Current Salary is ${this.salary} `
    }

}

const empDetails = new employee("Devraj prasad","SDE 2", "12 LPA");

console.log(empDetails.getName());
console.log(empDetails.getPosition());
console.log(empDetails.getSalary());