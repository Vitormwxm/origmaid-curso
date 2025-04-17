function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.andar = function() {
        console.log(this.nome + ' andou')
    }
}

const Joao = new Pessoa('João' , 25)


function Dom (seletor) {
    
    this.elements = function(){
        return document.querySelectorAll(seletor)
    }

    this.addClass = function(classe) {
        if(classe != undefined) {
            this.elements().forEach(function(element){
                return element.classList.add(classe)
            })
        } else {
            console.log('class is empty')
        }
       
    }

    this.removeClass = function(classe) {
        if(classe != undefined) {
            this.elements().forEach(function(element){
                element.classList.remove(classe)
            })
        }
 
    }
}

const li = new Dom('li')