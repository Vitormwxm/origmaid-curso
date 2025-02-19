const links = document.querySelectorAll(".header-menu a");


function linkAtivar(link) {
    let url = location.href
    let href = link.href
    if(url.includes(href)){
        link.classList.add("ativo")
    }
}

links.forEach(linkAtivar)
