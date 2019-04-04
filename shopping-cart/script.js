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
let item = [];

function addToCart(x, y) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode(y);
    span.className = "price";
    span.appendChild(txt);
    console.log(span.innerHTML);
    let result =x+(span.innerHTML);
    console.log(result);
    if (item.includes(x) === false) item.push(result);
}

function cart() {
    for (let i = 0; i < item.length; i++) {
        let text = item[i];
        let listItem = document.createElement("LI");
        listItem.textContent = text;
        list.appendChild(listItem);
    }
}