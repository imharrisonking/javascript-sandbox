const { capitaliseWords, makeMoney } = require('./utils');
const Person = require('./Person');

console.log(capitaliseWords('i am a man looking to buy a house in the local area'));
console.log(makeMoney(1000.1234));

const person1 = new Person('Harrison', 25);
person1.greet();