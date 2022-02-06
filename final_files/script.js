const audioEl = document.getElementById('audio-player')
const playButton = document.querySelector('.play');
const volumeUp = document.querySelector('.volumeUp');
const volumeDown = document.querySelector('.volumeDown');
const progressContainer = document.querySelector('.progress-container');
const progressIndicator = document.querySelector('.progress');
const playCode = '&#9658';
const pauseCode = '&#9612;&#9612;';

// Possible items of concern for more on the audio element:
// autoplay, currentTime, defaultMuted, defaultPlaybackRate
// volume, play, pause, duration, ended, loop, muted, playbackRate

playButton.addEventListener('click', () => {
    if(audioEl.paused) {
        audioEl.play();
        playButton.style.fontSize = '2rem';
        playButton.innerHTML = pauseCode;
    } else {
        audioEl.pause();
        playButton.style.fontSize = '3.5rem';
        playButton.innerHTML = playCode;
    }
})

volumeUp.addEventListener('click', () => {
    if (audioEl.volume < 1) audioEl.volume += .1;
})

volumeDown.addEventListener('click', () => {
    if (audioEl.volume > 0) audioEl.volume -= .1;
})

function setProgressPosition() {
    setInterval(() => {
        const progressContainerWidth = progressContainer.clientWidth - progressIndicator.clientWidth;
        const duration = audioEl.duration;
        const currentTime = audioEl.currentTime;
        const percentagePlayed = (duration - currentTime) / duration;

        progressIndicator.style.left = `${progressContainerWidth - (percentagePlayed * progressContainerWidth)}px`;
    }, 1000)
}

setProgressPosition();
