function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function () {
        return this.width * this.height;
    }
}

const rec1 = new Rectangle('Rectangle 1', 10, 10);
console.log(rec1.name);
console.log(rec1.area());

const rec2 = new Rectangle('Rectangle 2', 20, 20);
console.log(rec2.name);
console.log(rec2.area());

const rec3 = new Rectangle('Rectangle 3', 30, 30);
console.log(rec3.name);
console.log(rec3.area());