const clearBtn = document.querySelector('#clear');

function onClear() {
    const itemList = document.querySelector('#item-list');

    // Remove items using while loop
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

// Javascript Event Listener
// clearBtn.onclick = function () {
//     alert("Clearing!");
// }

// addEventListener
// clearBtn.addEventListener('click', () => alert("Clearing items"));
clearBtn.addEventListener('click', onClear);


// removeEventListener after 5 seconds
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Click the button after 5 seconds
// setTimeout(() => clearBtn.click(), 5000);