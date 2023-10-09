import { capitalizeWords, makeMoney } from './modules/utils.js';
import Person from './modules/person.js';

console.log(capitalizeWords('hello world'));
console.log(makeMoney(1000));

const person1 = new Person('Harrison', 25);
person1.greet();