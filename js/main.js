const menu = document.getElementById('menu');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    menu.classList.toggle('show');
})

const bati = document.getElementById('bati1');
const domes = document.getElementById('domes1');
const fusee = document.getElementById('fusee1');
const btnplusmoins = document.getElementById('btnplusmoins');

btnplusmoins.addEventListener('click', function(){
    bati.classList.toggle('show');
    domes.classList.toggle('show');
    fusee.classList.toggle('show');
    if(btnplusmoins.innerHTML == 'Afficher plus'){
        btnplusmoins.innerHTML = 'Afficher moins';
    } else{
        btnplusmoins.innerHTML = 'Afficher plus';
    }
})
