const img = document.querySelector("img");

 console.log(img.offsetTop);

 const allImgs = document.querySelectorAll("img");
 
 let imgValor = 0;

 allImgs.forEach((img , index) => {  
    
    let rect = img.getBoundingClientRect();
    imgValor = imgValor + rect.width ;

 })

 console.log(imgValor)

const links = document.querySelectorAll("a");

links.forEach((item) => {
  console.log(item.clientHeight);
  if(item.clientHeight < 42) {
    console.log("é menor que 42")
  }
})

const small = window.matchMedia('(max-width: 720px)').matches;


console.log(small)
if(small) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
} else {
  console.log("não é menor")
}