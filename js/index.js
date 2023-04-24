const audio = document.querySelector('audio'),
    songLenght = document.getElementById('SongLength'),
    currentTime = document.getElementById('CurrentSongTime');

const calculateTime = (secs) => {
    const minutes= Math.floor(secs/60),
        seconds= Math.floor(secs%60),
        returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`
};

const displayDuration = () =>{
    songLenght.innerHTML=calculateTime(audio.duration)
}
if(audio.readyState > 0){
    displayDuration();
    currentTime.innerHTML=calculateTime(audio.currentTime);
}else{
    audio.addEventListener('loadedmetadata',()=>{
        displayDuration();
    })
}

audio.ontimeupdate = function(){
    currentTime.innerHTML = calculateTime(audio.currentTime);
    setProgress();
}

function setProgress(){
    let percentage = (audio.currentTime / audio.duration)*100;
    document.querySelector('.progress').getElementsByClassName.width = percentage + '%'
}

const playPause = document.getElementById('PlayPause'),
    plus10 = document.getElementById('Plus10'),
    back10 = document.getElementById('Back10');

playPause.addEventListener('click' , ()=>{
    if(audio.paused){
        playPause.src = 'Pause.svg';
        audio.play();
    }else{
        playPause.src = 'Play.svg'
    }
})

plus10.addEventListener('click',()=>{
    audio.currentTime+=10;
})
back10.addEventListener('click',()=>{
    audio.currentTime-=10;
})

function setProgress() {
    let percentage = (audio.currentTime / audio.duration) * 100;
    document.querySelector('.progress-bar').value = percentage;
  }
  
  audio.ontimeupdate = function(){
    currentTime.innerHTML = calculateTime(audio.currentTime);
    setProgress();
  }
  