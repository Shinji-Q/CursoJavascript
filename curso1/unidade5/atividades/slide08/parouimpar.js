let n = parseInt(prompt("informe um inteiro"));

let result = document.getElementById(`result`);


if(isNaN(n)){
    result.innerText = "número inválido";
}


if( !(n%2) ) {
    result.innerText = `${n} é par`;
}

if ( n%2 ){
    result.innerText = `${n} é impar`;
}
