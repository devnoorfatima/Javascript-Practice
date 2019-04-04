const list = document.querySelector('.list');
const c = document.querySelector('.co');
const cp = document.querySelector('.cop');
const p = document.querySelector('.pas');
const pp = document.querySelector('.pasp');
const i = document.querySelector('.icm');
const ip = document.querySelector('.icmp');
const a1 = document.querySelector('.a1');
const a1p = document.querySelector('.a1p');
const zm = document.querySelector('.zm');
const zmp = document.querySelector('.zmp');
const lt = document.querySelector('.lt');
const ltp = document.querySelector('.ltp');
const ld = document.querySelector('.ld');
const ldp = document.querySelector('.ldp');
const lc = document.querySelector('.lc');
const lcp = document.querySelector('.lcp');
const tf = document.querySelector('.tf');
const tfp = document.querySelector('.tfp');
const ms = document.querySelector('.ms');
const msp = document.querySelector('.msp');
const br = document.querySelector('.br');
const brp = document.querySelector('.brp');
const rg = document.querySelector('.rg');
const rgp = document.querySelector('.rgp');

const products = {
    1: {
        "name": 'cooking oil',
        "price": '175.0'
      },
      2:{
        "name": 'Jooti',
        "price": '15.0'
      }
}
let item = [];



function addToCart(x, y) {
    const span = `<span class="price">${products[x].price}</span>`
    const result = products[x].name + " " + span;
    console.log(result);
    if (item.includes(products[x]) === false) item.push(result);
}

function cart() {
    list.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
        let text = item[i];
        let listItem = document.createElement("LI");
        listItem.innerHTML = text;
        list.appendChild(listItem);
    }
}