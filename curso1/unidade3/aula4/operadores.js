let soma = 5 + 2;
console.log(soma) // 7

let sub = 5 - 2;
console.log(sub) // 3

let mult = 5 * 2;
console.log(mult) // 10

let div = 5 / 2;
console.log(div) // 2.5

let mod = 5 % 2;
console.log(mod); // 3

let expo = 5**2;

console.log(expo); // 25

let n = 5;

n = n + 2;
n += 2;

n++; // retorna e depois incrementa
++n; // incrementa e depois retorna


// Operador de concatenação de strings(+)
//
let nome = 'João';
let sobrenome = 'das Couves';

let nomeCompleto = nome + ' ' + sobrenome

console.log(nomeCompleto) // João das Couves


// operadores relacionais

// igual a (==)
console.log(5=='5'); // true

// idêntico a (===)
console.log(5==='5'); // false

// difenrete de (!=)
console.log(5!='5'); // false

// não idêntico a (!==)
console.log(5!=='5'); // true

// maior que (>)
console.log(5 > 3) // true

// menor que (<)
console.log(5 < 3) // false

// maior ou igual a (<=)
console.log(5 >= 5) // true

// menor ou igual a (>=)
console.log(5 <= 3) // false



// Operadores lógicos
// And (&&)

console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false
// nota: se o primeiro valor for falso, o segundo não será avaliado
let obj = {}

console.log(obj.val !== undefined && obj.val); // false e sem erro
// console.log(obj.val) // ERRO!

obj.val = true
console.log(obj.val !== undefined && obj.val); // true

// Or (||)
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false
// nota: se o primeiro valor for verdadeiro, o segundo não será avaliado
