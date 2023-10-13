const myMap = new Map();

myMap.set('name', 'Harrison');
myMap.set(1, 'blue');
myMap.set(2, 'red');

console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.get(2));

console.log(myMap.size);

console.log(myMap.has(1));
console.log(myMap.has(3));

myMap.delete(2);

console.log(myMap);

const people = new Map();

people.set('Harrison', {job: 'Developer', age: 25})
people.set('Hester', {job: 'Product Manager', age: 26})
people.set('Luka', {job: 'Broker', age: 27})

people.forEach(person => console.log(person.job))

console.log(people.keys());
console.log(people.values());
console.log(people.entries());

const iterator = people.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const peopleArray = Array.from(people);
console.log(peopleArray);
