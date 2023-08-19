function processData(input) {
    const linhas = input.trim().split('\n');
    const senhaCorreta = linhas[0];
    const senhaDigitada = linhas[1];

    let posicaoSenha = 0;

    for (let i = 0; i < senhaDigitada.length; i++) {
        if (senhaDigitada[i] === senhaCorreta[posicaoSenha]) {
            posicaoSenha++;
        }

        if (posicaoSenha === senhaCorreta.length) {
            console.log("SIM");
            return;
        }
    }

    console.log("NAO");
}
const input1 = "cubos\ncuggbyos";
const input2 = "cubos\newvelrabsocaeln";

processData(input1);
processData(input2);
