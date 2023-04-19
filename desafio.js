// VERIFICAÇÃO DO NUMERO DE 1-10
function verificaNumero(numero) {
  if (numero > 10) {
    return 10
  }
  if (numero < 1) {
    return 1
  }
  return numero
}

// DESAFIO 1 - ESCADA
function montaEscada(numero) {

  const numeroInserido = verificaNumero(numero)


  let escada = "";

  for (i = 0; i < numeroInserido; i++) {

    for (j = numeroInserido; j >= 0; j--) {
      if (j <= i) {
        escada += "#";
      } else {
        escada += " ";
      }
    }

    escada += "\n"

  }

  return escada

}

// DESAFIO 2 - SOMA DOS INTEIROS

function numerosAnteriores(numero) {

  const listaSomar = []
  let contar = 0

  for (i = 0; i < numero - 1; i++) {
    contar++
    listaSomar.push(contar)
  }

  const somaFeita = listaSomar.reduce((acc, cur) => acc + cur, 0)

  return `A soma dos númenos menores que ${numero} é ${somaFeita}`

}

// DESAFIO 2 - SOMA DOS INTEIROS - simplificado

function somaNumerosAnteriores(numero) {

  let soma = 0

  for (let index = 0; index < numero; index++) {
    soma = soma + index
  }

  return `A soma dos numeros menores que ${numero} é ${soma}`

}

// DESAFIO 3 - PIRAMIDE
function montaPiramide(numero) {

  const numeroInserido = verificaNumero(numero)

  let piramide = "";

  for (i = 0; i < numeroInserido; i++) {

    for (j = 0; j < numeroInserido; j++) {
      if (j >= numeroInserido - i - 1) {
        piramide += "#";
      }
      piramide += " ";
    }

    piramide += "\n"

  }

  return piramide

}

// DESAFIO 4 - SOMA MATRIZES

const matrizA = [1000, 14, 156, 4, 216]
const matrizB = [1, 1, 16, 95, 26]
const matrizC = [10, 4, 6, 5, 16]
const matrizD = [100, 0, 56, 86, 6]

// const matrizUnificada = [matrizA, matrizB]
const matrizUnificada = matrizA.concat(matrizB, matrizC, matrizD)

const somaMatriz = matrizUnificada.reduce((acum, atual) => atual + acum, 0)

function somaMatrizTambem() {

  return matrizA.reduce((acum, atual) => atual + acum, 0) +
    matrizB.reduce((acum, atual) => atual + acum, 0) +
    matrizC.reduce((acum, atual) => atual + acum, 0) +
    matrizD.reduce((acum, atual) => atual + acum, 0)

}

// DESAFIO 5 - FIZZBUZZ

function fizzBuzz(numero) {
  for (contador = 1; contador <= numero; contador++) {
    if (contador % 3 === 0 && contador % 5 === 0) {
      console.log("FizzBuzz")
    } else if (contador % 3 === 0) {
      console.log("Fizz")
    } else if (contador % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(contador)
    }
  }
}

// INSIRA UM NUMERO DE 1 - 10 ENTRE OS()
// console.log(montaEscada(16))
// console.log(numerosAnteriores(16))
// console.log(somaNumerosAnteriores(16))
// console.log(montaPiramide(16))
// console.log(somaMatriz)
// console.log(somaMatrizTambem())
// console.log(fizzBuzz(16))


