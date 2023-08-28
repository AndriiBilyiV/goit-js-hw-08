import Player from '@vimeo/player';
import throttle from 'lodash/throttle';
console.log(throttle)

const iframe = document.querySelector('iframe');
const myPlayer = new Player(iframe);

myPlayer.on('timeupdate',  throttle((sec) => {
    localStorage.setItem('videoplayer-current-time', sec.seconds);
    console.log(localStorage.getItem('videoplayer-current-time'))
    }, 1000)
)