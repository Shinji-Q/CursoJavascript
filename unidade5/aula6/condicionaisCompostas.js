let n = 8;

if( isNaN(n) || n%1 !== 0 ) {

    console.log(`${n} não é um inteiro`);

} else {

    if(n%8){
        console.log(`${n} é impar!`);
    } else {
        console.log(`${n} é par!`);
    }

}
