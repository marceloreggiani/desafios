function solucao(min, max, valores) {
    const valoresAutorizados = [];
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] >= min && valores[i] <= max) {
            valoresAutorizados.push(valores[i]);
        }
    }
    console.log(valoresAutorizados);
}

solucao(10, 20, [9, 10, 15, 20, 12]);