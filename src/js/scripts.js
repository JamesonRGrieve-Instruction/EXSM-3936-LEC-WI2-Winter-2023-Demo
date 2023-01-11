class Student {
    constructor(firstName = "John", middleName = "Anonymous", lastName = "Doe", birthDate = new Date("2000-01-01"))
    {
        // Missing semicolon.
        this.id=Math.floor(Math.random()*100000)
        this.firstName = firstName;
        // Sets the field to a hardcoded value instead of the parameter.
        this.middleName = "Anonymous"
        this.lastName = lastName;
        // Sets the backing field directly.
        this.#birthDate = birthDate;
    }

    id;
    firstName;
    middleName;
    lastName;
    get fullName() {
        // Missing "this".
        return `${this.firstName} ${middleName[0]}. ${this.lastName}`;
    }

    #birthDate;
    get birthDate() {
        return this.#birthDate;
    }
    set birthDate(x) {
        // Checks the current value instead of the incoming one.
        if (this.#birthDate > Date.now())
        {
            throw new Error("Birthdate must be in the past.");
        }
        else
        {
            // Infinite recursive property.
            this.birthDate = x;
        }
    }

    toString() {
        // Uses "person" instead of "this"
        return `${this.fullName}, a student with the ID ${person.id}.`;
    }
}

async function main() {
    let person = new Student(firstName = "Jane");
    output(person);
}


