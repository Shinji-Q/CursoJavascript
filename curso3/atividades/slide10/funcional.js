const perfis = [
    {nome: 'Jeca Tatu', idade: 28, telefone: '(31) 3232-3232', email: 'tatu@yahoo.com'},
    {nome: 'Felipe Almeida', idade: 29, telefone: '(61) 98765-4321', email: 'felipe.almeida@yahoo.com'},
    {nome: 'Ricardo Nunes', idade: 30, telefone: '(31) 93210-4567', email: 'ricardo.nunes@terra.com.br'},
    {nome: 'Fernanda Santos', idade: 15, telefone: '(85) 98765-4321', email: 'fernanda.santos@uol.com.br'},
    /*
    {nome: 'Rafael Lima', idade: 35, telefone: '(31) 97654-3210', email: 'rafael.lima@outlook.com'},
    {nome: 'Maria Silva', idade: 19, telefone: '(11) 98456-7890', email: 'maria.silva@gmail.com'},
    {nome: 'Luiza Carvalho', idade: 28, telefone: '(19) 95678-1234', email: 'luiza.carvalho@gmail.com'},
    {nome: 'Juliana Souza', idade: 23, telefone: '(27) 91234-5678', email: 'juliana.souza@gmail.com'},
    {nome: 'Aline Castro', idade: 17, telefone: '(71) 93456-7890', email: 'aline.castro@hotmail.com'},
    {nome: 'Lucas Mendes', idade: 36, telefone: '(48) 95678-1234', email: 'lucas.mendes@gmail.com'},
    {nome: 'Vanessa Rocha', idade: 24, telefone: '(81) 94567-8901', email: 'vanessa.rocha@uol.com.br'},
    {nome: 'Elaine Nascimento', idade: 14, telefone: '(13) 94321-5678', email: 'elaine.nascimento@outlook.com'},
    {nome: 'Tatiane Gonçalves', idade: 18, telefone: '(85) 91234-5678', email: 'tatiane.goncalves@uol.com.br'},
    {nome: 'Sabrina Vieira', idade: 18, telefone: '(51) 92345-6789', email: 'sabrina.vieira@hotmail.com'},
    {nome: 'Carlos Oliveira', idade: 40, telefone: '(21) 91234-5678', email: 'carlos.oliveira@hotmail.com'},
    {nome: 'Priscila Ramos', idade: 21, telefone: '(47) 91234-5678', email: 'priscila.ramos@gmail.com'},
    {nome: 'Eduardo Ferreira', idade: 34, telefone: '(85) 94321-5678', email: 'eduardo.ferreira@outlook.com'},
    {nome: 'Camila Santos', idade: 27, telefone: '(21) 95678-1234', email: 'camila.santos@gmail.com'},
    {nome: 'Marcelo Lopes', idade: 16, telefone: '(31) 96543-2109', email: 'marcelo.lopes@uol.com.br'},
    {nome: 'Bianca Farias', idade: 22, telefone: '(41) 97865-4321', email: 'bianca.farias@hotmail.com'},
    {nome: 'Diego Martins', idade: 37, telefone: '(27) 91234-5678', email: 'diego.martins@gmail.com'},
    {nome: 'Renata Moreira', idade: 31, telefone: '(13) 93456-7890', email: 'renata.moreira@uol.com.br'},
    {nome: 'Thiago Souza', idade: 19, telefone: '(83) 96789-1234', email: 'thiago.souza@gmail.com'},
    {nome: 'Ana Paula', idade: 26, telefone: '(31) 95678-4321', email: 'ana.paula@terra.com.br'},
    {nome: 'Leonardo Mendes', idade: 33, telefone: '(61) 94567-8901', email: 'leonardo.mendes@gmail.com'},
    {nome: 'Bruno Costa', idade: 39, telefone: '(19) 98765-1234', email: 'bruno.costa@yahoo.com'},
    {nome: 'Carolina Reis', idade: 25, telefone: '(85) 92345-6789', email: 'carolina.reis@outlook.com'},
    {nome: 'Rodrigo Teixeira', idade: 14, telefone: '(71) 94321-5678', email: 'rodrigo.teixeira@gmail.com'},
    {nome: 'Patrícia Correia', idade: 38, telefone: '(81) 98765-4321', email: 'patricia.correia@uol.com.br'},
    {nome: 'Maurício Cardoso', idade: 20, telefone: '(21) 91234-5678', email: 'mauricio.cardoso@hotmail.com'},
    {nome: 'André Silva', idade: 32, telefone: '(13) 93456-7890', email: 'andre.silva@terra.com.br'},
    {nome: 'Jéssica Rocha', idade: 24, telefone: '(41) 97865-4321', email: 'jessica.rocha@gmail.com'},
    {nome: 'Guilherme Amaral', idade: 40, telefone: '(31) 94567-8901', email: 'guilherme.amaral@yahoo.com'},
    {nome: 'Flávia Barbosa', idade: 23, telefone: '(27) 92345-6789', email: 'flavia.barbosa@hotmail.com'},
    {nome: 'Roberto Costa', idade: 35, telefone: '(61) 96789-1234', email: 'roberto.costa@gmail.com'},
    {nome: 'Luciana Souza', idade: 29, telefone: '(83) 96543-2109', email: 'luciana.souza@gmail.com'},
    {nome: 'Douglas Pereira', idade: 30, telefone: '(47) 98765-4321', email: 'douglas.pereira@terra.com.br'},
    {nome: 'Bruna Fernandes', idade: 39, telefone: '(48) 95678-1234', email: 'bruna.fernandes@gmail.com'},
    {nome: 'João Costa', idade: 34, telefone: '(51) 94567-8901', email: 'joao.costa@uol.com.br'},
    {nome: 'Michele Souza', idade: 21, telefone: '(19) 93456-7890', email: 'michele.souza@gmail.com'},
    {nome: 'Daniel Almeida', idade: 28, telefone: '(71) 92345-6789', email: 'daniel.almeida@hotmail.com'},
    {nome: 'Viviane Martins', idade: 25, telefone: '(61) 97865-4321', email: 'viviane.martins@uol.com.br'},
    {nome: 'Pedro Correia', idade: 36, telefone: '(85) 94567-8901', email: 'pedro.correia@gmail.com'},
    {nome: 'Simone Lima', idade: 17, telefone: '(11) 91234-5678', email: 'simone.lima@outlook.com'},
    {nome: 'Fernando Oliveira', idade: 30, telefone: '(47) 98765-4321', email: 'fernando.oliveira@gmail.com'},
    {nome: 'Lívia Ribeiro', idade: 20, telefone: '(13) 95678-1234', email: 'livia.ribeiro@terra.com.br'},
    {nome: 'Nelson Duarte', idade: 37, telefone: '(21) 94321-5678', email: 'nelson.duarte@hotmail.com'},
    {nome: 'Roberta Farias', idade: 16, telefone: '(19) 96543-2109', email: 'roberta.farias@uol.com.br'},
    {nome: 'Alex Santos', idade: 32, telefone: '(61) 98765-4321', email: 'alex.santos@gmail.com'}
    */
];


const filtrarMaioresDeIdade = (lista) => {
    return lista.filter(perfil => perfil.idade >= 18);
}

const exibirDadosBasicos = (lista) => {
    return lista.map(perfil =>{
        let {email: _email, telefone: _telefone, ... dadosBase} = perfil;
        return dadosBase;
    });
}

const ordernarPorIdade = lista => {
    return lista.sort((a, b) => a.idade - b.idade);
}

const calcularMediaDeIdade = lista => {
    let {soma, contador} = lista.reduce((acc, perfil) => {
        acc.soma += perfil.idade;
        acc.contador++;
        return acc;
    }, {soma: 0, contador: 0});
    return soma/contador;
}

const calcularMediaDeFiltrados = lista => {
    return calcularMediaDeIdade(filtrarMaioresDeIdade(lista));
}

let maiores = filtrarMaioresDeIdade(perfis);
//console.log(maiores);

let dadosBasicos = exibirDadosBasicos(perfis); 

//console.log(dadosBasicos);

let listaOrdenada = ordernarPorIdade(perfis);

let media = calcularMediaDeIdade(perfis);

let mediaMaiores = calcularMediaDeFiltrados(perfis);


// console.log(listaOrdenada);
//console.log(media);

console.log(mediaMaiores);

