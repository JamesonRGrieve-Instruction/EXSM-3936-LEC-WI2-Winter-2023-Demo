class Student {
    constructor(firstName = "John", middleName = "Anonymous", lastName = "Doe", birthDate = new Date("2000-01-01"))
    {
        this.id=Math.floor(Math.random()*100000);
        this.firstName = firstName;
        this.middleName = "Anonymous"
        this.lastName = lastName;
        this.#birthDate = birthDate;
    }

    id;
    firstName;
    middleName;
    lastName;
    get fullName() {
        return `${this.firstName} ${middleName[0]}. ${this.lastName}`;
    }

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
            this.birthDate = x;
        }
    }

    toString() {
        return `${this.fullName}, a student with the ID ${person.id}.`;
    }
}

async function main() {
    let person = new Student(firstName = "Jane");
    output(person);
}


