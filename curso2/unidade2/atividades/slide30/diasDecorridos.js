function calcularTempoDecorrido(data) {
    const MILISEGUNDOS_POR_MINUTO = 60000;
    const MILISEGUNDOS_POR_HORA = MILISEGUNDOS_POR_MINUTO * 60;
    const MILISEGUNDOS_POR_DIA = MILISEGUNDOS_POR_HORA * 24;

    let tempoPassado = Date.now() - data.getTime();

    let minutos = Math.floor((tempoPassado % MILISEGUNDOS_POR_HORA)/MILISEGUNDOS_POR_MINUTO);
    let horas   = Math.floor((tempoPassado % MILISEGUNDOS_POR_DIA)/MILISEGUNDOS_POR_HORA);
    let dias    = Math.floor( tempoPassado/MILISEGUNDOS_POR_DIA);


    return `${dias}, ${horas}:${minutos}`;
}


const dateFormatter = Intl.DateTimeFormat('pt-BR')

const data = new  Date('2024-10-08T09:00:00.000-0300');

console.log(`${calcularTempoDecorrido(data)} decorridos desde ${dateFormatter.format(data)}`);
