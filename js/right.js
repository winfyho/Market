var rightWraper = document.getElementsByClassName('right-wraper')[0];
var rightli = rightWraper.children[0].children;
var rightbox = document.getElementsByClassName('right-box');
// for (var i = 0; i < rightli.length; i++) {
//     rightli[i].onclick = function(){
//         // rightbox[i].style.display = "block";
//         console.log(i);
//     }
// }
for (var i = 0; i < rightli.length; i++) {
    (function(i) {
        rightli[i].onmouseover = function() {
            rightbox[i].style.display = "block";
        }
        rightli[i].onmouseout = function() {
            rightbox[i].style.display = "none";
        }
    }(i))
}
// rightli[0].onmouseover = function(){
//     rightbox[0].style.display = "block";
// }
// rightli[0].onmouseout = function(){
//     rightbox[0].style.display = "none";
// }