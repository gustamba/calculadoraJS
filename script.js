let valores = []
let numero = ''
let limpar = false
let solucao = 0

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
    if (valores.length > 2) {
        resultadoOperacao()
        valores[0] = solucao;
        delete valores[2]
    }
    valores[1] = operacao
    numero = ''
    console.log('Numero digitado: ' + valores[0])
    console.log('Operação: ' + valores[1]);
    document.getElementById("resultado").innerText += operacao.toString();
}

function resultado() {
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
    let resultadoDisplay = document.getElementById("resultado");
    resultadoDisplay.innerText = solucao;
    numero = '';
    valores = [];
    limpar = true;
}

function resultadoOperacao() {
    valores[2] = numero.toString()
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
}