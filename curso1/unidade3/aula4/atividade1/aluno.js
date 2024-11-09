

let aluno1 = {
    matricula: 20240301010019,
    nome: 'João das Couves',
    idade: 14,
    endereco: 'Itaquaquecetuba, Bairro do Logo Alí, Rua de baixo alí, nº 0',
    nota: 11.5,
    genero: 'M'
}

let keys = Object.keys(aluno1);

keys.forEach(key => {
    console.log(`tipo da variável ${key}: ${typeof aluno1[key]}`);
})
