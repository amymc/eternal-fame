function init(){
    var player, 
        tag = document.createElement('script'),
        firstScriptTag = document.getElementsByTagName('script')[0],
        infoTab = document.getElementById('info-tab');

    tag.src = "https://www.youtube.com/iframe_api";
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    infoTab.addEventListener("click", showInfo);
}

function onYouTubeIframeAPIReady() {
    var id1 = '4wzZY_alCCo',
        id2 = '-egHLOgio7Q',
        id3 = 'CN918KqYJto',
        id4 = 'amoXD_UU05E';
    
    player = new YT.Player('player1', {
        height: '300',
        width: '400',
        videoId: id1,
        events: {
            'onReady': onPlayerReady
        },
         playerVars: {
            'wmode': 'transparent',
            'controls': 0,
            'showinfo': 0,
            'rel': 0,
            'loop': 1,
            'enablejsapi': 1,
            'playlist': id1
        }
    });
    player = new YT.Player('player2', {
        height: '300',
        width: '400',
        videoId: id2,
        events: {
            'onReady': onPlayerReady
        },
         playerVars: {
            'controls': 0,
            'showinfo': 0,
            'rel': 0,
            'loop': 1,
            'enablejsapi': 1,
            'playlist': id2
        }
    });
    player = new YT.Player('player3', {
        height: '300',
        width: '400',
        videoId: id3,
        events: {
            'onReady': onPlayerReady
        },
         playerVars: {
            'controls': 0,
            'showinfo': 0,
            'rel': 0,
            'loop': 1,
            'enablejsapi': 1,
            'playlist': id3
        }
    });
    player = new YT.Player('player4', {
        height: '300',
        width: '400',
        videoId: id4,
        events: {
            'onReady': onPlayerReady
        },
         playerVars: {
            'controls': 0,
            'showinfo': 0,
            'rel': 0,
            'loop': 1,
            'enablejsapi': 1,
            'playlist': id4
        }
    });
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}

function showInfo(){
    document.getElementById('info').classList.toggle('show');
}

init();