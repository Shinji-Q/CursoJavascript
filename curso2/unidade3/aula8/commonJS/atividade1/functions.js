function printarCoisa(thing) {
    console.log(thing);
}

function fazerAlgo(arg) {

    if(arg === null) {
        return 'input nulo';
    }


    switch(typeof arg) {
        case 'undefined':
            return 'input indefinido';
        case 'number':
            return 2*arg;
        case 'string':
            return arg.split('').reverse().join('');
        case 'boolean':
            return !arg;
        case 'object':
            return JSON.stringify(arg);
        case 'function':
            return arg();
        default:
            return 'nao sei o que era';
    }

}

module.exports = {printarCoisa, fazerAlgo}
