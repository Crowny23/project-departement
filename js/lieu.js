const menu = document.getElementById('menu');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    menu.classList.toggle('show');
})

const lieumars = document.getElementById('lieumars');
let lieumarsChild = lieumars.childNodes;

lieumarsChild.forEach(element => {
    element.addEventListener('click', function(){
        element.classList.toggle('zoom');
    })    
});

