const audioPlayer = document.getElementById('audio-player');
const playButton = document.querySelector('.play');

playButton.addEventListener('click', function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});