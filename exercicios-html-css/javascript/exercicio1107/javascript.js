const botao = document.querySelector("button");

function somar (){
    let div = document.querySelector("div");
    let valor = div.textContent;

    let soma = parseInt(valor) + 1 ;

    div.innerHTML = soma
};

if (botao) {
    botao.addEventListener("click" , somar);
}