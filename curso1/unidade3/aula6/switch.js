let dia = 7;


switch(dia%7) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3:
        console.log('Terça');
        break;
    case 4:
        console.log('Quarta');
        break;
    case 5:
        console.log('Quina');
        break;
    case 6:
        console.log('Sexta');
        break;
    case 0:
        console.log('Sábado');
        break;
}

function diaDaSemana(n) {
    switch(n%7) {
        case 1:
            return 'Domingo';
        case 2:
            return 'Segunda';
        case 3:
            return 'Terça';
        case 4:
            return 'Quarta';
        case 5:
            return 'Quina';
        case 6:
            return 'Sexta';
        case 0:
            return 'Sábado';
    }
}


console.log(diaDaSemana(8));
