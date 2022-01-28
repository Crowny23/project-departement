const menu = document.getElementById('menu');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    menu.classList.toggle('show');
})

const mons = document.getElementById('mons')
const bati = document.getElementById('bati');
const domes = document.getElementById('domes');
const fusee = document.getElementById('fusee');
const bassin = document.getElementById('bassin');
const inexplore = document.getElementById('inexplore');
const voyage = document.getElementById('voyage')
const energie = document.getElementById('energie')
const cultivation = document.getElementById('cultivation')
const ciel = document.getElementById('ciel')
const btnplusmoins = document.getElementById('btnplusmoins');

mons.addEventListener('click', function(){
    mons.classList.toggle('zoom');
})
bati.addEventListener('click', function(){
    bati.classList.toggle('zoom');
})
domes.addEventListener('click', function(){
    domes.classList.toggle('zoom');
})
fusee.addEventListener('click', function(){
    fusee.classList.toggle('zoom');
})
bassin.addEventListener('click', function(){
    bassin.classList.toggle('zoom');
})
inexplore.addEventListener('click', function(){
    inexplore.classList.toggle('zoom');
})
voyage.addEventListener('click', function(){
    voyage.classList.toggle('zoom');
})
energie.addEventListener('click', function(){
    energie.classList.toggle('zoom');
})
cultivation.addEventListener('click', function(){
    cultivation.classList.toggle('zoom');
})
ciel.addEventListener('click', function(){
    ciel.classList.toggle('zoom');
})
