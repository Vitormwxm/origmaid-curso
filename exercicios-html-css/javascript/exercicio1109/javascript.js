const quadrados = document.querySelectorAll(".principal div")



function galeriaTrocar(event){
    const principal = document.querySelector(".quadrado-principal")
    const clicada = event.currentTarget
    const classPrincipal = className = " quadrado-principal span2";
    principal.className = clicada.className + classPrincipal;
    
    
    console.log(principal)
}


function galeriaClick(quadrado){
    quadrado.addEventListener("click" , galeriaTrocar)
}


quadrados.forEach(galeriaClick)
console.log(quadrados)