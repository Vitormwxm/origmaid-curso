
const menu = document.querySelector(".menu");

// calcula o tamanho do elemento , altura e padding 
console.log("client Height " + menu.clientHeight);

// calcula o tamanho do elemento levando em consideração, altura , padding e border
console.log("offsetHeight " + menu.offsetHeight);

// calcula o tamanho do elemento mesmo dentro de um scroll 
console.log("scrollHeight " + menu.scrollHeight);


// calcula a distância do elemento até o topo da página;
console.log("offsetTop " + menu.offsetTop );

// cacula a distâcia do elemento até seu lado esquerdo na página
console.log("offsetLeft " + menu.offsetLeft);

function aumetarDistancia(elemento, valor ) {
    let menuRect = elemento.getBoundingClientRect();
    let distancia = menuRect.height + valor;
    elemento.style.setProperty("margin-top" , distancia + "px")
};

function click() {
    console.log("clicado")
}

menu.addEventListener('click', click)

