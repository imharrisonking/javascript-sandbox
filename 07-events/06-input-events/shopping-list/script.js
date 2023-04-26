const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkBox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    heading.textContent = e.target.value;
}

function onChecked(e) {
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Unchecked';
}

function onFocus(e) {
    console.log('Input is focused')
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineColor = 'red';
    itemInput.style.outlineWidth = '1px';
}

function onBlur(e) {
    console.log('Input is blurred');
    itemInput.style.outlineStyle = 'none';
    itemInput.style.outlineColor = 'none';
    itemInput.style.outlineWidth = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput);
checkBox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);