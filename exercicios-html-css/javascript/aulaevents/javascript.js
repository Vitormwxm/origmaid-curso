const button = document.querySelector('button');


function mostrar() {
    const texto = document.querySelector('.texto');
    texto.classList.toggle('ativar');
}

button.addEventListener("click" , mostrar);

const larguraTela = window.innerWidth;
function coordenadasMouse(event){
    const coordenadas = {
        x: event.x,
        y: event.y,
    }; 
    console.log(coordenadas)
}

window.addEventListener("mousemove" , coordenadasMouse)