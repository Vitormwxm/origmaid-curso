class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }

    apresentar() {
        console.log(`oi meu nome é ${this.nome} tenho ${this.idade} anos e minha profissão é ${this.profissao}`)
    }
}

const vitor = new Pessoa('vitor', 25, 'desenvolvedor')


class Carrinho {
    constructor() {
       
        this.produtos = []
    }

    total() {
        let totalPrice = 0
        this.produtos.forEach(produto =>{
            totalPrice += produto.preco * produto.quantidade
        });
        return totalPrice
    }

    adicionarProduto(nome, preco , quantidade){
        const produto = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }
        this.produtos.push(produto)
    }

    resumo() {
        this.produtos.forEach( produto => {
            let subtotal = produto.preco * produto.quantidade
            console.log(`${produto.nome} ${produto.quantidade}x - R$${subtotal} `)
        })
        console.log("total = " + this.total())

    }

}

const carrinho = new Carrinho(); 

carrinho.adicionarProduto('maca', 3, 5);
carrinho.adicionarProduto('banana', 4, 5);

