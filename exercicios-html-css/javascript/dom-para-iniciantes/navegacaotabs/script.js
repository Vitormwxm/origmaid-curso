
function initNavTab(){
// estou fazendo uma navegação por tabs, onde vou clicar em uma imagem e ela vai mostra 
// o conteudo
    const tabMenu = document.querySelectorAll(".js-tabImagem li");
    const tabContent = document.querySelectorAll(".js-tabContent section");

// essa função vai adicionar a classe ativo na section passada no index. 
// essa função também remove todas os tabContents com ativo na section

if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo")

    function activeTab (index) {
        tabContent.forEach((section) => {
            section.classList.remove("ativo")
        })
        tabContent[index].classList.add("ativo")
    }
}

// ao clicar no elemento ele vai executar o addEvent e chamar a função activeTab passando o index
tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
        activeTab(index)
    })
})
}


function initAcordionList() {
    const titleAccordion = document.querySelectorAll(".js-accordionList dt")
    if(titleAccordion.length) {
        titleAccordion[0].classList.add("ativo")
        titleAccordion[0].nextElementSibling.classList.add("ativo")

    function activeAccordion() {
        this.classList.toggle("ativo")
        this.nextElementSibling.classList.toggle("ativo")
        
    }

    titleAccordion.forEach((item) => {
        item.addEventListener('click' , activeAccordion)
    })
    }

}   

function InitscrollToView() {
    const link = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToview(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: 'smooth',
        })
    }

    link.forEach((item) => {
        item.addEventListener('click' , scrollToview)
    })
}

initNavTab();
initAcordionList();
InitscrollToView()