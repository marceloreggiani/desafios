function processData(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const pontosPessoas = [];

    for (let i = 1; i <= n; i++) {
        const [x, y] = lines[i].split(' ').map(parseFloat);
        pontosPessoas.push([x, y]);
    }

    function calcularDistancia(x1, y1, x2, y2) {
        return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
    }

    let maiorDistancia = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const distancia = calcularDistancia(pontosPessoas[i][0], pontosPessoas[i][1], pontosPessoas[j][0], pontosPessoas[j][1]);
            if (distancia > maiorDistancia) {
                maiorDistancia = distancia;
            }
        }
    }

    console.log(maiorDistancia.toFixed(15));
}
const input = `5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7`;
processData(input);

