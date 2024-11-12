// 1
function substituirPalavra(frase, palavra, novaPalavra) {
    return frase.replace(palavra, novaPalavra);
}


let declaracao = 'como é bom programar em javascript! :)'
let decPython = substituirPalavra(declaracao, 'javascript', 'python');

console.log(declaracao);
console.log(decPython);
console.log('\n');


// 2

function contarPalavras(frase) {
    return frase.split(' ').filter(palavra => palavra !== '').length;
}

let sentenca = 'quantas palavras  há nessa    frase?';
console.log(sentenca);
console.log(contarPalavras(sentenca));
console.log('\n');

// 3

function extrairInicias(nomeCompleto) {
    return nomeCompleto.split(' ').filter(nome => nome !== '')
        .map(nome => nome.charAt(0).toUpperCase() + '.')
        .reduce((acc, inicial) => acc.concat(inicial), '');
}

let nome = "John Jonah Jameson";
console.log(nome);
console.log(extrairInicias(nome));
console.log('\n');

// 4

function contarVogais(str) {
    const vogais = 'aeiou';
    return str.split('').filter(letra => vogais.includes(letra)).length;
};


sentenca = 'quantas vogais nesta sentença?';
console.log(sentenca);
console.log(contarVogais(sentenca));
console.log('\n');
