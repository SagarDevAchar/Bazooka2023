let clickCount = 0

window.addEventListener('click', (event) => {
    clickCount += 1
    if (clickCount == 1) {
        document.getElementById('nyan').play()
        document.getElementById('clickText').innerHTML = "VOLUME UP!!!"
        document.querySelector('body').style.backgroundImage = "url('assets/original.gif')"
        playing = true
    } else if (clickCount == 2) {
        document.getElementById('clickText').innerHTML = "No use clicking now..."
    } else if (clickCount == 3) {
        document.getElementById('clickText').innerHTML = "Welcome to NYAN WORLD!"
    } else if (clickCount == 4) {
        document.getElementById('clickText').innerHTML = "Alright, stop clicking."
    } else if (clickCount == 5) {
        document.getElementById('clickText').innerHTML = "This is getting annoying!"
    } else if (clickCount == 6) {
        document.getElementById('clickText').innerHTML = "STOP!"
    } else if (clickCount == 7) {
        document.getElementById('clickText').innerHTML = "NYAAAAAAAN!"
    } else if (clickCount == 8) {
        document.getElementById('clickText').innerHTML = "I DARE YOU TO CLICK ONCE MORE."
    } else if (clickCount == 9) {
        document.getElementById('clickText').innerHTML = "THIS IS THE LAST CHANCE!"
    } else if (clickCount == 10) {
        document.getElementById('clickText').innerHTML = "YOU CHOSE YOUR FATE!!!"
        location.replace('https://www.youtube.com/watch?v=zqLEO5tIuYs')
    }
});