
const links = document.querySelectorAll("a");
console.log(links)

const body = document.querySelectorAll("body")

function callBackBody(event) {
    event.target.remove();
    if(KeyboardEvent == 't') {
        
    }
}

body.forEach((item) => {
    item.addEventListener('click' , callBackBody)
}) 

function sizeText(event) {
    if (event.key.toLowerCase() === "t") {
         document.documentElement.style.fontSize = "120%"

    }
}

document.addEventListener("keydown" , sizeText)

function callBack(event) {
    event.preventDefault()
    let elementClicado = event.target;
    elementClicado.classList.toggle("ativo")
    console.log(elementClicado)
}

links.forEach((item) => {
    item.addEventListener('click' , callBack);
})





