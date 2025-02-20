const links = document.querySelectorAll(".header-menu a");


function linkAtivar(link) {
    let url = location.href
    let href = link.href
    if(url.includes(href)){
        link.classList.add("ativo")
    }
}

links.forEach(linkAtivar)

//

const perguntas = document.querySelectorAll(".perguntas-list button")
console.log(perguntas)

function ativarPergunta(event){
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa")
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded" , ativa)
    console.log(controls);
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener("click" , ativarPergunta)
}

perguntas.forEach(eventosPerguntas);

//bicicletas

const galeria = document.querySelectorAll(".bicicletas-imagem img")
const galeriaContainer = document.querySelector(".bicicletas-imagem");


function trocarImagem(event) {
    const img = event.currentTarget;
    galeriaContainer.prepend(img)
}

function eventosGaleria(img) {
    img.addEventListener("click", trocarImagem)
}

galeria.forEach(eventosGaleria)

if(window.SimpleAnime){
    new SimpleAnime();
}
