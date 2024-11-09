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
let subtracaoArro = (a, b) => a - b;
let multiplicacaoArrow = (a, b) => a * b;
let divisaoArrow = (numerador, denominador) => {
    if(denominador === 0) {
        console.error("ERRO, DIVISAO POR ZERO");
        return NaN;
    }
    return numerador/denominador;
};

