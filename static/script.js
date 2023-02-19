document.body.querySelector(".donatenow").addEventListener('click', (e) => {
    let dbody = document.querySelector('body');
    let song = document.createElement('audio');
    song.src = "static/the_song_of_my_people.mp3";
    song.autoplay = "true";
    document.body.appendChild(song);
    let bg = document.querySelector('.bg');

    function chbg(clr) {
        bg.style.background = clr;
    }
    function audplay() {
      document.querySelector('audio').play();
    }
      setTimeout(() => {
         chbg("#0000FF");
         document.querySelector('.bg').classList.add('drkn');
         audplay();
      }, 600);
      setTimeout(() => {
          chbg("#00ff00");
      }, 950);
      setTimeout(() => {
          chbg("#ff00FF");
      }, 1275);
      setTimeout(() => {
          audplay();
          chbg("#ff00ff");
      }, 1450);
      setTimeout(() => {
          chbg("#00ffFF");
      }, 1700);
      setTimeout(() => {
          chbg("#ffff00");
      }, 2050);
      setTimeout(() => {
          chbg("#ff0000");
      }, 2500);
      setTimeout(() => {
          audplay();
          chbg("#5555FF");
      }, 2800);
      setTimeout(() => {
          document.querySelector('.bg').classList.remove('drkn');
          chbg("#00000000");
      }, 3100);
})