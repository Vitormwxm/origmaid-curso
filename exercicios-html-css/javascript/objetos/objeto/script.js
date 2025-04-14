function Carro(marca, preco , parcela ) {

        const taxa = {
            1: 1.1,
            2: 1.2,
            3: 1.3,
            4: 1.4,
            5: 1.5,
            6: 1.6,
        }
    const taxaAplicada = taxa[parcela] || 1;
    this.marca = marca;
    this.preco = preco * taxaAplicada;
    this.parcela = parcela;
}

//criando objetos com a palavra New
const honda = new Carro('Honda' , 50000, 6);
const fiat = new Carro('Fiat' , 30000 , 3);