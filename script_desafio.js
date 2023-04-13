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

// // DESAFIO 1 - ESCADA
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

  console.log(escada)

}

// Escada Diferente
function montaEscadaAdicao(numero) {

  const numeroInserido = verificaNumero(numero)

  let escada = "";

  for (i = 0; i < numeroInserido; i++) {

    for (j = 0; j <= numeroInserido; j++) {
      if (j <= numeroInserido - i - 1) {
        escada += " ";
      } else {
        escada += "#";
      }

      escada += "\n"

    }

    console.log(escada)

  }
}

// DESAFIO 3 - PIRAMIDE
function montaPiramide(numero) {

  const numeroInserido = verificaNumero(numero)

  let escada = "";

  for (i = 0; i < numeroInserido; i++) {

    for (j = 0; j < numeroInserido; j++) {
      if (j >= numeroInserido - i - 1) {
        escada += "#";
      }
      escada += " ";
    }

    escada += "\n"

  }

  console.log(escada)

}

// INSIRA UM NUMERO DE 1-10 ENTRE OS ()
montaEscada()
montaEscadaAdicao()
montaPiramide()


// DESAFIO 2 - SOMA DOS INTEIROS


// function numerosAnteriores(numero) {
//   const listaSomar = []
//   let contar = 1

//   for (i = 0; i < numero - 1; i++) {

//     contar++;

//   }

// }

// console.log(numerosAnteriores(7))


