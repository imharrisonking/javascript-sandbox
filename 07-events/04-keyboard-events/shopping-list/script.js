const itemInput = document.getElementById('item-input');

const onKeyPress = event => {
    console.log('keypress');
};

const onKeyUp = event => {
    console.log('keyup');
};

const onKeyDown = event => {
    // key
    // if (event.key === 'Enter') {
    //     alert('You pressed enter');
    // }

    // keyCode
    if (event.keyCode === 13) {
        alert('You pressed enter');
    }

    // Code
    if (event.code === 'Digit1') {
        console.log('You pressed 1');
    };

    if (event.repeat) {
        console.log('You are holding down ' + event.key);
    }

    console.log('Shift: ' + event.shiftKey);
    console.log('Control: ' + event.ctrlKey);
    console.log('Alt: ' + event.altKey);

    if (event.shiftKey && event.key === 'K') {
        console.log('You pressed shift + K');
    }
}

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);