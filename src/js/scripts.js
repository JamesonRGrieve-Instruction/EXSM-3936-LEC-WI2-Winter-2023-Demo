//You are to write classes that will (shallowly) simulate a car and its engine.

class Car {
    //Both classes should have their own constructors.
    //Other properties should be passed in through constructor parameters.
    constructor(make = "Dodge", model = "Stealth", year = 1992, engineNumCylinders = 6) {
        this.make = make;
        this.model = model;
        this.year = year;
        //The constructor of the car should instantiate an engine for the car. 
        this.engine = new Engine(engineNumCylinders);
    }
    //The properties of the car class should include its make, model, year, odometer and engine.
    make;
    model;
    year;
    //The car’s odometer property should always initialize to 0
    #odometer = 0;
    get odometer()
    {
        return this.#odometer;
    }
    set odometer(incoming)
    {
        // If the incoming value is less than the current value...
        if (incoming < this.#odometer)
        {
            throw new Error("The odometer can't roll backwards - that's illegal!");
        }
        else if (!(typeof incoming === "number"))
        {
            throw new Error("The odometer must be a number!");
        }
        else
        {
            this.#odometer = incoming;
        } 
    }
    //The engine property will be an instance of the engine class.
    engine;

    //The methods of the car class should include a method to start the car engine (no parameters) which will set the engine to running,
    startEngine() {
        this.engine.isRunning = true;
    }
    //stop the car engine (no parameters) which will set the engine to not running
    stopEngine() {
        this.engine.isRunning = false;
    }
    //drive the car (a single parameter representing the distance to drive) which will 
    drive(km) {
        //if the engine is on 
        if (this.engine.isRunning) {
            //add the argument to the odometer 
            this.odometer += km;
        }
        //and throw an exception otherwise. 
        else {
            throw new Error("The engine isn't running, the car isn't going to go anywhere!");
        }
    }

    // This controls the output for JSON.stringify (or any other JSON serialization).
    toJSON() {
        return {
            make: this.make,
            model: this.model,
            year: this.year,
            // By adding this line, it forces the JSON serializer to pull the value of the property.
            odometer: this.odometer,
            engine: this.engine
        };
    }
}
class Engine {
    //Both classes should have their own constructors.
    constructor(numCylinders = 4) {
        this.numCylinders = numCylinders;
    }
    //The properties of the engine class should include a number of cylinders, and whether it is running or not.
    numCylinders;
    //the engine’s running property should always initialize to false
    #isRunning = false;
    get isRunning() {
        return this.#isRunning;
    }
    set isRunning(incoming) {
        if (this.#isRunning && incoming)
        {   
            throw new Error("Brrrrrtttt... That didn't sound good. The engine was already running!");
        }
        else
        {
            this.#isRunning = incoming;
        }
    }
}

//Once your class is constructed, using the browser console, create a script that will:
async function main() {
    //Instantiate a car.
    const myCar = new Car();
    //(remember to catch potential exceptions)
    try {
        /*
        Turn its engine on.
        Drive for 100km.
        Turn the engine off.
        */
        myCar.startEngine();
        myCar.drive(100);
        myCar.stopEngine();
    }
    catch (error) {
        output(error, 'error');
    }
    //(remember to catch potential exceptions)
    try {
        /*
        Turn its engine on.
        Drive for 50km.
        Turn the engine off.
        */
        myCar.startEngine();
        myCar.drive(50);
        myCar.stopEngine();
    }
    catch (error) {
        output(error, 'error');
    }
    //Output the odometer reading to the console.
    output(myCar.odometer);
    //Finally, output a JSON string representing your Car object to the console.
    output(JSON.stringify(myCar));
}


