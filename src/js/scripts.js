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
    // Stringify allows us to convert a JavaScript object into a plaintext representation thereof (JavaScript Object Notation).
    let jsonText = JSON.stringify(defaultPerson);
    output(jsonText, "debug");
    // If we want to then bring that back into JavaScript, we can use Parse.
    let parsedJSON = JSON.parse(jsonText);

    // Parse will bring the data in, but as JSON does not store methods, if we want that functionality on our import object, we will need to tell JavaScript to what class the imported object belongs.
    let parsedPerson = Object.assign(new Person(), parsedJSON);
    parsedPerson.pet = Object.assign(new Pet(), parsedPerson.pet);
    output(parsedPerson);

}


