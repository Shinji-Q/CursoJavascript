let pessoa = {
    nome: 'João das Couves',
    nascimento: '1998-04-01',
    cidade: 'Nossa Senhora de Aparecida da Boa Vista',
    telefone: '(99) 99999-9999',
    genero: 'M',
    email: 'couvesjoao@bol.com'
}

for(prop in pessoa) {
    console.log(`${prop}: ${pessoa[prop]}`);
}
