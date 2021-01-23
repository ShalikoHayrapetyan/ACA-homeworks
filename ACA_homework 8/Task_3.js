/* 3. Write classes: Person, Student.
Person should have: firstName, lastName, gender, age.
It should have appropriate getters and setters.
It should have a method: toString().
Student is inherited from Person. It should have program(array of { programName, grade
}), year, fee.
It should have appropriate getters and setters.
It should have method: passExam(programName, grade). Student should contain the
data about its programs and exams. passExam will update that data, so if student
passed all the exams(grade is great or equal to 50), its year should be increased by one.
It should have a toString method. */
   
class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
    }

    get getPerson() {
        return ` I am ${this.firstName}  ${this.lastName} `
    }

    set editPerson(obj) {
        this.firstName = obj.firstName
        this.lastName = obj.lastName
        this.gender = obj.gender
        this.age = obj.age
    }
    toString() {
        return `firsName : ${this.firstName} , lastName:${this.lastName} , gender : ${this.gender} , age : ${this.age}  `
    }

}

class Student extends Person {
    #program = [{
            programName: "Mathemaic",
            grade: 0
        },
        {
            programName: "English",
            grade: 0
        },

        {
            programName: "Physics",
            grade: 0
        }

    ]

    constructor(firstName, lastName, gender, age, year, fee = 400000) {
        super(firstName, lastName, gender, age)
        this.year = year
        this.fee = fee
    }
    get getStudent() {
        return ` My name is ${this.firstName}  ${this.lastName} , I'm a student  `
    }

    set editStudent(obj) {
        this.year = obj.year
        this.fee = obj.fee
    }

    passExam(programName, grade) {
        if (grade > 25 || grade < 0) return "Wrong grade"
        let grades = 0
        for (let prog of this.#program) {
            if (programName == prog.programName) {
                prog.grade = grade
            }
            grades += prog.grade
        }
        if (grades >= 50) this.year++
    }

}
let st1 = new Student("Michael", "Jackson", "male", 18, 1)
st1.passExam("Mathemaic", 25)
st1.passExam("English", 20)
st1.passExam("Physics", 16)

console.log(st1)
