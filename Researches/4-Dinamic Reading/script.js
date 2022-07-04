var frase = document.querySelector('#frase')
var resultado = document.querySelector('p#resultado')
var fraseSeparada = frase.innerHTML.split(" ")
var letrasNegrito = []
var letrasResto = []

for (var i = 0; i != fraseSeparada.length; i++) {
    letrasNegrito.push(fraseSeparada[i].split("").slice(0,Math.round(fraseSeparada[i].length / 2)))

    letrasResto.push(fraseSeparada[i].split("").slice(Math.round(fraseSeparada[i].length / 2)))
}

for (var numPalavras = 0; numPalavras != letrasNegrito.length; numPalavras++){
    for (var numCaracteres = 0; numCaracteres != letrasNegrito[numPalavras].length; numCaracteres++) {
        resultado.innerHTML += "<b>" + letrasNegrito[numPalavras][numCaracteres] + "</b>"
    }

    for (var numCaracteres = 0; numCaracteres != letrasResto[numPalavras].length; numCaracteres++) {
        resultado.innerHTML += (letrasResto[numPalavras][numCaracteres])
    }
    resultado.innerHTML += " "
}