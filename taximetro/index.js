function solucao(min, km) {
    const tarifaMinIni = 50;
    const tarifaMinDesc = 30;
    const tarifaKmInicial = 70;
    const tarifaKmDesc = 50;
    const limiteMinDesc = 20;
    const limiteKmDesc = 10;

    let valorTotal = 0;

    if (min <= limiteMinDesc && km <= limiteKmDesc) {
        valorTotal += min * tarifaMinIni;
        valorTotal += km * tarifaKmInicial;
    } else if (min > limiteMinDesc && km <= limiteKmDesc) {
        valorTotal += limiteMinDesc * tarifaMinIni;
        valorTotal += (min - limiteMinDesc) * tarifaMinDesc;
        valorTotal += km * tarifaKmInicial;
    } else if (min <= limiteMinDesc && km > limiteKmDesc) {
        valorTotal += min * tarifaMinIni;
        valorTotal += limiteKmDesc * tarifaKmInicial;
        valorTotal += (km - limiteKmDesc) * tarifaKmDesc;
    } else {
        valorTotal += limiteMinDesc * tarifaMinIni;
        valorTotal += (min - limiteMinDesc) * tarifaMinDesc;
        valorTotal += limiteKmDesc * tarifaKmInicial;
        valorTotal += (km - limiteKmDesc) * tarifaKmDesc;
    }
    console.log(valorTotal);
}
solucao(25, 11.5);


