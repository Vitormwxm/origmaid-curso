function isNumber (numero) {
    if (typeof numero === "number") {
        var verifica = console.log("sim, é um número")
        return verifica
    } else {
        return console.log("não é um número")
    }
}

function perimetroQuadrado(lados) {
    var perimetro = lados * lados;
    return perimetro
}

console.log(perimetroQuadrado(10));

