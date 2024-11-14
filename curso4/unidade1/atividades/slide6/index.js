import chalk from 'chalk';


const destacar = chalk.hex("#0000FF").bgHex("#FFFF00")
const erro = chalk.hex("#FF0000").underline.bold;

console.log(chalk.blue('eita'));
console.log(erro('ERRO ERRO ERRO'));
console.log(`isso e um texto que tera uma parte ${destacar('destacada para sobressair')} ao resto`)
