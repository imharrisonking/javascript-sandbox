// [[Configurable]] - if `true`, the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if `true`, the property will be returned in a `for...in` loop, otherwise not
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not
// [[Value]] - the value of the property

console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

const rectObj = {
    name: 'Rectangle',
    width: 10,
    height: 5,
};

Object.defineProperty(rectObj, 'name', {
    writable: false,
    configurable: false,
    enumerable: false,
});

descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor);

rectObj.name = 'Square';
delete rectObj.name;
console.log(rectObj.name);

// Wont' show name in the loop as it's not enumerable
for (let [key, value] of Object.entries(rectObj)) {
    console.log(`${key}: ${value}`)
}

console.log(Object.getOwnPropertyDescriptors(rectObj));