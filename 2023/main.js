let timerText = document.getElementById('timerText')

let videoIds = ["G55PDzplLpo", "4ai00NGSFsQ", "D4hAVemuQXY", "ammi2uFTn-k", "4VxdufqB9zg", "ofTxceS4wLI", "_WCD3Z9UmJ4", "GxldQ9eX2wo", "kpnEJxXO9Oo", "rIPtyodvaJk", "jHNNMj5bNQw", "hT_nvWreIhg", "DKj5m9cSMZs", "5qm8PH4xAss", "VECfX823mxU", "kffacxfA7G4", "Gl5wBrNuxx4", "4-43lLKaqBQ", "DvfCFfDod6g", "bjzI5NN6dfY", "TgRKK-HHm-I", "lzkKzZmRZk8", "YVkUvmDQ3HY", "CnAmeh0-E-U", "9Zj0JOHJR-s", "o7iL2KzDh38", "64_LJpo3EIE", "tDukIfFzX18", "PEM0Vs8jf1w", "l_MyUGq7pgs", "WQq98YPV8yk", "2IGDsD-dLF8", "CbqycSCShgM", "wicu1yvs7oA", "lf_wVfwpfp8", "rQy5qaCJnGQ", "IuS4LL_ALrU", "EXNHYV4N8hQ", "Lrle0x_DHBM", "VuG7ge_8I2Y", "9vjDJrAkLHY", "5Eqb_-j3FDA", "LiqIQ5He7_4", "SS3lIQdKP-A", "RsU5i0YFAcY", "BX0lKSa_PTk", "Jwgf3wmiA04", "PfYnvDL0Qcw", "pXRviuL6vMY", "yxW5yuzVi8w", "kJQP7kiw5Fk", "CIhylLW4Fcs", "QBPE2fZsVYU", "Vbu44JdN12s", "OsLCY3vz3t8", "d_HlPboLRL8", "Tq6Znavm-0o", "fJ9rUzIMcZQ", "YEPLHKNrYgw", "5hj16KomD1M", "Oa4Z__daiFo", "dvgZkm1xWPE", "H5v3kku4y6Q", "djV11Xbc914", "ZaI2IlHwmgQ", "7cBSr4dGRZY", "iLf_yqF9VjA", "B5CFyri4dLg", "8CdcCD5V-d8", "WPwTPhFMm3k", "gX3jQkbBMdg", "TBsKCT4rsPw", "v2AC41dglnM", "RMLlyK9rLmc", "AJtDXIazrMo", "ndccTLRqkL4", "GnJ-dz4dNlM", "6eP7jzhfXwQ", "mkR_Qwix4Ho", "FA2j9qlFyDU", "MqEPQGcSeYk", "4NRXx6U8ABQ", "JFfEIbGIImk", "XU3eFkY1BTI", "PJWemSzExXs", "4VaqA-5aQTM", "cHHLHGNpCSA", "mNEUkkoUoIA", "qFLhGq0060w", "cqJwrvEodvU", "CHFfejYUX-U", "TO-_3tck2tg", "CHENRaquRHo", "F_aL1IGzCSo", "GHJyfokY5Dw", "UhxW9Njqqu0", "DlexmDDSDZ0", "VaKzNtwPQxE", "aZ9bGgDa3eg", "-38NkwtdjVo", "WXBHCQYxwr0", "qZhuDpxafXQ", "5i6A1IHAQsg", "tLsJQ5srVQA", "QYO6AlxiRE4", "v4xZUr0BEfE", "MjlTKXujfwE", "hwZNL7QVJjE", "EbyAoYaUcVo", "JwYX52BP2Sk", "q05AbgNey6w", "hTWKbfoikeg", "_Yhyp-_hX2s", "bxWxXncl53U", "JPZxMhZ4KDw", "pxCWiYFkvTg", "dOKQeqGNJwY", "W-TE_Ys4iwM", "6mbzgt6Pgn0", "uzS3WG6__G4", "dNCWe_6HAM8", "GTWqwSNQCcg", "HhoATZ1Imtw", "99138T2WeOQ", "Te3_VlimRw0", "AewNd29wRUM", "kTlv5_Bs8aw", "qDRORgoZxZU", "bvC_0foemLY", "_j5FJ92haUA", "7c3-Gei5j4w", "xfLom4iv2GE", "_JZom_gVfuw", "1y6smkh6c-0", "RPFkaHG2ONA", "16y1AkoZkmQ", "MQM7CNoAsBI", "IRfDCN84zGo", "w-HfMiue7-k", "wnJ6LuUFpMo", "1l143JvZctU", "_VuJA-VQRcY", "ixkoVwKQaJg", "_Fwf45pIAtM", "8HgpUuItyZE", "gzmXpwF_MK4", "h6lHUn20J5g", "6Nb-prB-4P0", "syFZfO_wfMQ", "RPPv3covXXI", "UceaB4D0jpo", "pdbLY_jktt0", "QYh6mYIJG2Y", "nCg3ufihKyU", "k2qgadSvNyU", "1jO2wSpAoxA", "pAgnJDJN4VA", "aqW4xXUgmno", "dT2owtxkU8k", "t4H_Zoh7G5A", "-RJSbO8UZVY", "oESni03J8h8", "IvNZSZUb4Ek", "NGLxoKOvzu4", "xRb8hxwN5zc", "0woU5uXWkW4", "6613uDk6XYI", "SXiSVQZLje8", "KEI4qSrkPAs", "N7C24ZtXykg", "2zNSgSzhBfM", "EvDJmxOF8u8", "QWkhCxCcWSE", "yzTuBuRdAyA", "GCWl50HQZIM", "1gukvtH_a3I", "Gs069dndIYk", "EsIfTjKcuBU", "e4h0VoZpdI8", "Dk_jUGRFYz0", "Ub7bUDH9xSs", "1G4isv_Fylg", "J_ub7Etch2U", "aoi11BdfpoM", "3s5XyooFGpg", "aTz3u9JvcwM", "KsDZix4ZSlU", "A66TYFdz8YA", "PUdyuKaGQd4", "qM8xNZahjQQ", "LbIkrZSIG9A", "Uq9gPaIzbe8", "vtNJMAyeP0s", "e-ORhEE9VVg", "eLQMGYHVJ_I", "9a4izd3Rvdw", "QpKQjISfB4s", "ru0K8uYEZWw", "8v-TWxPWIWc", "oygrmJFKYZY", "DkeiKbqa02g", "QtXby3twMmI", "uIS-zfeOBcg", "rhTl_OyehF8", "DCCJCILiX3o", "-tJYN-eG1zk", "dHUHxTiPFUU", "wQTjv-Xo1gY", "lL0ULDPCqIA", "xitd9mEZIHk", "lbz7JydNb_Y", "RKR5QY-A1uY", "pIZ0QRWK0zg", "ewRjZoRtu0Y", "dQw4w9WgXcQ", "kw4tT7SCmaY", "ws5aeE2noC0", "gH_RYRwVrVM", "k9X85NZ7JN8", "GcvSJudQbVs", "3XShkcOze3s", "xFYQQPAOz7Y", "dDuScu2tDOs", "63PTx_1WEq4", "BddP6PYo2gs", "MQ_HbX_8b08", "ED2EgbsDXDc", "mt9xg0mmt28", "iv7lcUkFVSc", "Z9zPS6FfC8w", "ElZfdU54Cp8", "VY5U96vcJ3g", "GX6T2c6QH4Q", "1vZxq-OpVXU", "hpWksXyK7OQ", "FxQTY-W6GIo", "Ywq6FMLbWH4", "x-xTttimcNk", "MwpMEbgC7DA", "1lRGr4rSCz4", "nfWlot6h_JM", "4h1WFyOQv0Y", "fpA3nmsoBcE", "uelHwf8o7_U", "gEPmA3USJdI", "Y-yK6J9i95E", "LieDEnMJrNY", "fclPhO1FsOY", "Ed_RsCvuPBQ", "by4USgMmICE", "XqN2qFvY64U", "foE1mO2yM04", "KUN5Uf9mObQ", "BMFzGs9IOmM", "tzRFLMn4kpM", "Xl52vzgUDpE"];
var visitedVideoIds = []

const iframePt1 = '<iframe width="650" height="365" src="https://www.youtube-nocookie.com/embed/'
const iframePt2 = '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

document.getElementById("videoCountText").innerHTML = "Thank You for the " + videoIds.length + " song submissions!"
updateVideo();

var tableInnerHtml = ''
var tableRowHtml = ''
for (i in videoIds) {
    tableRowHtml += "<td><p style='cursor: pointer;' onclick='updateVideo(\"" + videoIds[i] + "\")'>" + videoIds[i] + "</p></td>"
    
    if ((i % 4) == 3) {
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