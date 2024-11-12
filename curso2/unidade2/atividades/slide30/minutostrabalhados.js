function calcularHorasTrabalhadas(entrada, saida) {
    const MILISEGUNDOS_POR_MINUTO = 60000;

    let diffMillis = saida.getTime() - entrada.getTime();
    return Math.floor(diffMillis/MILISEGUNDOS_POR_MINUTO);
}


const dateFormatter = Intl.DateTimeFormat('pt-BR', {
    hourCycle: 'h23',
    hour: '2-digit',
    minute: '2-digit'
})

const entrada = new  Date('2024-10-08T09:00:00.000-0300');
const saida = new Date('2024-10-08T17:30:00.000-0300');

console.log(`entrada: ${dateFormatter.format(entrada)}`);
console.log(`saida: ${dateFormatter.format(saida)}`);
console.log(`minutos trabalhados: ${calcularHorasTrabalhadas(entrada, saida)}`);
