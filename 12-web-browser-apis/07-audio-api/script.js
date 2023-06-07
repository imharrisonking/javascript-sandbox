const audio = document.querySelector('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const volume = document.getElementById('volume');
const currentTime = document.getElementById('current-time');

play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
})

audio.addEventListener('timeupdate', () => {
    currentTime.textContent = audio.currentTime.toFixed(2);
});

volume.addEventListener('input', () => {
    audio.volume = volume.value;
});