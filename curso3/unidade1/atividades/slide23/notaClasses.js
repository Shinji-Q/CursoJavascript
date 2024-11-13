class Nota {
    /**
     * @param {string} disciplina 
     * @param {number} valor 
     */
    constructor(disciplina, valor){
        this.disciplina = disciplina;
        this.valor = valor;
    };
}

class CalculadoraDeMedia {
    constructor() {
        this.soma = 0;
        this.contagem = 0;
    }

    /**
     * @param {number} nota 
     */
    adcionarValor(valor) {
        this.soma += valor;
        this.contagem ++;
    }

    calcular() {
        if(this.contagem === 0)
            return 0;

        return this.soma/this.contagem;
    }
}

class Aluno {

    /**
     * @constructor
     * @param {string} nome 
     * @param {string} matricula 
     * @param {Nota[]} [notas=[]] 
     */
    constructor(nome, matricula, notas=[]){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    calcularMedias() {

        /** @type {Map<string, CalculadoraDeMedia} */
        let medias = new Map();

        this.notas.forEach(({disciplina, valor}) => {
            /** @type {CalculadoraDeMedia} */
            let media;

            if(medias.has(disciplina)) {
                media = medias.get(disciplina);
            } else {
                media = new CalculadoraDeMedia();
                medias.set(disciplina, media);
            }

            media.adcionarValor(valor);
        })

        let mediasObj = {};

        medias.forEach((media, key) => {
            mediasObj[key] = media.calcular();
        })

        return mediasObj;
    }
}

let aluno = new Aluno('Pedro de Nóbrega', '20240001');

aluno.notas.push(new Nota('L. Portuguesa', 8));
aluno.notas.push(new Nota('L. Portuguesa', 9.5));
aluno.notas.push(new Nota('L. Portuguesa', 10));
aluno.notas.push(new Nota('L. Portuguesa', 8.5));

aluno.notas.push(new Nota('Matemática', 8));
aluno.notas.push(new Nota('Matemática', 9.5));
aluno.notas.push(new Nota('Matemática', 10));
aluno.notas.push(new Nota('Matemática', 10));

aluno.notas.push(new Nota('Geografia', 7));
aluno.notas.push(new Nota('Geografia', 9.5));
aluno.notas.push(new Nota('Geografia', 8));
aluno.notas.push(new Nota('Geografia', 8));

console.log(aluno.calcularMedias());
