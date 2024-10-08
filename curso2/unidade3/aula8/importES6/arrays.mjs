export function filtrarPares(arr) {
    return arr.filter(el => el % 2 === 0);
}

export function dobrarVal(arr) {
    return arr.map(el => el*2);
}

export function somarVal(arr) {
    return arr.reduce((acc, el) => acc + el, 0);
}
