const list = document.querySelector('.list');
let item = [];
const c= document.querySelector('.co');
const cp= document.querySelector('.cop');
const p= document.querySelector('.pas');
const pp= document.querySelector('.pasp');
const i= document.querySelector('.icm');
const ip = document.querySelector('.icmp');
const a1 = document.querySelector('.a1');
const a1p = document.querySelector('.a1p');
function addToCart(x,y) {
console.log(x,y);
item.push(x + y);
}

function cart() {
    for (var i = 0; i < item.length; i++) {
        var text = item[i];
          var listItem = document.createElement("LI");
          listItem.textContent = text;
          list.appendChild(listItem);
        }
        console.log(text);
    let button= document.querySelector('#cart');
    if(!list.value){
        alert('Nothing is in the cart.');
    }else{
        button.style.display = 'none';
    }
    }
