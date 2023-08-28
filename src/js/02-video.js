import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const myPlayer = new Player(iframe);

try {
    const lastTime = localStorage.getItem('videoplayer-current-time');
    myPlayer.setCurrentTime(lastTime);
} catch (err) {
    console.log(err)
}

myPlayer.on('timeupdate',  throttle((sec) => {
    localStorage.setItem('videoplayer-current-time', sec.seconds);
    console.log(localStorage.getItem('videoplayer-current-time'))
    }, 1000)
)