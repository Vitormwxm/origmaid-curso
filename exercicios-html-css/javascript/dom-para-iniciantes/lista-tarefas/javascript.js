const input = document.querySelector("#addtask")
const lista = document.querySelector(".lista");

console.log(
    lista.parentElement);

function valorInput (Event) {
    let valorInput = input.value
    if(Event.key === "Enter") {
        let novoItem = document.createElement("li")
        novoItem.textContent = valorInput
        lista.appendChild(novoItem)

        input.value = "";
    }
}


input.addEventListener("keydown", valorInput)