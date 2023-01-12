/*
You are to write classes that will simulate a pen. The class should implement a constructor. The pen’s ink level property should always initialize to 100 (representing a percentage). Other properties should be passed in through constructor parameters. 

The properties of the pen class should include its brand, colour and ink level. The method of the pen class should be a method to write with the pen (a single parameter representing the number of letters to write) which will subtract 0.5% of the ink per letter. If there is insufficient ink to write the prescribed number of letters, an exception should be thrown. 


Once your class is constructed, using the browser console, create a script that will (remember to catch potential exceptions):
Instantiate a pen.
Write 100 letters.
Write 42 letters.
Attempt to write 200 letters.
Output the remaining amount of ink to the console.
No user input is required.
*/

class Pen {
    constructor(brand = "Bic", colour = "Black")
    {
        this.brand = brand;
        this.colour = colour;
    }

    brand;
    colour;
    #inkLevel = 100;
    get inkLevel()
    {
        return this.#inkLevel;
    }
    // The mutator gets triggered with the incoming value going into incomingValue (95).
    set inkLevel(incomingValue)
    {
        output(`Attempting to mutate inkLevel from ${this.#inkLevel} to ${incomingValue}.`, "debug");
        // incomingValue (95) is not less than zero.
        if (incomingValue < 0)
        {
            output(`${incomingValue} is less than 0, throwing exception.`, "debug");
            throw new Error("The pen cannot have negative ink!");
        }
        // So the 95 gets written into our private backing field.
        output(`Exception was not thrown, setting inkLevel.`, "debug");
        this.#inkLevel = incomingValue;
    }

    // Say letterCount is 10 and this.inkLevel is 100.
    write(letterCount)
    {
        output(`Attempting to write ${letterCount} letters.`, "debug");
        // inkToSubtract would be 5.
        let inkToSubtract = letterCount * 0.5;
        output(`That equates to ${inkToSubtract}% of the total ink.`, "debug");
        /* 
        The steps that happen when this line runs:
        1. It performs the subtraction, discerning the new value write() wants to put into inkLevel.
        2. It calls the mutator, passing that post-subtraction value into incomingValue.
        3. It checks to see if that post-subtraction value (incomingValue) is less than zero (in the mutator).
        4. If the error is not thrown, it sets the private backing field.
        */

        // newInkLevelValue would be 95.
        let newInkLevelValue = this.inkLevel - inkToSubtract;
        output(`After subtracting ${inkToSubtract}% from the remaining ${this.inkLevel}%, we would be left with ${newInkLevelValue}%.`, "debug");
        // We try to assign 95 to this.inkLevel which triggers the mutator.
        this.inkLevel = newInkLevelValue;

        /*
        // Being in the write method, we are checking to see if the result of the subtraction would make the property less than zero.
        if (this.#inkLevel - inkToSubtract < 0)
        {
            throw new Error("The pen cannot have negative ink!");
        }
        */
    }
}

async function main() {
    // Pen starts with 100% ink.
    let myPen = new Pen();
    // Pen uses 50%.
    myPen.write(100);
    // Pen uses 21%.
    myPen.write(42);
    try
    {
        // Pen tries to use 100% and fails, because we've already used 71%.
        myPen.write(200);
    }
    catch (error)
    {
        // We write out the error from that attempt.
        output(error);
    }
    // Remaining is the 100% we started with minus the 71% we used.
    // Because the attempt to write 200 letters failed, we still have the ink we would have used in that write().
    output(myPen.inkLevel);
}


