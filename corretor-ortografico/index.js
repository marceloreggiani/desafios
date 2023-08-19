function processData(input) {
    input = input.trim();
    const primeiraLetra = input[0].toUpperCase();
    const restoTexto = input.substring(1).toLowerCase();

    if (input === input.toUpperCase()) {
        console.log(input.toLowerCase());
    } else if (primeiraLetra === primeiraLetra.toUpperCase() && input[1] === input[1].toUpperCase()) {
        console.log(primeiraLetra + restoTexto.toLowerCase());
    } else {
        console.log(input);
    }
}
processData("iMPRIMA A PALAVRA CORRIGIDA, cÃO CASO O aLGORITMo.tENHA DETECTADO(teXTO)// QUE ELA FOI ESCRITA COM cAPS lOCK ATIVO.");
processData(" vOCÊ ESTÁ DESENVOLVENDO UM FORMULÁRIO DE CADASTRO E NOS PRIMEIROS TESTES DE USABILIDADE COM USUÁRIOS REAIS NOTOU ALGO PECULIAR: mUITOS USUÁRIOS PREENCHEM O FORMULÁRIO TODO COM A TECLA cAPS lOCK ATIVA, DEIXANDO TUDO BEM MENOS AGRADÁVEL DE LER. a SOLUÇÃO ESCOLHIDA NO dAILY DO DIA SEGUINTE FOI DE DETECTAR QUANDO O USUÁRIO ESTÁ ESCREVENDO DESSA FORMA E CORRIGIR AUTOMATICAMENTE. vOCÊ DEVE AGORA ESCREVER ESSE ALGORITMO.");
processData("CAPS");
processData("pRIM-EIRA");
processData("PRImEira");
processData("cAPS"); // Saída: "Caps"
processData("lock"); // Saída: "lock"
processData("CAPS"); // Saída: "caps"