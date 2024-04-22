let valores = []
let numero = ''
let limpar = false;

function adicionarValor(valor) {
    if(limpar){
        document.getElementById("resultado").innerText = ""; 
        limpar = false;
    }
    numero += valor.toString()
    console.log('Número digitado: ' + numero)
    document.getElementById("resultado").innerText += valor.toString();
}

function adicionarOperacao(operacao) {
    valores.push(numero.toString())
    valores.push(operacao)
    numero = ''
    console.log('Numero digitado: ' + valores[0])
    console.log('Operação: ' + valores[1]);
    document.getElementById("resultado").innerText += operacao.toString();
}

function resultado() {
    valores.push(numero.toString())
    let solucao = 0
    switch(valores[1]) {
        case '+':
            solucao = parseInt(valores[0]) + parseInt(valores[2]);
            break
        case '-':
            solucao = parseInt(valores[0]) - parseInt(valores[2]);
            break
        case '*':
            solucao = parseInt(valores[0]) * parseInt(valores[2]);
            break
        case '/':
            solucao = parseInt(valores[0]) / parseInt(valores[2]);
            break
        default:
            solucao = 'Selecione uma operação';
            break
    }
    console.log(valores, solucao);
    let resultadoDisplay = document.getElementById("resultado");
    resultadoDisplay.innerText = solucao;
    numero = '';
    valores = [];
    limpar = true;
}