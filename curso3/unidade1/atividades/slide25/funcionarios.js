class Funcionario {

    nome;
    cpf;
    email;

    constructor(name, cpf, email) {
        this.nome = name;
        this.cpf = cpf;
        this.email = email;
    }

    /**
     * @returns {number}
     */
    calcularSalario() {
        throw new Error("uninplemented method");
    }
}

class FuncionarioHorista extends Funcionario {
    valorHora;
    horasTrabalhadas;

    constructor(nome, cpf, email, valorHora, horasTrabalhadas = 0) {
        super(nome, cpf, email);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }

    calcularSalario() {
        return this.valorHora*this.horasTrabalhadas;
    }
}

class FuncionarioMensalista extends Funcionario {
    salarioMensal;
    mesesTrabalhados;
    descontoPercentual;

    constructor(nome, cpf, email, salarioMensal, descontoPercentual, mesesTrabalhados=0) {
        super(nome, cpf, email);
        this.salarioMensal = salarioMensal;
        this.mesesTrabalhados = mesesTrabalhados;
        this.descontoPercentual = descontoPercentual;
    }

    calcularSalario() {
        return (this.salarioMensal*this.mesesTrabalhados) * (1 - this.descontoPercentual/100);
    }
}

/**
 * @param {Funcionario} funcionario 
 */
function exibirSalario(funcionario) {
    console.log(`salário total dado à ${funcionario.nome} deve ser de: R$ ${funcionario.calcularSalario().toFixed(2)}`)
}

let funcionarioMensalista = new FuncionarioMensalista('João das Couves', '999.999.999-99', 'dascouves@bol.com', 4000, 10, 2);
let funcionarioHorista = new FuncionarioHorista('José Tilápia', '888.888.888-88', 'tilapiadoze@gmail.com', 20, 8*20*2);

exibirSalario(funcionarioMensalista);
exibirSalario(funcionarioHorista);
