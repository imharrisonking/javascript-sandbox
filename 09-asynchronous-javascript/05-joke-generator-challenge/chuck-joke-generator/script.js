// Update the joke when the button is clicked
const button = document.getElementById('joke-btn');

// Function
function getJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText);
    
            const joke = document.querySelector('#joke');
            joke.innerHTML = data.value;
        };
    };
    
    xhr.send();
};

// Event listeners
window.addEventListener('load', getJoke);
button.addEventListener('click', getJoke);
