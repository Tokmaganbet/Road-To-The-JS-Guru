class Person {
    constructor(name, surname, course) {
        this.name = name
        this.surname = surname
        this.course = course
    }
    sayHello() {
        console.log(`Hi my name's ${this.name} ${this.surname} and I study in ${this.course} course`)
    }
}

var person1 = new Person('Damir', 'Tokmaganbet', 2)
var person2 = new Person('Anton', 'Grigory', 3)
var person3 = new Person('Frederik', 'May', 2)

person1.sayHello()
person2.sayHello()
person3.sayHello()

// same, but no "syntactic sugar"
function getPerson(name, surname, course) {
    const person = {
        name: name,
        surname: surname,
        course: course,

        sayHello() {
            console.log(`Hi my name's ${name} ${surname} and I study in ${course} course`)
        }
    }
    return person
}

var person1 = getPerson('Damir', 'Tokmaganbet', 2)
var person2 = getPerson('Anton', 'Grigory', 3)
var person3 = getPerson('Frederik', 'May', 2)

person1.sayHello()
person2.sayHello()
person3.sayHello()