function fibonacci() {
  let valorAnterior1 = 0;
  let valorAnterior2 = 1;
  let valor = 0;

  console.log(valorAnterior1);
  console.log(valorAnterior2);

  while (valor < 34) {
    valor = valorAnterior1 + valorAnterior2;

    valorAnterior1 = valorAnterior2;
    valorAnterior2 = valor;

    console.log(valor);
  }
}

fibonacci();
