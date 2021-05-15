const menuBtn = document.querySelector('.menu-icon');

function mostrarMenu(){
    document.body.classList.toggle('ativo');
}

menuBtn.addEventListener('click', mostrarMenu);

   