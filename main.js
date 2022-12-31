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

let NY2023 = new Date() //new Date(2023, 0, 1) // TODO: 2022 -> 2023
let fader = false
let timerText = document.getElementById('timerText')

let videoIds = ["EXNHYV4N8hQ", "GTWqwSNQCcg", "kffacxfA7G4", "GCWl50HQZIM", "TBsKCT4rsPw", "GxldQ9eX2wo", "lbz7JydNb_Y", "Oa4Z__daiFo", "aqW4xXUgmno", "kTlv5_Bs8aw", "4ai00NGSFsQ", "GX6T2c6QH4Q", "dHUHxTiPFUU", "QWkhCxCcWSE", "fpA3nmsoBcE", "5qm8PH4xAss", "CIhylLW4Fcs", "_JZom_gVfuw", "CHENRaquRHo", "8HgpUuItyZE", "JwYX52BP2Sk", "x-xTttimcNk", "qZhuDpxafXQ", "9vjDJrAkLHY", "qDRORgoZxZU", "QBPE2fZsVYU", "Uq9gPaIzbe8", "Te3_VlimRw0", "TO-_3tck2tg", "GcvSJudQbVs", "mNEUkkoUoIA", "9Zj0JOHJR-s", "PfYnvDL0Qcw", "hwZNL7QVJjE", "5Eqb_-j3FDA", "Lrle0x_DHBM", "djV11Xbc914", "Gs069dndIYk", "bxWxXncl53U", "xfLom4iv2GE", "16y1AkoZkmQ", "dQw4w9WgXcQ", "ewRjZoRtu0Y", "_Fwf45pIAtM", "bvC_0foemLY", "6Nb-prB-4P0", "nCg3ufihKyU", "RsU5i0YFAcY", "nfWlot6h_JM", "ru0K8uYEZWw", "2zNSgSzhBfM", "4-43lLKaqBQ", "HhoATZ1Imtw", "hT_nvWreIhg", "ZaI2IlHwmgQ", "QtXby3twMmI", "YVkUvmDQ3HY", "FA2j9qlFyDU", "_Yhyp-_hX2s", "v4xZUr0BEfE", "kw4tT7SCmaY", "SS3lIQdKP-A", "d_HlPboLRL8", "gzmXpwF_MK4", "pdbLY_jktt0", "e4h0VoZpdI8", "99138T2WeOQ", "63PTx_1WEq4", "aTz3u9JvcwM", "iLf_yqF9VjA", "VECfX823mxU", "Ed_RsCvuPBQ", "EvDJmxOF8u8", "RKR5QY-A1uY", "1gukvtH_a3I", "6eP7jzhfXwQ", "6mbzgt6Pgn0", "MqEPQGcSeYk", "ws5aeE2noC0", "xRb8hxwN5zc", "mt9xg0mmt28", "1vZxq-OpVXU", "5hj16KomD1M", "wicu1yvs7oA", "_j5FJ92haUA", "6613uDk6XYI", "7cBSr4dGRZY", "3XShkcOze3s", "gH_RYRwVrVM", "3s5XyooFGpg", "ndccTLRqkL4", "F_aL1IGzCSo", "Vbu44JdN12s", "JFfEIbGIImk", "Y-yK6J9i95E", "BddP6PYo2gs", "N7C24ZtXykg", "IRfDCN84zGo", "dDuScu2tDOs", "uIS-zfeOBcg", "CbqycSCShgM", "tLsJQ5srVQA", "VY5U96vcJ3g", "pxCWiYFkvTg", "ElZfdU54Cp8", "A66TYFdz8YA", "GnJ-dz4dNlM", "dT2owtxkU8k", "eLQMGYHVJ_I", "tDukIfFzX18", "DlexmDDSDZ0", "UhxW9Njqqu0", "w-HfMiue7-k", "dNCWe_6HAM8", "mkR_Qwix4Ho", "GHJyfokY5Dw", "KsDZix4ZSlU", "XqN2qFvY64U", "cqJwrvEodvU", "VaKzNtwPQxE", "B5CFyri4dLg", "64_LJpo3EIE", "4VaqA-5aQTM", "bjzI5NN6dfY", "wQTjv-Xo1gY", "AJtDXIazrMo", "qM8xNZahjQQ", "Ub7bUDH9xSs", "JPZxMhZ4KDw", "-38NkwtdjVo", "pIZ0QRWK0zg", "_WCD3Z9UmJ4", "5i6A1IHAQsg", "oESni03J8h8", "MwpMEbgC7DA", "Z9zPS6FfC8w", "uzS3WG6__G4", "PEM0Vs8jf1w", "VuG7ge_8I2Y", "RPFkaHG2ONA", "EsIfTjKcuBU", "2IGDsD-dLF8", "Tq6Znavm-0o", "jHNNMj5bNQw", "RPPv3covXXI", "ofTxceS4wLI", "8v-TWxPWIWc", "syFZfO_wfMQ", "BX0lKSa_PTk", "EbyAoYaUcVo", "D4hAVemuQXY", "_VuJA-VQRcY", "pXRviuL6vMY", "0woU5uXWkW4", "Ywq6FMLbWH4", "rQy5qaCJnGQ", "TgRKK-HHm-I", "MQ_HbX_8b08", "LbIkrZSIG9A", "LiqIQ5He7_4", "RMLlyK9rLmc", "iv7lcUkFVSc", "q05AbgNey6w", "DvfCFfDod6g", "vtNJMAyeP0s", "ammi2uFTn-k", "IvNZSZUb4Ek", "KUN5Uf9mObQ", "lL0ULDPCqIA", "k9X85NZ7JN8", "hpWksXyK7OQ", "8CdcCD5V-d8", "Xl52vzgUDpE", "OsLCY3vz3t8", "MQM7CNoAsBI", "pHl_MjgPiZo", "YEPLHKNrYgw", "UceaB4D0jpo", "LieDEnMJrNY", "h6lHUn20J5g", "l_MyUGq7pgs", "tzRFLMn4kpM", "XU3eFkY1BTI", "WPwTPhFMm3k", "FxQTY-W6GIo", "9a4izd3Rvdw", "kpnEJxXO9Oo"];
const url = "https://www.youtube.com/watch?v="
const iframePt1 = '<iframe width="300" height="200" src="https://www.youtube-nocookie.com/embed/'
const iframePt2 = '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

function updateContent() {
    time = 5 + (NY2023 - new Date()) / 1000 // TODO: Cut 5000 Delay

    if (time <= 0) {
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
        else if (-time <= 30) {
            timerText.innerHTML = "Jukebox 2023"

            location.href = '2023'
        }

        
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