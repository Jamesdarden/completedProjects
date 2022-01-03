const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// play and pause video
function toggleVideoStatus (){
    //paused built in method
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

//update play pause icon
function updatePlayIcon (){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
      
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
        
    }
}
// update progress and timestamp
function updateProgress (){
    //console.log(video.duration)
    //console.log(video.currentTime)
    progress.value = (video.currentTime / video.duration) * 100;
    console.log(progress.value)
    //minutes
    let mins = Math.floor(video.currentTime / 60);
    if ( mins < 10) {
        mins = '0' + String(mins);
    }
    // get secs
    let secs = Math.floor(video.currentTime % 60);
    if ( secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
} 
//stop video
function stopvideo (){
    video.currentTime = 0
    video.pause()
}
// set video time to progress
function setVideoProgress (){
    video.currentTime = (+progress.value * video.duration) / 100;
}
//event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopvideo);

progress.addEventListener('change', setVideoProgress)
