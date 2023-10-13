const poll = new Map();
poll.set('React', 0);
poll.set('Vue', 0);
poll.set('Angular', 0);
poll.set('Svelte', 0);
poll.set('Other', 0);

function submitForm(e) {
    e.preventDefault();

    const choice = document.querySelector('input[name="poll-option"]:checked');

    if (!choice) {
        alert('Please select an option');
        return
    }

    let voteCount = poll.get(choice.value);
    poll.set(choice.value, ++voteCount);

    displayResults();

    // Disable form fields after submission
    const pollForm = document.getElementById('poll-form');
    pollForm.querySelectorAll('input').forEach(input => input.disabled = true);
    pollForm.querySelector('button').disabled = true;

}

function displayResults() {
    const results = document.getElementById('results');
    results.innerHTML = '';
    for (let [option, votes] of poll) {
        const optionElement = document.createElement('div');
        optionElement.classList.add(
            'border-bottom',
            'p-2',
            'd-flex',
            'justify-content-between',
        );
        optionElement.innerHTML = `
        <strong>${option}: </strong> ${votes} votes`;
        results.appendChild(optionElement);
    }
}

document.getElementById('poll-form').addEventListener('submit', submitForm);
