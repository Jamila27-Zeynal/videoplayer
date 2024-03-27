


const video = document.getElementById(`videoPlayer`);
//ekran goruntu ucun

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
//requestFullscreen-videonu tam ekran moduna kecirmek ucunistifade olunur
//exitFullscreen -tam ekran modunda cixmaq ucun istifade olunur ve yaxud tam eksi 

//video oynadilmasi ucun 

function togglePlayPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}


video.addEventListener("click", togglePlayPause);
document.addEventListener("keydown", (e) => {
  if (e.key === ' ') {
    toggleFullScreen();
  }
});
//tooglefullscreen ve togglePlayPause tam ekran rejimine kecis ucun ve videonu dayandirmaq ve oynamaq ucun istifade olunur.ve klaviatura qisa yollarindan istifade etmekle oynatma/pauza itifade etmek olar.
document.addEventListener("keydown", (e) => {
  if (e.key === ' ') {
    togglePlayPause();
  }
});
