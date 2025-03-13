const ativo = document.querySelectorAll(".menu ul li a");

ativo.forEach((item) => {
  item.classList.add("ativo");
})
console.log(ativo)

ativo.forEach((item, index) => {
  if(index == 0) {
    item.classList.add("ativo");
  } else {
    item.classList.remove("ativo");
  }
})
console.log(ativo)

const imagens = document.querySelectorAll("img");
console.log(imagens)

imagens.forEach((item) => {
  const containAlt = item.hasAttribute("alt")
  console.log(containAlt)
})

const link = document.querySelector('a[href^="http"]')
link.setAttribute("href" , "www.google.com")
console.log(link)


