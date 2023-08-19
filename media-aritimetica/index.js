function solucao(lista) {
    //seu codigo aqui
    let valor = 0;
    for (let i = 0; i < lista.length; i++) {
        valor += lista[i];
    }
    console.log(valor / lista.length);
}
solucao([4, 5, 6]);
