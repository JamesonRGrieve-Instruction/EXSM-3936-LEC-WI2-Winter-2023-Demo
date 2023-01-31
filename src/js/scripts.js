class Vehicle {
    constructor(manufacturer = "Ford", model = "Mustang", colour = "Blue", engineDisplacement = 3000) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.colour = colour;
        this.engineDisplacement = engineDisplacement;
    }
    engineDisplacement;
    manufacturer;
    model;
    colour;

    get effectivePowerRating()
    {
        return (this.engineDisplacement/10000)*100;
    }

    toString() {
        return `[Power: ${this.effectivePowerRating}] A ${this.colour} ${this.manufacturer} ${this.model} with a ${this.engineDisplacement}cc engine.`;
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

    // JavaScript's definitions here are a little muddy - this is either an override or a hiding of the parent implementation. 
    // Arguably it is MORE of an override if you reference the super implementation and MORE of a hiding if you do not, but either term will typically be understood.
    toString() {
        return super.toString()+` It has a bed length of ${this.bedLength}.`;
    }
}
class Motorcycle extends Vehicle {
    constructor(manufacturer = "Harley Davidson", model = "Sprint", colour = "Red", engineDisplacement = 300) {
        super(manufacturer, model, colour, engineDisplacement);
    }

    get effectivePowerRating()
    {
        return (this.engineDisplacement/10000)*400;
    }

    toString() {
        return `[Power: ${this.effectivePowerRating}] A ${this.engineDisplacement}cc Motorcycle built by ${this.manufacturer} sold under the name ${this.model} in the colour ${this.colour}.`;
    }
}

async function main() {
    const myCar = new Car("Dodge", "Stealth", "Blue", 3000, 4);
    const myTruck = new Truck();
    const myMotorcycle = new Motorcycle();

    output(myCar.toString());
    output(myTruck.toString());
    output(myMotorcycle.toString());

    const myVehicles = [myCar, myTruck, myMotorcycle];
    output(myVehicles.map(x => x.effectivePowerRating));
}


