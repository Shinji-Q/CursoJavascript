const op = require('./functions');

op.printarCoisa('algo pra ser escrito');


op.printarCoisa('input: 2')
op.printarCoisa(op.fazerAlgo(2));
op.printarCoisa('input: string')
op.printarCoisa(op.fazerAlgo('string'));
op.printarCoisa('input: true')
op.printarCoisa(op.fazerAlgo(true));
op.printarCoisa('input: obj')
op.printarCoisa(op.fazerAlgo({foo: 'bar'}));
op.printarCoisa('input: und')
op.printarCoisa(op.fazerAlgo(undefined));

