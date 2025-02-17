const button = document.querySelector('button');


function mostrar() {
    const texto = document.querySelector('.texto');
    texto.classList.toggle('ativar');
}

button.addEventListener("click" , mostrar);