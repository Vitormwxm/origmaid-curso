

function livro(nome , ano , autor) {
    this.nome = nome.toUpperCase();
    this.ano = 2050 - ano;
    this.autor = autor;

    const frase = this.nome + 'por' + this.autor;

    return objectLivro = {
        nome: this.nome,
        ano: this.ano,
        autor: this.autor,
    }
}

retorno = livro('O senhor dos Aneis' , 1954 , 'J. R. R. Tolkien');
console.log(retorno);
console.log()