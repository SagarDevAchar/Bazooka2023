let clickCount = 0

window.addEventListener('click', (event) => {
    clickCount += 1
    if (clickCount == 1) {
        document.getElementById('nyan').play()
        document.getElementById('click-text').innerHTML = "VOLUME UP!!!"
        document.querySelector('body').style.backgroundImage = "url('assets/pre-release/original.gif')"
        playing = true
    } else if (clickCount == 2) {
        document.getElementById('click-text').innerHTML = "No use clicking now..."
    } else if (clickCount == 3) {
        document.getElementById('click-text').innerHTML = "Welcome to NYAN WORLD!"
    } else if (clickCount == 4) {
        document.getElementById('click-text').innerHTML = "Alright, stop clicking."
    } else if (clickCount == 5) {
        document.getElementById('click-text').innerHTML = "This is getting annoying!"
    } else if (clickCount == 6) {
        document.getElementById('click-text').innerHTML = "STOP!"
    } else if (clickCount == 7) {
        document.getElementById('click-text').innerHTML = "NYAAAAAAAN!"
    } else if (clickCount == 8) {
        document.getElementById('click-text').innerHTML = "I DARE YOU TO CLICK ONCE MORE."
    } else if (clickCount == 9) {
        document.getElementById('click-text').innerHTML = "THIS IS THE LAST CHANCE!"
    } else if (clickCount == 10) {
        document.getElementById('click-text').innerHTML = "YOU CHOSE YOUR FATE!!!"
        location.replace('https://www.youtube.com/watch?v=zqLEO5tIuYs')
    }
});

let NY2023 = new Date(2023, 0, 1)
let timeTo2023Text = document.getElementById('timeTo2023')

function updateTimer() {
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