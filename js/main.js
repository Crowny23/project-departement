const menu = document.getElementById('menu');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    menu.classList.toggle('show');
})

const boxs = document.getElementsByClassName('box-sizing1');
const btnplusmoins = document.getElementById('btnplusmoins');

btnplusmoins.addEventListener('click', function(){
    for(let i = 0; i < boxs.length; i++){
        boxs[i].classList.toggle('show');
    }
    if(btnplusmoins.innerHTML == 'Afficher plus ▼'){
        btnplusmoins.innerHTML = 'Afficher moins ▲';
    } else{
        btnplusmoins.innerHTML = 'Afficher plus ▼';
    }
})


