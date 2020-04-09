var imgList = document.getElementsByClassName('img-list')[0].children;
var img = document.getElementsByClassName('img')[0];
for (let i = 0; i < imgList.length; i++) {
    imgList[i].onmouseover = function() {
        var index = i + 1;
        img.style.background = "url(img/sale/kongtiao" + index + ".jpg)";
        img.style.backgroundSize = "420px";
    }
}
var chooseUl = document.getElementsByClassName('choose')[0].getElementsByTagName('ul');
var chooseList = [];
for (let i = 0; i < chooseUl.length; i++) {
    chooseList[i] = chooseUl[i].getElementsByTagName('li');

}
for (let k = 0; k < chooseList.length; k++) {
    for (let i = 0; i < chooseList[k].length; i++) {
        chooseList[k][i].onclick = function() {
            for (let j = 0; j < chooseList[k].length; j++) {
                chooseList[k][j].style.border = "1px solid #aaa";

            }
            this.style.border = "1px solid #e4393c";
        }
    }
}

// 加入购物车
var addCarBtn = document.getElementsByClassName('add-car')[0];
var flyCon = document.createElement('div');
flyCon.style.width = "35px";
flyCon.style.height = "35px";
flyCon.style.backgroundImage = "url(img/sale/kongtiao1.jpg)";
flyCon.style.backgroundSize = "35px";

flyCon.style.position = "absolute";
flyCon.style.left = "100px";
flyCon.style.bottom = "50px";
flyCon.style.display = "none";

flyCon.style.transition = "all 2s ease-in";




addCarBtn.appendChild(flyCon);
addCarBtn.onclick = function() {
    flyCon.style.display = "block";
    setTimeout(function() {
        flyCon.style.bottom = "100px";
        flyCon.style.left = "700px";
        setTimeout(function() {
            flyCon.style.display = "none";
        }, 2000);
    }, 500);



}