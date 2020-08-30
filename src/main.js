import string from './style.js'

const player = {
    n: 0,
    time: 60,
    id: undefined,
    code: '',
    init: ()=>{
        player.listener()
        player.play()
    },
    ui:{
        text: document.querySelector('#text'),
        style: document.querySelector('#style')
    },
    events: {
        '#btnPause' : 'pause',
        '#btnPlay' : 'play',
        '#btnSlow' : 'slow',
        '#btnNormal' : 'normal',
        '#btnQuick' : 'quick',
        '#btnReplay' : 'replay'
    },
    listener: ()=>{
        for(const key in player.events)
          if(player.events.hasOwnProperty(key)){
              document.querySelector(key).onclick = player[player.events[key]]
          }
    },
    play: ()=>{
        player.id = setInterval(player.run, player.time)
    },
    pause: ()=> {
        window.clearInterval(player.id)
    },
    run: ()=> {
        if (player.n === 0) {
            player.code = ""
        }
        if(player.n < string.length) {
            if (string[player.n] === "\n") {
                player.code += "<br>";
              } else if (string[player.n] === " ") {
                player.code += "&nbsp;";   // HTML的空格
              } else {
                player.code += string[player.n];   
              }
            player.n += 1
            player.ui.text.scrollTop = text.scrollHeight
            player.ui.text.innerHTML = player.code
            player.ui.style.innerHTML = string.substring(0,player.n)
            
        }
    },
    slow: () => {
        player.pause()
        player.time = 200
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 60
        player.play()
    },
    quick: () => {
        player.pause()
        player.time = 0
        player.play()
    },
    replay: () => {
        player.pause()
        player.n = 0
        player.play()
    }

}

player.init()