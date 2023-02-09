class Shape {
    constructor(colour = "green") {
        if (this.constructor == Shape) {
            throw new Error("Abstract classes cannot be instantiated.");
        }
        this.colour = colour;
    }
    colour;

    get area() {
        throw new Error("This abstract property was not implemented.");
    }
    get perimeter() {
        throw new Error("This abstract property was not implemented.");
    }
    contain() {
        throw new Error("This abstract method was not implemented.");
    }
}
class Rectangle extends Shape {
    constructor(length = 5, width = 10, colour = "red") {
        super(colour);
        this.length = length;
        this.width = width;
    }
    length;
    width;
    get isSquare() {
        return this.length == this.width;
    }
    get area() {
        return this.length * this.width;
    }
    get perimeter() {
        return (this.length + this.width) * 2;
    }
    contain() {
        return new Rectangle(Math.max(this.length, this.width), Math.max(this.length, this.width));
    }
}
class Triangle extends Shape {
    constructor(base = 3, height = 5, colour = "blue") {
        super(colour);
        this.base = base;
        this.height = height;
    }
    base;
    height;
    get area() {
        return (this.base * this.height) / 2;
    }
    get perimeter() {
        let hypotenuse = Math.sqrt(/* a^2 */ ((this.base/2) ** 2) + /* b^2 */ (this.height ** 2));
        return hypotenuse * 2 + this.base;
    }
    contain() {
        return new Rectangle(Math.max(this.base, this.height), Math.max(this.base, this.height));
    }
}
class Circle extends Shape {
    constructor(radius = 12, colour = "yellow") {
        super(colour);
        this.radius = radius;
    }
    radius;
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return Math.PI * this.diameter;
    }
    get area() {
        return Math.PI * this.radius ** 2;
    }
    get perimeter() {
        return this.circumference;
    }
    contain() {
        return new Rectangle(this.diameter, this.diameter);
    }
}
// Takes in a prompt, displays it to the user, continues to prompt until valid number entered.
async function getInputNumber(prompt) {
    let toReturn = NaN;
    do {
        toReturn = Number(await input(prompt));
        if (isNaN(toReturn)) 
        {
            output("You did not enter a valid number. Please try again.");
        } 
    } while (isNaN(toReturn));
    return toReturn;
}
// Takes in a number and a number of decimal places, and rounds that number to said number of decimal places.
function roundToPlaces(number, places) {
    let movedDecimal = number * 10 ** places;
    let rounded = Math.round(movedDecimal);
    return rounded / 10 ** places;
}
function displayMenu() {
    output("1. Rectangle");
    output("2. Triangle");
    output("3. Circle");
    output("0. Exit");
}
async function main() {
    output("Welcome to the Geometry Program!")
    let userMenuChoice;
    const shapesArray = [];
    do {
        displayMenu();
        userMenuChoice = await getInputNumber("Please make a selection: ");
        if (userMenuChoice == 1)
        {
            let length = await getInputNumber("Please enter a length for the Rectangle: ");
            let width = await getInputNumber("Please enter a width for the Rectangle: ");
            const newRectangle = new Rectangle(length, width);
            shapesArray.push(newRectangle);
        }
        else if (userMenuChoice == 2)
        {
            let base = await getInputNumber("Please enter a base for the Triangle: ");
            let height = await getInputNumber("Please enter a height for the Triangle: ");
            const newTriangle = new Triangle(base, height);
            shapesArray.push(newTriangle);
        } 
        else if (userMenuChoice == 3)
        {
            let radius = await getInputNumber("Please enter a radius for the Circle: ");
            const newCircle = new Triangle(radius);
            shapesArray.push(newCircle);
        }
        else
        {
            output("Please ensure you make a selection from the menu.");
        }
        if ([1, 2, 3].includes(userMenuChoice)) 
        {
            let totalPerimeter = 0;
            let totalArea = 0;
            let totalContainsArea = 0;
            for (shape of shapesArray)
            {
                totalPerimeter += shape.perimeter;
                totalArea += shape.area;
                totalContainsArea += shape.contain().area;
            }
            output(`The total perimeter of all ${shapesArray.length} shapes is ${roundToPlaces(totalPerimeter, 2)} units.`);
            output(`The total area of all ${shapesArray.length} shapes is ${roundToPlaces(totalArea, 2)} units squared.`);
            output(`The total area of squares containing all ${shapesArray.length} shapes is ${roundToPlaces(totalContainsArea, 2)} units squared.`);
        }
    } while (userMenuChoice != 0);
}


