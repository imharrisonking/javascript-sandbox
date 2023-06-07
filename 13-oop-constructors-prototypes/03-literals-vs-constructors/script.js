const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing is the process of converting a primitive value to an object of the corresponding wrapper class.
console.log(strLit.toUpperCase());
console.log(strLit[0]);

// Unboxing is the process of converting an object of a wrapper type to its corresponding primitive value.
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor);

console.log(strLit instanceof String);
console.log(strObj instanceof String);

const funcLit = function(x) {
    return x * x;
}

console.log(funcLit, typeof funcLit);