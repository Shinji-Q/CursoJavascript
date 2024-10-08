/**
 * @funciton
 * @param {string} str
 */
export function contarVogais(str) { 
    let vogais = 'aeiouAEIOU'.split('');

    return str.split('').filter(l => vogais.includes(l)).length;
}

/**
 * @funciton
 * @param {string} str
 */
export function verificarTamanho(str) {
    return str.length;
}

/**
 * @funciton
 * @param {string} str
 */
export function inverter(str) {
    return str.split('').reverse().join('');
}
