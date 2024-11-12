

function somarArray(arr) {
    let sum = 0;

    for(let n of arr) {
        sum += n;
    }
    return sum;
}

console.log(somarArray([1, 2, 3, 4, 5]));

