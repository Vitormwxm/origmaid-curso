const botao = document.querySelector("button");

function somar (){
    let div = document.querySelector("div");
    let valor = div.textContent;

   

    if(valor < 10) {
        let soma = parseInt(valor) + 1 ;

        div.innerHTML = soma
    } else {
        console.log("não é possível mais adicionar")
    }
};

if (botao) {
    botao.addEventListener("click" , somar);
}