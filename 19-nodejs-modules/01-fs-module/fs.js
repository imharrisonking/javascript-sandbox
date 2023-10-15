// const fs = require('fs');
const fs = require('fs/promises');

// WRITE TO A FILE //

// Callback version
// fs.writeFile('HelloWorld.txt', 'Hello World!', (error) => {
//     if (error) throw error;
//     console.log('File created successfully!');
// });

// Promise version
// fs.writeFile('HelloWorld2.txt', 'Hello promise world!')
//     .then(() => console.log('File created successfully!'))
//     .catch((error) => console.log(error));

// Sync version
// fs.writeFileSync('HelloWorld3.txt', 'Hello sync world!');
// console.log('File created successfully!');

// Async/Await
async function createFile(filename, content) {
    try {
        await fs.writeFile(filename, content);
        console.log('File created successfully!');
    } catch (error) {
       console.log(error);
    }
}

// READ FROM A FILE //

// Async/Await
async function readFile(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

readFile('HelloWorld.txt');
readFile('HelloWorld2.txt');
readFile('HelloWorld3.txt');

// createFile('HelloWorld4.txt', 'Hello async world!');