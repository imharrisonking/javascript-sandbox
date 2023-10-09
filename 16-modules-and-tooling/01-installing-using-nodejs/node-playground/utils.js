function capitaliseWords(string) {
    return string
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

function makeMoney(amount) {
    return `$${amount.toFixed(2)}`;
}

module.exports = {
    capitaliseWords,
    makeMoney,
}
