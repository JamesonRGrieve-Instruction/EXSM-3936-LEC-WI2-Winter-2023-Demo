class Person {
    constructor(firstName = "John", middleName = "Anonymous", lastName = "Doe", birthDate = new Date("2000-01-01"), gender = "Male", pet = new Pet())
    {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.gender = gender;
        // This stores an object of the Pet class.
        this.pet = pet;
    }
    
    firstName;
    middleName;
    lastName;
    gender;
    // This stores an object of the Pet class.
    pet;

    #birthDate;
    get birthDate() {
        return this.#birthDate;
    }
    set birthDate(x) {
        if (x > Date.now())
        {
            throw new Error("Birthdate must be in the past.");
        }
        else
        {
            this.#birthDate = x;
        }
    }

    get fullName() {
        return `${this.firstName} ${this.middleName[0]}. ${this.lastName}`;
    }

    get age() {
        return new Date(Date.now()).getFullYear()-this.birthDate.getFullYear();
    }

    toString() {
        return `A ${this.age} year old person of the ${this.gender} gender, named ${this.fullName}. ${this.firstName} owns ${this.pet}.`;
    }

    introduction() {
        return `Hello, my name is ${this.firstName}!`;
    }
}

class Pet {
    constructor(type = "Dog", name = "Fido")
    {
        this.type = type;
        this.name = name;
    }

    type;
    name;

    toString() {
        return `A ${this.type} named ${this.name}.`;
    }
}

async function main() {
    let defaultPerson = new Person();

    output(defaultPerson);
    output(defaultPerson.pet);
}


