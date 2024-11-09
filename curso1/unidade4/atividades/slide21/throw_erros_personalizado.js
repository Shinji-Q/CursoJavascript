
function sum(val1, val2) {

    if(typeof val1 !== 'number' || typeof val2 !== 'number'){
        throw new TypeError('os valoers fornecidos devem ser numéricos');
    }

    return val1 + val2;
}

function divide(val1, val2) {
    if(typeof val1 !== 'number' || typeof val2 !== 'number'){
        throw new TypeError('os valoers fornecidos devem ser numéricos');
    }

    if(val2 === 0){
        if(val1 === 0){
            throw new Error('divisao 0/0 nao é determinada');
        }
        throw new Error('divisao por 0');
    }
}

try{
    console.log(sum(10, 20));
    console.log(divide(0,0));
} catch(error){
    console.error(error.message);
    console.error(error.name);
    console.error(error.stack);
}
