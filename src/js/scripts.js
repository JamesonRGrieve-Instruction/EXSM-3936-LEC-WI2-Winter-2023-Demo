class Vehicle {
    constructor(manufacturer = "Ford", model = "Mustang", colour = "Blue", engineDisplacement = 3000) {
        // When we implement an abstract class, because sub-classes FORCE US to call the super constructor, we must verify whether the calling class is this (abstract) one, or a sub-class. We only throw the error if it is this (abstract) one.
        if (this.constructor == Vehicle)
        {
            throw new Error("Abstract classes cannot be instantiated!");
        }
        this.manufacturer = manufacturer;
        this.model = model;
        this.colour = colour;
        this.engineDisplacement = engineDisplacement;
    }
    engineDisplacement;
    manufacturer;
    model;
    colour;

    // As abstract functionality isn't "baked into" JavaScript like it is some languages, we work around it to achieve similar functionality.
    // If these methods / properties are called in a sub-class without being overridden/hidden, they will throw an error.
    // Because THIS CLASS is abstract, we don't have to worry about an instance of this class calling these, as that cannot exist.
    get effectivePowerRating()
    {
        throw new Error("Abstract property was not implemented!");
    }

    toString() {
        throw new Error("Abstract method was not implemented!");
    }
}
// If we put nothing in the children, by default they are 1-for-1 reimplementations of the parent.
class Car extends Vehicle {
    constructor(manufacturer = "Ford", model = "Mustang", colour = "Blue", engineDisplacement = 3000, poweredWheels = 2)
    {
        super(manufacturer, model, colour, engineDisplacement);

        this.poweredWheels = poweredWheels;
    }
    poweredWheels;

    get effectivePowerRating()
    {
        return ((this.engineDisplacement/10000)*120)/2*this.poweredWheels;
    }

    toString() {
        return `[Power: ${this.effectivePowerRating}] This is a car, a ${this.colour} ${this.manufacturer} ${this.model} with a ${this.engineDisplacement}cc engine.`;
    }
}
class Truck extends Vehicle {
    constructor(manufacturer = "Ford", model = "F-150", colour = "Black", bedLength = 6) {
        // super is a keyword that points to the parent class.
        // Calling super() as a method is invoking the parent class' constructor.
        // As the super constructor assigns manufacturer, model and colour we do not assign them here, we simple "forward" those arguments to the super, let it do its thing and then continue after that.
        super(manufacturer, model, colour);

        // Rather than re-assigning all of the fields, we can just call the super constructor and pass in our values. 
        //this.manufacturer = manufacturer;
        //this.model = model;
        //this.colour = colour;

        // Building on the concept of a sub-class EXTENDING the parent class - it often makes sense to call the super constructor first, and then perform any EXTENDED operations thereafter, as opposed to repeating the same operations.
     
        // As bedLength is NOT part of the Vehicle class, it is assigned separately from the super constructor.
        this.bedLength = bedLength;
    }
    bedLength;

    get effectivePowerRating()
    {
        return (this.engineDisplacement/10000)*100;
    }

    // JavaScript's definitions here are a little muddy - this is either an override or a hiding of the parent implementation. 
    // Arguably it is MORE of an override if you reference the super implementation and MORE of a hiding if you do not, but either term will typically be understood.
    // Calling super to an abstract method or property will throw the not implemented exception, as that's the entire body of the parent definition. Only call super to things that are not abstract (including non-abstract properties / method in abstract classes).
    toString() {
        return `[Power: ${this.effectivePowerRating}] This is a truck, a ${this.colour} ${this.manufacturer} ${this.model} with a ${this.engineDisplacement}cc engine. It has a bed length of ${this.bedLength}.`;
    }
}
class Motorcycle extends Vehicle {
    constructor(manufacturer = "Harley Davidson", model = "Sprint", colour = "Red", engineDisplacement = 300, length = 6) {
        super(manufacturer, model, colour, engineDisplacement);
        this.length = length;
    }
    length;

    get effectivePowerRating()
    {
        return (this.engineDisplacement/10000)*400;
    }
    truckToHaul()
    {
        return new Truck("Dodge", "Ram 1500", "Purple", this.length);
    }

    toString() {
        return `[Power: ${this.effectivePowerRating}] A ${this.engineDisplacement}cc Motorcycle that is ${this.length} feet long, built by ${this.manufacturer} sold under the name ${this.model} in the colour ${this.colour}.`;
    }
}

async function main() {
    const myCar = new Car("Dodge", "Stealth", "Blue", 3000, 4);
    const myTruck = new Truck();
    const myMotorcycle = new Motorcycle();
    myMotorcycle.length = 8;

    output(myCar.toString());
    output(myTruck.toString());
    output(myMotorcycle.toString());
    output(`I'm going to haul the above motorcycle with: ${myMotorcycle.truckToHaul()}`);

    const myVehicles = [myCar, myTruck, myMotorcycle];
    output(myVehicles.map(x => x.effectivePowerRating));

    // Throws an error, as abstract classes cannot be instantiated.
    //const myVehicle = new Vehicle();
}


