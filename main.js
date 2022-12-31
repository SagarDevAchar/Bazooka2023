let clickCount = 0
let state = 0
let clickText = document.getElementById('clickText')

function clicker() {
    clickCount += 1

    if (state == 0) {
        if (clickCount == 1) {
            document.getElementById('nyan').play()
            clickText.innerHTML = "VOLUME UP!!!"
            document.querySelector('body').style.backgroundImage = "url('assets/pre-release/original.gif')"
            playing = true
        } else if (clickCount == 2) {
            clickText.innerHTML = "No use clicking now..."
        } else if (clickCount == 3) {
            clickText.innerHTML = "Welcome to NYAN WORLD!"
        } else if (clickCount == 4) {
            clickText.innerHTML = "Alright, stop clicking."
        } else if (clickCount == 5) {
            clickText.innerHTML = "This is getting annoying!"
        } else if (clickCount == 6) {
            clickText.innerHTML = "STOP!"
        } else if (clickCount == 7) {
            clickText.innerHTML = "NYAAAAAAAN!"
        } else if (clickCount == 8) {
            clickText.innerHTML = "I DARE YOU TO CLICK ONCE MORE."
        } else if (clickCount == 9) {
            clickText.innerHTML = "THIS IS THE LAST CHANCE!"
        } else if (clickCount == 10) {
            clickText.innerHTML = "YOU CHOSE YOUR FATE!!!"
            location.href = 'https://www.youtube.com/watch?v=zqLEO5tIuYs'
        }
    }
}

window.addEventListener('vclick', clicker, false);
window.addEventListener('click', clicker, false);

let NY2023 = new Date(2022, 0, 1)
let fader = false
let timerText = document.getElementById('timerText')
let offset = 0

function updateContent() {
    time = offset + (NY2023 - new Date()) / 1000
    if (time <= 0) {
        if (-time > 31) {
            NY2023 = new Date()
            offset = 11
            return
        }

        timerText.style.fontSize = "100px"
        state = 1

        document.getElementById('bazookaText').hidden = true
        // timerText.hidden = true
        clickText.hidden = true

        document.querySelector('body').style.backgroundImage = null
        document.getElementById('nyan').pause()

        if (clickCount > 0) {
            document.getElementById('rickroll').hidden = false
            document.getElementById('rickroll').play()
        }

        if (-time <= 4) {
            document.querySelector('.home-content').style.top = "275px"
            timerText.innerHTML = "Thank You 2022!"
        } else if (-time <= 8)
            timerText.innerHTML = "You were Awesome!"
        else if (-time <= 12)
            timerText.innerHTML = "Time for Change!"
        else if (-time <= 16)
            timerText.innerHTML = "Welcome 2023!"
        else if (-time <= 20)
            timerText.innerHTML = "Let's start 2023 with..."
        else if (-time <= 24)
            timerText.innerHTML = "...some music!"
        else if (-time <= 28)
            timerText.innerHTML = "Presenting..."
        else if (-time <= 30)
            timerText.innerHTML = "Jukebox 2023"
        else if (-time <= 31)
            location.href = '2023'
    } else {
        if (time <= 1.75 && !fader) {
            fader = true;
            document.getElementById('bazookaText').className = 'fade-out'
            timerText.className = 'fade-out'
            clickText.className = 'fade-out'
        }

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

        timerText.innerHTML = hh + ":" + mm + ":" + ss
    }
}

setInterval(updateContent, 1);