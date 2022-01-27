const menu = document.getElementById('menu');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    menu.classList.toggle('show');
})

const fusee = document.getElementById('fusee');
const bassin = document.getElementById('bassin');
const inexplore = document.getElementById('inexplore');
const voyage = document.getElementById('voyage')
const energie = document.getElementById('energie')
const cultivation = document.getElementById('cultivation')
const ciel = document.getElementById('ciel')
const btnplusmoins = document.getElementById('btnplusmoins');


btnplusmoins.addEventListener('click', function(){
    fusee.classList.toggle('show');
    bassin.classList.toggle('show');
    inexplore.classList.toggle('show');
    voyage.classList.toggle('show');
    energie.classList.toggle('show');
    cultivation.classList.toggle('show');
    ciel.classList.toggle('show');
    if(btnplusmoins.innerHTML == 'Afficher plus ▼'){
        btnplusmoins.innerHTML = 'Afficher moins ▲';
    } else{
        btnplusmoins.innerHTML = 'Afficher plus ▼';
    }
})
