var pessoa = {
    nome: "vitor",
    sobrenome: "Martiniano",
    idade: 22,
    profissao: "Operador de Caixa",
    faculdade: true,

    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`; 
    }
}

console.log(pessoa.nomeCompleto()) ;

var carro = {
    preco: 1000,
    portas: 4,
    marca: "audi",
}

carro.preco = 3000;
console.log(carro.preco);