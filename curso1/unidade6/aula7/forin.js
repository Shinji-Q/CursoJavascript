let arr = [1, 2, 3, 4, 5]

for(let index in arr) {
    console.log(index);
}


let obj = {foo: 'bar', fee: 'bor'}

for(let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
