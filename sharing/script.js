const audioPlayer = document.getElementById('audio-player');
const playButton = document.querySelector('.play');

playButton.addEventListener('click', function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.innerHTML = '<i class="cursor_pointer ri-pause-fill"></i>'
  }else{
    playButton.innerHTML = '<i class="cursor_pointer ri-play-fill"></i>'
    audioPlayer.pause();
  }
});

const volumeUp = document.querySelector('.volumeUp');
const volumeDown = document.querySelector('.volumeDown');

volumeUp.addEventListener('click', function() {
  if (audioPlayer.volume < 1) {
    audioPlayer.volume += 0.1;
  }
})

volumeDown.addEventListener('click', function() {
  if (audioPlayer.volume > 0) {
    audioPlayer.volume -= 0.1;
  }
})

const progressContainer = document.querySelector('.progressContainer');
const progressIndicator = document.querySelector('.progressIndicator');
const currentDuration = document.querySelector('.currentDuration');


setInterval(() => {
  const progressContainerWidth = progressContainer.clientWidth - progressIndicator.clientWidth;
  const duration = audioPlayer.duration;
  const currentTime = audioPlayer.currentTime;
  const percentagePlayed = (duration - currentTime) / duration;

  progressIndicator.style.left = `${progressContainerWidth - (percentagePlayed * progressContainerWidth)}px`;

  let minutesCurrent = Math.floor(audioPlayer.currentTime/60);
  let secondsCurrent = Math.floor(audioPlayer.currentTime - (minutesCurrent * 60));
  console.log('currentTime', audioPlayer.currentTime)
  console.log('operasiMinutes', (minutesCurrent * 60))
  /* 
  current time dimulai 0 berupa second

  */
  currentDuration.textContent = `${minutesCurrent}:${(+secondsCurrent).toString().padStart(2, '0')}`;
}, 1000)

const fullDuration = document.querySelector('.fullDuration');

let minutes = Math.floor(audioPlayer.duration/60);
let seconds = Math.floor(audioPlayer.duration - (minutes * 60));

fullDuration.textContent = `${minutes}:${seconds}`;


