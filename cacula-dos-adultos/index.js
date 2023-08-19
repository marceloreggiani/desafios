function solucao(lista) {
    // seu codigo aqui
    let idadeMaisJovem = Infinity;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] >= 18 && lista[i] < idadeMaisJovem) {
            idadeMaisJovem = lista[i];
        }
    }
    if (idadeMaisJovem < Infinity) {
        console.log(idadeMaisJovem);
    } else {
        console.log("CRESCA E APARECA");
    }
}
solucao([8, 12, 17, 20, 9, 3, 5, 7])