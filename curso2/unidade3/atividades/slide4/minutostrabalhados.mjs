export function calcularHorasTrabalhadas(entrada, saida) {
    const MILISEGUNDOS_POR_MINUTO = 60000;

    let diffMillis = saida.getTime() - entrada.getTime();
    return Math.floor(diffMillis/MILISEGUNDOS_POR_MINUTO);
}


export const formatterHoraDoDia = Intl.DateTimeFormat('pt-BR', {
    hourCycle: 'h23',
    hour: '2-digit',
    minute: '2-digit'
})
