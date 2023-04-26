// Create a promise
const promise = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    console.log('Async task complete');
    resolve();
  }, 1000);
});

// promise.then(() => {
//   console.log('Promise consumed..');
// });

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    // If there is no error then resolve the promise
    if (!error) {
      resolve({ name: 'John', age: 30 });
    // If there is an error then reject the promise
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

getUser
    .then((user) => console.log(user))
    .catch((error) => console.log(error))
    // Finally will run no matter what
    .finally(() => console.log('The promise has been resolved or rejected'));

console.log('Hello from global scope');
