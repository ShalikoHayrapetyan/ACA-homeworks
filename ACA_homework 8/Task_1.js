/*
1.Create an Employee class. Employee should have: id, firstName, lastName, position,
salary, workingHours.
It should have setters and getters for appropriate fields.
It should have a method: getFullName().
It should have a method: getAnnularSalary() which should be the total salary of the
employee within a year.
It should have a method: raiseSalary(percent), which increases the salary by the given
percent and returns new salary.
*/ 

class Employee {
    constructor(id, firstName, lastName, position, salary, workingHours) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
        this.workingHours = workingHours;
    }

    get getEmployee() {
        return `I am ${this.getFullName()} , my position is ${this.position} , I work ${this.workingHours} hours in day , my salary is ${this.salary} dollar  `
    }
    set setEmployee(obj) {
        this.id = obj.id;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.position = obj.position;
        this.salary = obj.salary;
        this.workingHours = obj.workingHours;
    }

    getFullName() {
        return `${this.firstName}  ${this.lastName}`
    }
    getAnnularSalary() {
        return 12 * +this.salary
    }

    raiseSalary(percent) {
        return +this.salary + percent
    }

}

const employee1 = new Employee(1, "Geroge", "Bush", "president", "3500", 9)
employee1.getEmployee
let obj1 = {
    id: 2,
    firstName: "Barack",
    lastName: "Obama",
    position: "president",
    salary: "4560",
    workingHours: "10"
}

employee1.setEmployee = obj1