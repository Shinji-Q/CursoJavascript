import { calcularTempoDecorrido } from "./diasDecorridos.mjs";
import { calcularHorasTrabalhadas, formatterHoraDoDia } from "./minutostrabalhados.mjs";
import * as mstrings from "./manipulacaoDeStrings.mjs";

let declaracao = 'como é bom programar em javascript! :)'
let decPython = mstrings.substituirPalavra(declaracao, 'javascript', 'python');

console.log(declaracao);
console.log(decPython);
console.log('\n');


let sentenca = 'quantas palavras  há nessa    frase?';
console.log(sentenca);
console.log(mstrings.contarPalavras(sentenca));
console.log('\n');

let nome = "John Jonah Jameson";
console.log(nome);
console.log(mstrings.extrairInicias(nome));
console.log('\n');


sentenca = 'quantas vogais nesta sentença?';
console.log(sentenca);
console.log(mstrings.contarVogais(sentenca));
console.log('\n');

const dateFormatter = Intl.DateTimeFormat('pt-BR')

const data = new  Date('2024-10-08T09:00:00.000-0300');

console.log(`${calcularTempoDecorrido(data)} decorridos desde ${dateFormatter.format(data)}`);
console.log('\n')

const entrada = new  Date('2024-10-08T09:00:00.000-0300');
const saida = new Date('2024-10-08T17:30:00.000-0300');

console.log(`entrada: ${formatterHoraDoDia.format(entrada)}`);
console.log(`saida: ${formatterHoraDoDia.format(saida)}`);
console.log(`minutos trabalhados: ${calcularHorasTrabalhadas(entrada, saida)}`);
