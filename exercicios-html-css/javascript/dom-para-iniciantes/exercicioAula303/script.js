const img = document.querySelectorAll("img");
console.log(img);

const palavraImagem = document.querySelectorAll('[src^="img/imagem"]')

console.log(palavraImagem);

const linksInternos = document.querySelectorAll('a[href^="#"]')

console.log(linksInternos);

const primeiroH2 = document.querySelector(".animais-descricao section h2")

console.log(primeiroH2)

const ultimoP = document.querySelectorAll("p")

console.log(ultimoP[--ultimoP.length])