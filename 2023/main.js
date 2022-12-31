let timerText = document.getElementById('timerText')

let videoIds = ["_JZom_gVfuw", "xRb8hxwN5zc", "x-xTttimcNk", "AewNd29wRUM", "2IGDsD-dLF8", "PfYnvDL0Qcw", "Ywq6FMLbWH4", "MqEPQGcSeYk", "ndccTLRqkL4", "ewRjZoRtu0Y", "pXRviuL6vMY", "bvC_0foemLY", "dNCWe_6HAM8", "_j5FJ92haUA", "Lrle0x_DHBM", "8CdcCD5V-d8", "D4hAVemuQXY", "BX0lKSa_PTk", "Te3_VlimRw0", "WQq98YPV8yk", "VECfX823mxU", "4NRXx6U8ABQ", "xfLom4iv2GE", "Uq9gPaIzbe8", "ofTxceS4wLI", "2zNSgSzhBfM", "Xl52vzgUDpE", "e-ORhEE9VVg", "dHUHxTiPFUU", "1vZxq-OpVXU", "Dk_jUGRFYz0", "fclPhO1FsOY", "VY5U96vcJ3g", "KEI4qSrkPAs", "KUN5Uf9mObQ", "syFZfO_wfMQ", "9a4izd3Rvdw", "kffacxfA7G4", "PUdyuKaGQd4", "4VxdufqB9zg", "RPPv3covXXI", "gzmXpwF_MK4", "dT2owtxkU8k", "v4xZUr0BEfE", "k2qgadSvNyU", "ru0K8uYEZWw", "QYO6AlxiRE4", "GTWqwSNQCcg", "YEPLHKNrYgw", "DkeiKbqa02g", "xitd9mEZIHk", "4h1WFyOQv0Y", "5hj16KomD1M", "9vjDJrAkLHY", "uIS-zfeOBcg", "qFLhGq0060w", "lL0ULDPCqIA", "pxCWiYFkvTg", "MQ_HbX_8b08", "wicu1yvs7oA", "uzS3WG6__G4", "9Zj0JOHJR-s", "JPZxMhZ4KDw", "k9X85NZ7JN8", "hwZNL7QVJjE", "Tq6Znavm-0o", "EsIfTjKcuBU", "QBPE2fZsVYU", "q05AbgNey6w", "CHENRaquRHo", "QpKQjISfB4s", "WPwTPhFMm3k", "4VaqA-5aQTM", "3XShkcOze3s", "oESni03J8h8", "GnJ-dz4dNlM", "IvNZSZUb4Ek", "aTz3u9JvcwM", "MQM7CNoAsBI", "kTlv5_Bs8aw", "MwpMEbgC7DA", "F_aL1IGzCSo", "bjzI5NN6dfY", "99138T2WeOQ", "Ed_RsCvuPBQ", "pdbLY_jktt0", "pHl_MjgPiZo", "IRfDCN84zGo", "mNEUkkoUoIA", "EbyAoYaUcVo", "hpWksXyK7OQ", "-tJYN-eG1zk", "OsLCY3vz3t8", "-38NkwtdjVo", "Vbu44JdN12s", "CbqycSCShgM", "rhTl_OyehF8", "TgRKK-HHm-I", "pIZ0QRWK0zg", "h6lHUn20J5g", "HhoATZ1Imtw", "GX6T2c6QH4Q", "jHNNMj5bNQw", "LieDEnMJrNY", "gEPmA3USJdI", "GCWl50HQZIM", "RsU5i0YFAcY", "pAgnJDJN4VA", "64_LJpo3EIE", "QWkhCxCcWSE", "tzRFLMn4kpM", "6mbzgt6Pgn0", "ElZfdU54Cp8", "w-HfMiue7-k", "nCg3ufihKyU", "5qm8PH4xAss", "_VuJA-VQRcY", "UceaB4D0jpo", "kpnEJxXO9Oo", "0woU5uXWkW4", "N7C24ZtXykg", "eLQMGYHVJ_I", "iv7lcUkFVSc", "16y1AkoZkmQ", "3s5XyooFGpg", "lf_wVfwpfp8", "VuG7ge_8I2Y", "ED2EgbsDXDc", "qZhuDpxafXQ", "hTWKbfoikeg", "6eP7jzhfXwQ", "ammi2uFTn-k", "yzTuBuRdAyA", "UhxW9Njqqu0", "TO-_3tck2tg", "GxldQ9eX2wo", "qDRORgoZxZU", "mt9xg0mmt28", "ZaI2IlHwmgQ", "fJ9rUzIMcZQ", "vtNJMAyeP0s", "ws5aeE2noC0", "6613uDk6XYI", "A66TYFdz8YA", "LiqIQ5He7_4", "7c3-Gei5j4w", "4-43lLKaqBQ", "AJtDXIazrMo", "_WCD3Z9UmJ4", "1y6smkh6c-0", "YVkUvmDQ3HY", "yxW5yuzVi8w", "DlexmDDSDZ0", "cqJwrvEodvU", "B5CFyri4dLg", "EXNHYV4N8hQ", "foE1mO2yM04", "5i6A1IHAQsg", "dDuScu2tDOs", "cHHLHGNpCSA", "SS3lIQdKP-A", "XqN2qFvY64U", "gH_RYRwVrVM", "W-TE_Ys4iwM", "e4h0VoZpdI8", "8HgpUuItyZE", "Ub7bUDH9xSs", "Gs069dndIYk", "aqW4xXUgmno", "Oa4Z__daiFo", "H5v3kku4y6Q", "BddP6PYo2gs", "FA2j9qlFyDU", "nfWlot6h_JM", "d_HlPboLRL8", "mkR_Qwix4Ho", "_Yhyp-_hX2s", "J_ub7Etch2U", "fpA3nmsoBcE", "DvfCFfDod6g", "l_MyUGq7pgs", "wQTjv-Xo1gY", "gX3jQkbBMdg", "63PTx_1WEq4", "dQw4w9WgXcQ", "LbIkrZSIG9A", "Jwgf3wmiA04", "djV11Xbc914", "rQy5qaCJnGQ", "Z9zPS6FfC8w", "RKR5QY-A1uY", "1gukvtH_a3I", "dOKQeqGNJwY", "Y-yK6J9i95E", "hT_nvWreIhg", "EvDJmxOF8u8", "8v-TWxPWIWc", "RMLlyK9rLmc", "6Nb-prB-4P0", "JFfEIbGIImk", "FxQTY-W6GIo", "CIhylLW4Fcs", "aoi11BdfpoM", "lbz7JydNb_Y", "qM8xNZahjQQ", "tDukIfFzX18", "5Eqb_-j3FDA", "VaKzNtwPQxE", "_Fwf45pIAtM", "iLf_yqF9VjA", "GHJyfokY5Dw", "7cBSr4dGRZY", "kw4tT7SCmaY", "XU3eFkY1BTI", "JwYX52BP2Sk", "TBsKCT4rsPw", "Gl5wBrNuxx4", "RPFkaHG2ONA", "PEM0Vs8jf1w", "KsDZix4ZSlU", "v2AC41dglnM", "PJWemSzExXs", "tLsJQ5srVQA", "GcvSJudQbVs", "bxWxXncl53U", "QtXby3twMmI", "4ai00NGSFsQ", "WXBHCQYxwr0"];
var visitedVideoIds = []

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