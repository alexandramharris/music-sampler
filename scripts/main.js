let songName = document.querySelectorAll('.info');
let albumCover = document.querySelectorAll('.cover');

function hideAll() {
  songName.forEach(function(el) {
    el.style.display = 'none';
  });
}

function playonce() {
let players = document.querySelectorAll('audio');
players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });
  }

hideAll();


albumCover.forEach(function(el) {
  el.onclick = (e) => {

    hideAll();


    switch (e.target.getAttribute('id')) {
      case 'theHills':
        document.querySelector('#hills')
        	.style.display = 'block';
          playonce();
        break;

      case 'beMyMistake':
        document.querySelector('#mistake')
        	.style.display = 'block';
          playonce();
        break;

      case 'theSteps':
        document.querySelector('#steps')
        .style.display = 'block';
        playonce();
        break;

      case 'dominoes':
        document.querySelector('#dom')
        .style.display = 'block';
        playonce();
        break;
    }

  }

});
