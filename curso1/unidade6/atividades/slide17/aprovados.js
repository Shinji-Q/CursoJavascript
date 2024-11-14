let alunos = [
    { nome: 'João das Couves', ano: 7, notas: [9, 9, 8, 10] },
    { nome: 'José das Neves', ano: 7, notas: [7, 7, 7, 7.5] },
    { nome: 'Marisbela Souza', ano: 7, notas: [9, 9, 10, 10] },
    { nome: 'Francisco Lambarí', ano: 7, notas: [6, 8, 3, 2] },
    { nome: 'Ana Maria', ano: 7, notas: [5, 5, 10, 10] },
    //gerados com auxilio de IA
    { nome: 'Carlos Siqueira', ano: 6, notas: [8, 7, 8, 8.5] },
    { nome: 'Juliana Castro', ano: 8, notas: [9, 9, 10, 9] },
    { nome: 'Beatriz Mota', ano: 8, notas: [10, 10, 9, 9] },
    { nome: 'Renato Silva', ano: 7, notas: [6, 5, 6, 6] },
    { nome: 'Laura Costa', ano: 6, notas: [8, 9, 8.5, 9] },
    { nome: 'Bruno Oliveira', ano: 8, notas: [7, 8, 9, 7.5] },
    { nome: 'Felipe Santos', ano: 7, notas: [5, 6, 7, 6] },
    { nome: 'Amanda Sousa', ano: 6, notas: [9, 9, 9, 10] },
    { nome: 'Ricardo Mendes', ano: 7, notas: [8, 7, 6, 8] },
    { nome: 'Paula Martins', ano: 8, notas: [10, 10, 10, 9] },
    { nome: 'Luana Araújo', ano: 6, notas: [7, 7, 8, 8] },
    { nome: 'Pedro Guimarães', ano: 7, notas: [6, 5, 7, 6] },
    { nome: 'Camila Lima', ano: 8, notas: [9, 8, 8.5, 9] },
    { nome: 'Rafael Prado', ano: 7, notas: [5, 6, 5, 4] },
    { nome: 'Isabela Santos', ano: 6, notas: [8, 8.5, 9, 9] },
    { nome: 'Henrique Souza', ano: 7, notas: [7, 8, 7, 8] },
    { nome: 'Larissa Almeida', ano: 8, notas: [9, 9.5, 10, 10] },
    { nome: 'Vinícius Castro', ano: 6, notas: [7, 6, 7.5, 8] },
    { nome: 'Tatiana Melo', ano: 7, notas: [8, 8, 9, 8.5] },
    { nome: 'Eduardo Silva', ano: 8, notas: [6, 5, 7, 6] },
    { nome: 'Patrícia Nunes', ano: 7, notas: [9, 8, 10, 9.5] },
    { nome: 'Leonardo Borges', ano: 6, notas: [8, 8, 8.5, 8] },
    { nome: 'Fernanda Rocha', ano: 8, notas: [10, 9.5, 10, 9.5] },
    { nome: 'Gustavo Ribeiro', ano: 7, notas: [5, 6, 6, 7] },
    { nome: 'Bianca Cunha', ano: 6, notas: [7, 8, 7, 8] },
    { nome: 'Daniel Moreira', ano: 8, notas: [8, 9, 9.5, 8.5] },
    { nome: 'Gabriel Fonseca', ano: 7, notas: [6, 5.5, 7, 6.5] },
    { nome: 'Alice Farias', ano: 6, notas: [9, 8.5, 9, 9.5] },
    { nome: 'Rodrigo Teixeira', ano: 7, notas: [7, 7.5, 8, 7] },
    { nome: 'Sabrina Costa', ano: 8, notas: [9, 9, 9, 9.5] },
    { nome: 'André Batista', ano: 6, notas: [6, 7, 7.5, 6.5] },
    { nome: 'Clara Oliveira', ano: 7, notas: [8, 8.5, 9, 8] },
    { nome: 'Luiz Vargas', ano: 8, notas: [10, 9.5, 10, 10] },
    { nome: 'Yasmin Alves', ano: 6, notas: [8, 8, 8.5, 9] },
    { nome: 'Nicolas Santos', ano: 7, notas: [7, 7, 6, 8] },
    { nome: 'Tatiane Reis', ano: 8, notas: [9, 9, 9, 8.5] },
    { nome: 'Paulo Cesar', ano: 6, notas: [6, 6, 6.5, 7] },
    { nome: 'Eliane Figueiredo', ano: 7, notas: [8, 9, 9.5, 10] },
    { nome: 'Brenda Rocha', ano: 8, notas: [7, 8, 8.5, 8] },
    { nome: 'Márcio Lima', ano: 6, notas: [9, 8, 9, 9.5] },
    { nome: 'Helena Duarte', ano: 7, notas: [10, 9, 10, 10] },
    { nome: 'Fabio Fernandes', ano: 8, notas: [8, 8, 8.5, 8.5] },
    { nome: 'Marta Correia', ano: 6, notas: [7, 7.5, 7, 7.5] },
    { nome: 'Rita Pereira', ano: 7, notas: [6, 5.5, 5, 6] },
    { nome: 'Hugo Leite', ano: 8, notas: [9, 9, 9.5, 9.5] }
];

let aprovados = [];

for(let aluno of alunos) {

    let notas = aluno.notas;
    let soma = 0;

    for(let index in notas) {
        soma += notas[index];
    }

    aluno.media = soma/notas.length;
    if(aluno.media >= 7) {
        aprovados.push(aluno);
    }
}


console.log('aprovados:');
for(let aluno of aprovados) {
    console.log(`${aluno.nome}, media: ${aluno.media.toFixed(1)}`);
}
