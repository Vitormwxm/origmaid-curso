const list = document.querySelector(".animais-lista");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");
const menu = document.querySelector(".menu");
console.log(list.parentElement.parentElement.parentElement) // retorna HTML

console.log(list.previousElementSibling) // h1 título
console.log(list.nextElementSibling) // retorna o elemento abaixo de animais-lista 
console.log(list.children) // retorna todos os filhos de animais-lista
console.log(list.children[0]) // retorna o primeiro filho de animais-lista
console.log(list.children[list.children.length - 1]) // retorna o último filho de animais-lista

console.log(list.previousSibling) // retorna um node acima
console.log(list.nextSibling) // retorna um node abaixo
console.log(list.firstChild) // retorna o primerio filho node
console.log(list.lastChild) // retorna o primerio filho node

contato.appendChild(list);
contato.insertBefore(list , titulo) // list se torna filho de contato
contato.replaceChild(list, titulo); // substitui o titulo pela lista

const novoH1 = document.createElement('h1');

novoH1.innerText = 'Novo h1 Criado'
novoH1.classList.add('titulo')
contato.appendChild(novoH1)

const cloneh1 = novoH1.cloneNode(true);

menu.appendChild(cloneh1)
