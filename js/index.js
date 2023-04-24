// Obtener elementos DOM relevantes
const music = document.getElementById("music");
const playButton = document.getElementById("pButton");
const timeline = document.getElementById("timeline");
const playhead = document.getElementById("playhead");

// Inicializar el playhead en la posición 0
playhead.style.marginLeft = "0px";

// Función para actualizar la posición del playhead
function updatePlayhead() {
  // Calcular la posición del playhead en función de la duración actual del audio
  const timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
  const playPercent = 100 * (music.currentTime / music.duration);
  const playheadPos = timelineWidth * (playPercent / 100);
  playhead.style.marginLeft = playheadPos + "px";
}

// Función para reproducir o pausar el audio
function togglePlay() {
  if (music.paused) {
    music.play();
    playButton.className = "fas fa-pause";
  } else {
    music.pause();
    playButton.className = "fas fa-play";
  }
}

// Agregar un evento click al botón de reproducción/pausa
playButton.addEventListener("click", togglePlay);

// Actualizar la posición del playhead cuando se reproduce el audio
music.addEventListener("timeupdate", updatePlayhead);
