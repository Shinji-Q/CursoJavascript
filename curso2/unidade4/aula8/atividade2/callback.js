function somarExibir(a, b, callback) {
    callback(a+b);
}

let output = document.querySelector('div.result-card');

function writeToDoc(arg) {
    output.innerHTML = `
        <h3>Resultado:</h3>
        <p>${arg}</p>
    `;
}

let form = document.querySelector('form#simpleForm');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let n1 = parseInt(form.number1.value);
    let n2 = parseInt(form.number2.value);

    let opcaoDeExibicao = form.operation.value;

    let callbackFunc = ((op) => {
        switch(op) {
            case 'janela': return window.alert;
            case 'console': return console.log;
            default : return writeToDoc;
        }})(opcaoDeExibicao);

    somarExibir(n1, n2, callbackFunc);
})
