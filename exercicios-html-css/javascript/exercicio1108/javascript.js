const links = document.querySelectorAll("nav a");
console.log(links)

function ativarLink(link){
    let href = link.href;
    let url = document.location.href
    console.log(href)

    if(href === url) {
        link.style.backgroundColor = "black";
        link.style.color = "white";
    }
}

links.forEach(ativarLink);