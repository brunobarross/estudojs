const menuBtn = document.querySelector('.menu-icon');

function mostrarMenu(){
    const menu = document.querySelector(".menu");
    menu.classList.toggle('ativo');
}

menuBtn.addEventListener('click', mostrarMenu);

   
const carrrinho = document.querySelector('.img-cart')

function popUp(){
    const hoverCart = document.querySelector('.hoverCart');
    hoverCart.classList.toggle('ativarPopup');
}

carrrinho.addEventListener('click', popUp);