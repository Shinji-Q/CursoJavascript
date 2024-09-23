let idade = parseInt(prompt("Digite a idade do indivíduo"));

let result = document.getElementById(`result`);


if(isNaN(idade)){
    result.innerText = "Idade inválida";
}


if( idade >= 18 && idade <= 120 ) {
    result.innerText = `O indivíduo é maior de idade`;
}

if (idade >= 0 && idade < 18){
    result.innerText = `O indivíduo é menor de idade`;
}

if(idade < 0){
    result.innerText = `O indivíduo ainda nem nasceu!`;
}

if(idade > 120){
    result.innerText = `O indivíduo está fazendo hora extra`;
}
