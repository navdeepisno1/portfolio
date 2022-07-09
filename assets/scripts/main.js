function startLoading() {
    setLoadingScreen(PAGE.LOADER.HIDE);
}

var viewportH = document.documentElement.clientHeight;
var viewportW = document.documentElement.clientWidth;

function startParallax(e) {
    var x = e.pageX;
    var y = e.pageY;

    x = viewportW / 2 - x;
    y = viewportH / 2 - y;

    x /= 100;
    y /= 100;

    var imgSoldier1 = document.getElementById("img-soldier-1");
    var imgSoldier2 = document.getElementById("img-soldier-2");
    var imgBackground = document.getElementById("img-background");

    imgSoldier1.style.transform = `translateX(${x}px) translateY(${y}px)`;

    x /= 2;
    y /= 2;
    imgSoldier2.style.transform = `translateX(-${x}px) translateY(-${y}px) scale(0.5) rotateY(180deg)`;
}

function enterHomePage() {
    document.getElementById("loader-s").style.display = "none";
    setBGM(PAGE.BGM.SOURCE, PAGE.BGM.PAUSE);
    setFullScreen(PAGE.FULL_SCREEN.SHOW);
}

function showAbout() {
    document.getElementById("menu-container").style.transform = `rotateY(45deg)`;
}
