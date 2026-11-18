let valores = []
let numero = ''
let limpar = false
let primeiroNum = true;
let solucao = 0

function adicionarValor(valor) {
    numero += valor.toString() 
    console.log('Número digitado: ' + numero)
    document.getElementById("resultado").innerText += valor.toString();
}

function adicionarOperacao(operacao) {
   
    if (primeiroNum == true) {
        valores[0] = numero.toString();
        primeiroNum = false;
        if (valores[0] == "") {
            valores[0] = 0;
            
        }
    } else if (valores[2] != "") {
        valores[2] = numero.toString();
        resultadoOperacao()
        valores[0] = solucao;
    }
    valores[1] = operacao
    numero = ''
    console.log('Numero digitado: ' + valores[0])
    console.log('Operação: ' + valores[1]);
    document.getElementById("resultado").innerText += operacao.toString();
}

function resultado() {
    let resultadoDisplay = document.getElementById("resultado");
    valores[2] = numero.toString()
    switch(valores[1]) {
        case '+':
            solucao = parseInt(valores[0]) + parseInt(valores[2]);
            break
        case '-':
            solucao = parseInt(valores[0]) - parseInt(valores[2]);
            break
        case 'x':
            solucao = parseInt(valores[0]) * parseInt(valores[2]);
            break
        case '/':
            solucao = parseInt(valores[0]) / parseInt(valores[2]);
            break
        default:
            solucao = 0;
            resultadoDisplay.innerText = 'NAN';
            break
    }
    console.log(valores, solucao);
    resultadoDisplay.innerText = solucao;
    valores[0] = solucao;
    console.log(valores, solucao);
}

function resultadoOperacao() {
    let resultadoDisplay = document.getElementById("resultado");
    valores[2] = numero.toString()
    switch(valores[1]) {
        case '+':
            solucao = parseInt(valores[0]) + parseInt(valores[2]);
            break
        case '-':
            solucao = parseInt(valores[0]) - parseInt(valores[2]);
            break
        case 'x':
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
    resultadoDisplay.innerText = solucao;
    delete valores[2];
}

function limparCampo() {
    let resultadoDisplay = document.getElementById("resultado");
    resultadoDisplay.innerText = '';
    numero = '';
    valores = [];
    primeiroNum = true;
}