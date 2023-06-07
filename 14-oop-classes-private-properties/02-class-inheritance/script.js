class Shape {
    constructor(name) {
        this.name = name;
    }

    logName() {
        console.log('Shape Name: ' + this.name);
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    logName() {
        console.log('Circle Name: ' + this.name);
    }
}

const rect = new Rectangle('Rect 1', 20, 20);
// console.log(rect)
rect.logName();

const circle = new Circle('Circle 1', 10);
circle.logName();

console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);

