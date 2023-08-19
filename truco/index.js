function solucao(carta) {
    const cartasViradas = ["Q", "J", "K", "A", "2", "3"];
    const manilhas = ["J", "K", "A", "2", "3", "Q"];

    const posicao = cartasViradas.indexOf(carta);
    if (posicao !== -1) {
        const manilha = manilhas[posicao];
        console.log(manilha);
    }
}

const cartaParaCima = "K";
solucao(cartaParaCima);
