const audio = document.getElementById('music');
const playBtn = document.getElementById('pButton');
const timeline = document.getElementById('timeline');
const playhead = document.getElementById('playhead');

let timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// Función para reproducir o pausar la canción
function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
  } else {
    audio.pause();
    playBtn.classList.remove('fa-pause');
    playBtn.classList.add('fa-play');
  }
}

// Función para mover el playhead en el timeline
function movePlayhead(e) {
  let newPosition = e.clientX - timeline.getBoundingClientRect().left;
  if (newPosition >= 0 && newPosition <= timelineWidth) {
    playhead.style.marginLeft = newPosition + "px";
    audio.currentTime = audio.duration * (newPosition / timelineWidth);
  }
}

// Event listeners
playBtn.addEventListener('click', togglePlay);

timeline.addEventListener('click', movePlayhead);

audio.addEventListener('timeupdate', function() {
  let playPercent = timelineWidth * (audio.currentTime / audio.duration);
  playhead.style.marginLeft = playPercent + "px";
});

