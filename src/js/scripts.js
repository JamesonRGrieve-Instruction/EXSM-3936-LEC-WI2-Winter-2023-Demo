// Create a class called Person
class Person {
    //Implement a greedy, partial and default constructor.
    constructor(firstName = "John", middleName = "Anonymous", lastName = "Doe", birthDate = new Date("2000-01-01"), gender = "Male")
    {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.gender = gender;
    }
    
    // with a first name, middle name, last name and gender field
    firstName;
    middleName;
    lastName;
    gender;

    // and a birth date property
    #birthDate;
    get birthDate() {
        return this.#birthDate;
    }
    set birthDate(x) {
        // Implement the birth date property to ensure the date is in the past.
        if (x > Date.now())
        {
            throw new Error("Birthdate must be in the past.");
        }
        else
        {
            this.#birthDate = x;
        }
    }

    // Derive a full name property from the first name, last name and middle initial
    get fullName() {
        return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
    }

    // Derive an age property from the birth date.
    get age() {
        return new Date(Date.now()).getFullYear()-this.birthDate.getFullYear();
    }

    // Implement a toString() method that will describe the person in an English sentence.
    toString() {
        return `A ${this.age} year old person of the ${this.gender} gender, named ${this.fullName}.`;
    }

    // Implement an introduction() method that will introduce the person by the first name as an English sentence.
    introduction() {
        return `Hello, my name is ${this.firstName}!`;
    }
}

async function main() {
    // Any arguments not provided that are expected (by order) are assumed to be undefined.
    // If we want to set (as shown) the first and fifth argument, we can explicitly provide undefined for the 2nd thru 4th.
    let defaultPerson = new Person();
    let partialPerson1 = new Person("Joey");
    let partialPerson2 = new Person("Jane", undefined, undefined, undefined, "Female");
    let greedyPerson = new Person("Bob", "Tom", "Smith", new Date("2005-02-03"), "Male");
    output(defaultPerson);
    output(partialPerson1);
    output(partialPerson2);
    output(greedyPerson);
}


