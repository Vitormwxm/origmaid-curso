// estou fazendo uma navegação por tabs, onde vou clicar em uma imagem e ela vai mostra 
// o conteudo

const tabMenu = document.querySelectorAll(".js-tabImagem li");
const tabContent = document.querySelectorAll(".js-tabContent section");

// essa função vai adicionar a classe ativo na section passada no index. 
// essa função também remove todas os tabContents com ativo na section
function activeTab (index) {
    tabContent.forEach((section) => {
        section.classList.remove("ativo")
    })
    tabContent[index].classList.add("ativo")
}

// ao clicar no elemento ele vai executar o addEvent e chamar a função activeTab passando o index
tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
        activeTab(index)
    })
})