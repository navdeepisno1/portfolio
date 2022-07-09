function setLoadingScreen(state) {
    let res = (state == PAGE.LOADER.SHOW) ? "block" : "none";
    document.getElementById("loader-s").style.display = res;
}

function setBGM(src, state) {

    if (state == PAGE.BGM.PAUSE) {
        return;
    }

    var audio = new Audio(src);
    audio.loop = true;
    audio.play();
}

function setFullScreen(state) {
    if (state == PAGE.FULL_SCREEN.SHOW) {
        document.documentElement.requestFullscreen();
    }
}

function setMenu(state) {
    if (state == PAGE.MENU.SHOW) {
        document.getElementById("menu-perspective-holder").style.left = `0`;
    }
    else {
        document.getElementById("menu-perspective-holder").style.left = `-100%`;
    }
}