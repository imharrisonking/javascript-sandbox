const sym = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');

console.log(sym, sym1, sym2);
console.log(typeof sym);
console.log(sym.description);
console.log(sym1.description);

console.log(Symbol('sym') === Symbol('sym'));

const user = {
    [Symbol('id')]: 1,
    name: 'Harrison King',
    email: 'harrison.k@hotmail.co.uk'
}

console.log(user[Symbol('id')]);

// Symbols are not emumerable
console.log(Object.keys(user));
console.log(Object.values(user));

for (let key in user) {
    console.log(key);
}

// getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user));

// Symbol.for() checks if a symbol with the same key has already been created
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym3 === sym4);

console.log(Symbol.keyFor(sym3));
console.log(Symbol.keyFor(sym1));

console.log(sym1.toString());
console.log(sym2.toString());
console.log(sym.toString());

console.log(sym1.valueOf());
console.log(sym2.valueOf());
console.log(sym.valueOf());