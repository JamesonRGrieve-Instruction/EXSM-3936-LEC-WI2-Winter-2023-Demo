class Person {
    constructor(firstName = "John", middleName = "Toby", lastName = "Smith") {
        // When we implement an abstract class, because sub-classes FORCE US to call the super constructor, we must verify whether the calling class is this (abstract) one, or a sub-class. We only throw the error if it is this (abstract) one.
        if (this.constructor == Person)
        {
            throw new Error("Abstract classes cannot be instantiated!");
        }
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }
    firstName;
    middleName;
    lastName;

    get fullName()
    {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }

    greet() {
        throw new Error("Abstract method was not implemented!");
    }
}
class Student extends Person {
    constructor(firstName = "John", middleName = "Toby", lastName = "Smith") {
        super(firstName, middleName, lastName);
    }
    get fullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
    greet() {
        return `Hello, my name is ${this.fullName} and I am a student!`;
    }
}
class Lawyer extends Person {
    constructor(firstName = "John", middleName = "Toby", lastName = "Smith") {
        super(firstName, middleName, lastName);
    }
    get fullName()
    {
        return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
    }
    greet() {
        return `Hello, my name is ${this.fullName} Esq. and I am a lawyer.`;
    }
}
class BusDriver extends Person {
    constructor(firstName = "John", middleName = "Toby", lastName = "Smith") {
        super(firstName, middleName, lastName);
    }
    greet() {
        return `Hello, my name is ${this.fullName} and I drive a bus!`;
    }
}

async function main() {
    const people = [
        new Student(),
        new BusDriver("Jane", "Ashley", "Doe"),
        new Lawyer("Joseph", "Paul", "Goode"),
        new BusDriver("Josh", "Edward", "Wilson")
    ];

    output(people.map(x => x.greet()));

    for (person of people)
    {
        output(person.greet());
    }
}


