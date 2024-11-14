class Carro {
    marca;
    modelo;
    #velocidade;
    #direcao = 1;

    #ACELERACAO = 5;
    #FRENAGEM = 5;

    constructor(marca, modelo, velocidade = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.#velocidade =velocidade;
    }

    ativarReverso(){
        if(this.velocidade > 10) {
            throw new Error('Marcha ré ativada enquanto o carro se movia rapidamente para frente, o carro quebrou :(');
        }
        console.log('ré ativada')

        this.#direcao = -1;
    }

    desativarReverso(){
        if(this.velocidade < -10) {
            throw new Error('Marcha ré desativada enquanto o carro se movia rapidamente para trás, o carro quebrou :(');
        }

        this.#direcao = 1;
    }

    acelerar() {
        this.#velocidade += this.#ACELERACAO * this.#direcao;
        console.log(`vrumm(${this.velocidade} km/h)`)
    }

    frear() {
        if(this.#parado()){
            console.log(`*nada acontece*`);
            return;
        }

        this.#reduzirVelocidade();
        console.log(`shhhhhh(${this.velocidade} km/h)`)
    }

    #parado() {
        return this.#velocidade === 0;
    }

    #reduzirVelocidade() {
        if(Math.abs(this.#velocidade) < this.#FRENAGEM) {
            this.#velocidade = 0;
            return;
        }

        this.#velocidade -= this.#FRENAGEM * this.sentidoAtual;
    }

    get velocidade() {
        return this.#velocidade;
    };

    get sentidoAtual() {
        if(this.velocidade === 0)
            return 0;
        return this.velocidade / Math.abs(this.velocidade);
    }
}

let carro = new Carro("volvo", "volvo");
console.log(carro.velocidade);
console.log(carro.sentidoAtual);

carro.frear();

carro.acelerar();
carro.acelerar();
carro.acelerar();

console.log(carro.velocidade);
console.log(carro.sentidoAtual);

carro.frear();
carro.frear();
carro.frear();
carro.frear();

console.log(carro.velocidade);
console.log(carro.sentidoAtual);

carro.ativarReverso();

carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();

console.log(carro.velocidade);
console.log(carro.sentidoAtual);

carro.frear();
carro.desativarReverso();

console.log(carro.velocidade);
console.log(carro.sentidoAtual);
