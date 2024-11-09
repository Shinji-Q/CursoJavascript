function soma(a, b) {
    return a + b
}

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a*b;
}

function divisao(numerador, denominador){
    if(denominador === 0) {
        console.error("ERRO, DIVISAO POR ZERO");
        return NaN;
    }
    return numerador/denominador;
}

let somaAnon = function(a, b) {return a + b};

let subtracaoAnon = function(a, b) {return a - b;};

let multiplicacaoAnon = function(a, b) {return a * b};

let divisaoAnon = function(numerador, denominador) {
    if(denominador === 0) {
        console.error("ERRO, DIVISAO POR ZERO");
        return NaN;
    }
    return numerador/denominador;
};



let somaArrow = (a, b) => a + b;

let subtracaoArrow = (a, b) => a - b;

let multiplicacaoArrow = (a, b) => a * b;

let divisaoArrow = (numerador, denominador) => {
    if(denominador === 0) {
        console.error("ERRO, DIVISAO POR ZERO");
        return NaN;
    }
    return numerador/denominador;
};

function printOp(val1, val2, op, opName) {
    console.log(`${opName}(${val1},${val2}): ${op(val1,val2)}`);
}

printOp(5, 7, soma, 'soma');
printOp(5, 7, subtracao, 'subtracao');
printOp(5, 7, multiplicacao, 'multiplicacao');
printOp(5, 0, divisao, 'divisao');

console.log('----------------------Anonima--------------------');

printOp(5, 7, somaAnon, 'somaAnon');
printOp(5, 7, subtracaoAnon, 'subtracaoAnon');
printOp(5, 7, multiplicacaoAnon, 'multiplicacaoAnon');
printOp(5, 7, divisaoAnon, 'divisaoAnon');

console.log('----------------------Arrow----------------------');

printOp(5, 7, somaArrow, 'somaArrow');
printOp(5, 7, subtracaoArrow, 'subtracaoArrow');
printOp(5, 7, multiplicacaoArrow, 'multiplicacaoArrow');
printOp(5, 7, divisaoArrow, 'divisaoArrow');
