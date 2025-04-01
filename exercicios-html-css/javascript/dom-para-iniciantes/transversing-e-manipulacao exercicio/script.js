const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const faq = document.querySelector(".faq-lista");
const animais = document.querySelector(".animais");

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu)

console.log(faq.firstElementChild); // selecionando primerio dt dentro de faq
console.log(faq.children[faq.children.length-1]);

faq.innerHTML = animais.innerHTML



