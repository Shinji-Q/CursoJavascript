
function filtrarPares(numberArr = []) {
    return numberArr.filter(n => n%2 ===  0);
}


let arr = [1, 2, 3, 4, 5, 6, 7];
let f =  filtrarPares(arr);

console.log(arr);
console.log(f);

arr[1] = 3;

console.log(arr);
console.log(f);
