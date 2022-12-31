let timerText = document.getElementById('timerText')

let videoIds = ["xRb8hxwN5zc", "cqJwrvEodvU", "iv7lcUkFVSc", "dT2owtxkU8k", "4NRXx6U8ABQ", "ru0K8uYEZWw", "ewRjZoRtu0Y", "N7C24ZtXykg", "Ywq6FMLbWH4", "UhxW9Njqqu0", "PfYnvDL0Qcw", "tLsJQ5srVQA", "_j5FJ92haUA", "1gukvtH_a3I", "LbIkrZSIG9A", "MQ_HbX_8b08", "bxWxXncl53U", "pxCWiYFkvTg", "Y-yK6J9i95E", "djV11Xbc914", "ws5aeE2noC0", "8HgpUuItyZE", "pAgnJDJN4VA", "pdbLY_jktt0", "dNCWe_6HAM8", "5qm8PH4xAss", "dDuScu2tDOs", "kpnEJxXO9Oo", "IvNZSZUb4Ek", "UceaB4D0jpo", "F_aL1IGzCSo", "hwZNL7QVJjE", "Oa4Z__daiFo", "uIS-zfeOBcg", "MqEPQGcSeYk", "1vZxq-OpVXU", "TBsKCT4rsPw", "VY5U96vcJ3g", "ammi2uFTn-k", "qM8xNZahjQQ", "EbyAoYaUcVo", "QtXby3twMmI", "VuG7ge_8I2Y", "7cBSr4dGRZY", "B5CFyri4dLg", "gH_RYRwVrVM", "Ed_RsCvuPBQ", "iLf_yqF9VjA", "CHENRaquRHo", "fclPhO1FsOY", "ofTxceS4wLI", "OsLCY3vz3t8", "5Eqb_-j3FDA", "gzmXpwF_MK4", "A66TYFdz8YA", "_Yhyp-_hX2s", "WXBHCQYxwr0", "BX0lKSa_PTk", "tzRFLMn4kpM", "bvC_0foemLY", "w-HfMiue7-k", "dQw4w9WgXcQ", "KsDZix4ZSlU", "9a4izd3Rvdw", "tDukIfFzX18", "wQTjv-Xo1gY", "yxW5yuzVi8w", "DlexmDDSDZ0", "kw4tT7SCmaY", "AJtDXIazrMo", "6eP7jzhfXwQ", "oESni03J8h8", "qZhuDpxafXQ", "kffacxfA7G4", "Te3_VlimRw0", "qFLhGq0060w", "JwYX52BP2Sk", "lbz7JydNb_Y", "_VuJA-VQRcY", "GcvSJudQbVs", "_JZom_gVfuw", "RPFkaHG2ONA", "7c3-Gei5j4w", "LiqIQ5He7_4", "nCg3ufihKyU", "rQy5qaCJnGQ", "WPwTPhFMm3k", "VaKzNtwPQxE", "Tq6Znavm-0o", "l_MyUGq7pgs", "Z9zPS6FfC8w", "5i6A1IHAQsg", "e-ORhEE9VVg", "H5v3kku4y6Q", "LieDEnMJrNY", "EsIfTjKcuBU", "FA2j9qlFyDU", "pIZ0QRWK0zg", "Ub7bUDH9xSs", "ndccTLRqkL4", "W-TE_Ys4iwM", "2zNSgSzhBfM", "FxQTY-W6GIo", "-38NkwtdjVo", "CIhylLW4Fcs", "kTlv5_Bs8aw", "8CdcCD5V-d8", "4-43lLKaqBQ", "D4hAVemuQXY", "GHJyfokY5Dw", "PUdyuKaGQd4", "RMLlyK9rLmc", "aqW4xXUgmno", "HhoATZ1Imtw", "0woU5uXWkW4", "GX6T2c6QH4Q", "GxldQ9eX2wo", "RPPv3covXXI", "9vjDJrAkLHY", "GnJ-dz4dNlM", "TgRKK-HHm-I", "yzTuBuRdAyA", "MwpMEbgC7DA", "PJWemSzExXs", "MQM7CNoAsBI", "qDRORgoZxZU", "mkR_Qwix4Ho", "EXNHYV4N8hQ", "BddP6PYo2gs", "v2AC41dglnM", "64_LJpo3EIE", "4VaqA-5aQTM", "Xl52vzgUDpE", "16y1AkoZkmQ", "YVkUvmDQ3HY", "rhTl_OyehF8", "dHUHxTiPFUU", "QYO6AlxiRE4", "ElZfdU54Cp8", "YEPLHKNrYgw", "bjzI5NN6dfY", "pXRviuL6vMY", "DvfCFfDod6g", "e4h0VoZpdI8", "q05AbgNey6w", "hT_nvWreIhg", "9Zj0JOHJR-s", "pHl_MjgPiZo", "QBPE2fZsVYU", "Uq9gPaIzbe8", "6mbzgt6Pgn0", "xfLom4iv2GE", "8v-TWxPWIWc", "XqN2qFvY64U", "xitd9mEZIHk", "63PTx_1WEq4", "GTWqwSNQCcg", "fJ9rUzIMcZQ", "IRfDCN84zGo", "PEM0Vs8jf1w", "99138T2WeOQ", "syFZfO_wfMQ", "k2qgadSvNyU", "RsU5i0YFAcY", "hTWKbfoikeg", "TO-_3tck2tg", "h6lHUn20J5g", "-tJYN-eG1zk", "lf_wVfwpfp8", "x-xTttimcNk", "lL0ULDPCqIA", "6Nb-prB-4P0", "Gl5wBrNuxx4", "DkeiKbqa02g", "v4xZUr0BEfE", "QWkhCxCcWSE", "RKR5QY-A1uY", "4h1WFyOQv0Y", "KUN5Uf9mObQ", "KEI4qSrkPAs", "JFfEIbGIImk", "eLQMGYHVJ_I", "GCWl50HQZIM", "k9X85NZ7JN8", "2IGDsD-dLF8", "5hj16KomD1M", "Vbu44JdN12s", "ZaI2IlHwmgQ", "jHNNMj5bNQw", "mt9xg0mmt28", "CbqycSCShgM", "dOKQeqGNJwY", "Lrle0x_DHBM", "mNEUkkoUoIA", "hpWksXyK7OQ", "Gs069dndIYk", "d_HlPboLRL8", "3XShkcOze3s", "4ai00NGSFsQ", "aTz3u9JvcwM", "vtNJMAyeP0s", "wicu1yvs7oA", "XU3eFkY1BTI", "6613uDk6XYI", "SS3lIQdKP-A", "uzS3WG6__G4", "JPZxMhZ4KDw", "_WCD3Z9UmJ4", "gEPmA3USJdI", "EvDJmxOF8u8", "_Fwf45pIAtM", "3s5XyooFGpg", "nfWlot6h_JM", "fpA3nmsoBcE", "VECfX823mxU", "4VxdufqB9zg"];
var visitedVideoIds = []

const ytUrl = "https://www.youtube.com/watch?v="
const iframePt1 = '<iframe width="650" height="365" src="https://www.youtube-nocookie.com/embed/'
const iframePt2 = '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

document.getElementById("videoCountText").innerHTML = "We received " + videoIds.length + " song submissions!"
updateVideo();

var tableInnerHtml = ''
var tableRowHtml = ''
for (i in videoIds) {
    tableRowHtml += "<td><p style='cursor: pointer;' onclick='updateVideo(\"" + videoIds[i] + "\")'>" + videoIds[i] + "</p></td>"
    
    if ((i % 3) == 2) {
        tableInnerHtml += "<tr>" + tableRowHtml + "</tr>"
        tableRowHtml = ''
    }
}
document.getElementById('videoList').innerHTML = tableInnerHtml;

function updateVideo(videoId) {
    if (videoId == null) {
        if (videoIds.length > 1) {
            r = Math.random();
            videoId = videoIds[parseInt(r * videoIds.length)]
            videoIds.pop(videoId);
            visitedVideoIds.push(videoId);
        } else {
            videoId = videoIds[0]
            videoIds.pop(videoId)
            visitedVideoIds.push(videoId)
            videoIds = visitedVideoIds
        }
    }

    document.getElementById('videoContent').innerHTML = iframePt1 + videoId + iframePt2
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

// var videoListText = ''
// for (i in videoIds) {
//     videoListText += "<p>" + videoIds[i] + "</p>"
// }
// document.getElementById('videoList').innerHTML = videoListText;

// function updateContent() {
//     time = 5 + (NY2023 - new Date()) / 1000 // TODO: Cut 5000 Delay

//     if (time <= 0) {
//         timerText.style.fontSize = "100px"
//         state = 1

//         // document.querySelector('body').style.backgroundImage = null
//         // document.getElementById('nyan').pause()

//         if (clickCount > 0) {
//             document.getElementById('rickroll').hidden = false
//             document.getElementById('rickroll').play()
//         }

//         if (-time <= 4) {
//             document.querySelector('.home-content').style.top = "275px"
//             timerText.innerHTML = "Thank You 2022!"
//         } else if (-time <= 8)
//             timerText.innerHTML = "You were Awesome!"
//         else if (-time <= 12)
//             timerText.innerHTML = "Time for Change!"
//         else if (-time <= 16)
//             timerText.innerHTML = "Welcome 2023!"
//         else if (-time <= 20)
//             timerText.innerHTML = "Let's start 2023 with..."
//         else if (-time <= 24)
//             timerText.innerHTML = "...some music!"
//         else if (-time <= 28) {
//             timerText.hidden = true
//             document.getElementById("timer").hidden = true
//             document.querySelector('.home-content').style.top = "0px"

//             document.getElementById("contentDrawer").hidden = false
//             document.getElementById("videoCountText").innerHTML = "We received " + videoIds.length + " song submissions!"
        
//             var tableInnerHtml = ''
//             var tableRowHtml = ''
//             var i = 0
//             for (i in videoIds) {
//                 tableRowHtml += "<td>" + iframePt1 + videoIds[i] + iframePt2 + "</td>"
                
//                 if ((i % 3) == 2) {
//                     tableInnerHtml += "<tr>" + tableRowHtml + "</tr>"
//                     tableRowHtml = ''
//                 }
//             }

//             document.getElementById('videoContent').innerHTML = tableInnerHtml;
//         }

        
//     } else {
//         if (time <= 1.75 && !fader) {
//             fader = true;
//             document.getElementById('bazookaText').className = 'fade-out'
//             timerText.className = 'fade-out'
//             clickText.className = 'fade-out'
//         }

//         ss = parseInt(time % 60).toString(10)
//         if (ss.length == 1)
//             ss = "0" + ss
//         time /= 60
//         mm = parseInt(time % 60).toString(10)
//         if (mm.length == 1)
//             mm = "0" + mm
//         time /= 60
//         hh = parseInt(time).toString(10)
//         if (hh.length == 1)
//             hh = "0" + hh

//         timerText.innerHTML = hh + ":" + mm + ":" + ss
//     }
// }

// setInterval(updateContent, 1); // TODO: 5000 -> 1