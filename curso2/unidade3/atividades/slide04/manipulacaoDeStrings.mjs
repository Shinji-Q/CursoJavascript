// 1
export function substituirPalavra(frase, palavra, novaPalavra) {
    return frase.replace(palavra, novaPalavra);
}

// 2

export function contarPalavras(frase) {
    return frase.split(' ').filter(palavra => palavra !== '').length;
}

// 3

export function extrairInicias(nomeCompleto) {
    return nomeCompleto.split(' ').filter(nome => nome !== '')
        .map(nome => nome.charAt(0).toUpperCase() + '.')
        .reduce((acc, inicial) => acc.concat(inicial), '');
}

// 4

export function contarVogais(str) {
    const vogais = 'aeiou';
    return str.split('').filter(letra => vogais.includes(letra)).length;
};
