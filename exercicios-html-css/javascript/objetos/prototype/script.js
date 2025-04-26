function Pessoa (nome , idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function () {
    return this.nome +' ' +  this.idade + ' Andou'
}

const pessoa1 = new Pessoa('vitor' , 16) 

