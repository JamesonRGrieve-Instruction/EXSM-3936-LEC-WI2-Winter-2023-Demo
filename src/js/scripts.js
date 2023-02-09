class Shape {
    constructor(colour = "green")
    {
        if (this.constructor == Shape)
        {
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
    constructor(length = 5, width = 10, colour = "red")
    {
        super(colour);
        this.length = length;
        this.width = width;
    }
    length;
    width;
    get isSquare() 
    {
        return this.length == this.width;
    }

}
class Triangle extends Shape {
    constructor(base = 3, height = 5, colour = "blue")
    {
        super(colour);
        this.base = base;
        this.height = height;
    }
    base;
    height;
}
class Circle extends Shape {
    constructor(radius = 12, colour = "yellow")
    {
        super(colour);
        this.radius = radius;
    }
    radius;
    get diameter() {
        return radius*2;
    }
    get circumference() {
        return Math.PI * this.diameter;
    }
}
async function main() {

}


