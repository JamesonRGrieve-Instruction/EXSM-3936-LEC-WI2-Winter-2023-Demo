class Vehicle {
    constructor(manufacturer = "Ford", model = "Mustang", colour = "Blue") {
        this.manufacturer = manufacturer;
        this.model = model;
        this.colour = colour;
    }

    manufacturer;
    model;
    colour;

    toString() {
        return `A ${this.colour} ${this.manufacturer} ${this.model}.`;
    }
}
// If we put nothing in the children, by default they are 1-for-1 reimplementations of the parent.
class Car extends Vehicle {

}
class Truck extends Vehicle {
    
}
class Motorcycle extends Vehicle {

}

async function main() {
    const myCar = new Car();

    output(myCar);
}


