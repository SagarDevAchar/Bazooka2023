window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('nyan-mp3').play()
});

const music = new Audio('assets/pre-release/original.mp3')
music.loop = true
music.volume = 1
music.playbackRate = 2
music.play()


// document.getElementById('nyan-mp3').addEventListener('ended', function() {
//     this.play();
// }, false);

function updateTimer() {
    let NY2023 = new Date(2023, 0, 1)
    let timeTo2023Text = document.getElementById('timeTo2023')

    time = (NY2023 - new Date()) / 1000
    ss = parseInt(time % 60).toString(10)
    if (ss.length == 1)
        ss = "0" + ss
    time /= 60
    mm = parseInt(time % 60).toString(10)
    if (mm.length == 1)
        mm = "0" + mm
    time /= 60
    hh = parseInt(time).toString(10)
    if (hh.length == 1)
        hh = "0" + hh

    timeTo2023Text.innerHTML = hh + ":" + mm + ":" + ss
}

setInterval(updateTimer, 1);