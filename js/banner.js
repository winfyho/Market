var banner = document.getElementsByClassName('banner')[0];
var bannerBox = banner.children[0];

var pos = 900;
var posIndex = 0;
var nowPos = 0;

var nowp = 0;
var numBox = document.getElementsByClassName('num-box')[0];
var numBoxList = numBox.children;


Init();

function Init() {
    autoImg();
    numBoxList[0].style.backgroundColor = "#aaa";
}



function autoImg() { //自动轮播
    var timer = setInterval(func, 1200);
}

function func() {
    nowPos = posIndex * pos;
    bannerBox.style.left = -nowPos + 'px';
    changeNum(posIndex);
    posIndex++;
    if (posIndex > 3) {
        posIndex = 0;
    }
}

function changeNum(index) {

    for (var i = 0; i < numBoxList.length; i++) {
        numBoxList[i].style.backgroundColor = "#e3e3e3";
    }

    numBoxList[index].style.backgroundColor = "#aaa";
}