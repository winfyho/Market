// (function() {
var carCon = document.getElementsByClassName('wraper')[0].children[1];
var itemList = carCon.children[0].children;
var deleteBtn = document.getElementsByClassName('delete-btn');
var totalMoney = 0;
var totalMoneyDom = document.getElementsByClassName('money')[0];

getCount();
for (let i = 0; i < deleteBtn.length; i++) {
    // deleteBtn[i].onclick = function() {
    //     deleteBtn[i].parentElement.remove();
    //     console.log(i + 1);
    // }
    deleteBtn[i].addEventListener('click', function() {
        var li = this.parentElement;
        li.style.opacity = 0;
        var thisSubTotal = li.children[4].firstChild.nodeValue;
        totalMoney -= thisSubTotal;
        totalMoneyDom.innerHTML = totalMoney;

        console.log(thisSubTotal);

        setTimeout(function() {
            li.remove();
        }, 400)
    })

}

function getCount() {
    for (let i = 0; i < itemList.length; i++) {
        var price = parseFloat(itemList[i].children[2].firstChild.nodeValue);
        var num = parseFloat(itemList[i].children[3].firstChild.nodeValue);
        var subtotal = price * num;
        totalMoney += subtotal;
        var subtotalDom = itemList[i].children[4];
        subtotalDom.innerHTML = subtotal;
    }
    totalMoneyDom.innerHTML = totalMoney;

}


// }())