/**
 * @param {number} a
 * @param {number} b
 * @returns {number} a soma
 */
function soma(a, b){
    return a+b;
}

/**
 * @param {number} peso peso em Kg
 * @param {number} altura a altura em metros
 * @returns {number} imc (Kg/m^2)
 */
function calcularIMC(peso, altura) {

    let resultado = peso/(altura**2);
    return resultado;

}

let somaTeste = soma(2, 5);
let imc = calcularIMC(60, 1.83);

console.log(`soma: ${somaTeste}`);
console.log(`IMC: ${imc.toFixed(2)}`);


// funcoes anonimas

let anon = function() {
    console.log(`funcao anonima!(mas com nome)`);
}

anon();

(function() {
    console.log(`funcao anonima apenas`);
})();

let t = new (function() {this.teste = 'isso é uma feature ou um erro de design?'})();
console.log(t.teste);


// arrow functions

let arrowAnon = () => {
    console.log('funcao anonima com seta!');
}

arrowAnon();

(() => {
    console.log(`funcao anonima arrow sem nome`)
})();

let somaArrow = (...numbers) => numbers.reduce((col, val) => col + val);

console.log(`soma arrow: ${somaArrow(1, 2, 3, 4, 5)}`);
