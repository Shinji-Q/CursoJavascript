function filtrarPares(numberArr = []) {
    return numberArr.filter(n => n%2 ===  0);
}

function multiplicarPorEscalar(vect, escalar) {
    return vect.map(n => n*escalar);
}

function contarOcorrencia(nArr, target) {
    return nArr.reduce((acc, n, index) => {
        if(n === target) 
            acc++;
        return acc}, 0);
}


let arr = [1, 2, 3, 4, 5, 6, 7, 7, 9, 8, 7];

let f =  filtrarPares(arr);
let arrx2 = multiplicarPorEscalar(arr, 2);
let setes = contarOcorrencia(arr, 7);

console.log(arr);
console.log(f);
console.log(arrx2);
console.log(setes);


arr[1] = 3;

console.log(arr);
console.log(f);
console.log(arrx2);
