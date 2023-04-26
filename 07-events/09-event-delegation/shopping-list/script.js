const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(item => {
//     item.addEventListener('click', (event) => {
//         event.target.remove();
//     });
// });

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    };
});

list.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue';
    };
});