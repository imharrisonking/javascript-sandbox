const img = document.querySelector('img'); 
let start;
let done = false;

function step(timestamp) {
    if (start === undefined) {
        start = timestamp;
    }
    // requestAnimationFrame(step);

    const elapsed = timestamp - start;
    if (elapsed > 5000) {
        done = true;
    }

    if (done) {
        return;
    }
     
    img.style.transform = `translateX(${elapsed / 10}px) rotate(${elapsed / 10}deg)`

    requestAnimationFrame(step);
}

requestAnimationFrame(step);