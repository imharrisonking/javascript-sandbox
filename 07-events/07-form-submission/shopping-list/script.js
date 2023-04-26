const form = document.getElementById('item-form');

function onSubmit(event) {
    event.preventDefault();

    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if (item === '' || priority === '0') {
        alert('Please enter a value for both fields');
        return;
    }

    console.log(item, priority);
}

function onSubmit2(event) {
    event.preventDefault();

    // Access the FormData object from the form element
    const formData = new FormData(form);

    // Form input needs to have a name attribute, 'item' and 'priority' in this case
    // const item = formData.get('item');
    // const priority = formData.get('priority');

    const entries = formData.entries();
    // console.log(entries);

    for (let entry of entries) {
        console.log(entry[1]);
    }

    // console.log(item, priority);
}

form.addEventListener('submit', onSubmit2);