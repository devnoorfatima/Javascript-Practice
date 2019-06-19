const imgSrc = ['./shots/1.png ', './shots/2.png', './shots/3.png', './shots/4.png', './shots/5.png',
    './shots/6.png', './shots/7.png', './shots/8.png', './shots/9.png', './shots/10.png', './shots/11.png', './shots/12.png'
]
const name = ['Shopping Cart', 'Calculators', 'Weather App', 'Javascript Quiz', 'Ajax Type Ahead',
    'Todo List', 'Random Quote Machine', 'Tomato Timer', 'HTML5 Canvas', 'Javascript Image Gallery', 'Indecision App', 'CSS Clock'
]

function addToPortfolio() {
    const portfolio = document.querySelector('#portfolio');
    const html = [];
    for (let i = 0; i < name.length; i++) {
        html.push(`
        <div class="col-md-4 portfolio-item">
            <img class="img-responsive shot" src="${imgSrc[i]}">
            <h4>${name[i]}</h4>
        </div>
        `)
    }
    portfolio.innerHTML = html.join('');
}
window.addEventListener('DOMContentLoaded',addToPortfolio);