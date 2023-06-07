class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this.capitaliseName(this._firstName);
    }
    
    set firstName(value) {
        this._firstName = this.capitaliseName(value);
    }

    get lastName() {
        return this.capitaliseName(this._lastName);
    }

    set lastName(value) {
        this._lastName = this.capitaliseName(value);
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    capitaliseName(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}

const person1 = new Person('harry', 'king');
person1.firstName = 'sofia';
person1.lastName = 'griff';
console.log(person1.fullName);