function somarValores(a, b, callback) {
    let s = a + b;
    callback(s);
}

let somaLambda = (a) => (callback) => (b) => callback(a + b);

somarValores(3, 5, somaLambda(8)(console.log));
