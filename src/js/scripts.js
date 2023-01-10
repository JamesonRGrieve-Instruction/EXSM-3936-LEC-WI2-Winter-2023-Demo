// Create a class called Person
class Person {
    //Implement a greedy, partial and default constructor.
    
    constructor()
    {
        this.firstName = "John";
        this.middleName = "Anonymous"
        this.lastName = "Doe";
        this.birthDate = new Date("2000-01-01");
        this.gender = "Male";
    }
    /*
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate(new Date("2000-01-01"));
    }

    constructor(firstName, middleName, lastName, birthDate, gender)
    {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.birthDate(birthDate);
        this.gender = gender;
    }
    */

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
    // This is where the code you're actually experimenting with goes.
    
    let prompt = "Please enter your name, or 'Exit' to quit: "
    let name = await input(prompt);

    let person = new Person();
    output(person);

    while (name != "Exit") 
    {
        output("Hello, "+name+"!");
        name = await input(prompt);
    }
}


