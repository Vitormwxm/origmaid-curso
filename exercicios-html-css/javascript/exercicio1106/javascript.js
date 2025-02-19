const circulo = document.querySelector(".circulo");

function mudar(event) {
    const coordenadas = {
       x: event.x,
       y: event.y,
    };

    circulo.style.top = coordenadas.y + "px";
    circulo.style.left = coordenadas.x + "px";

    console.log(coordenadas);
}

function aumentar() {
    circulo.style.width = 64 + "px";
    circulo.style.height = 64 + "px";
}


window.addEventListener("mousemove" , mudar)
window.addEventListener("click", aumentar);