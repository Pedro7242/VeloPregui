import { Usuario } from './Usuario';

export class Aluno extends Usuario {
    #matricula: string;
    #endereco: string | null;
    #dataNascimento: Date | null;

    constructor(
        id: number,
        nome: string,
        email: string,
        senha: string,
        tipo: string,
        matricula: string,
        endereco: string | null = null,
        dataNascimento: Date | null = null,
        telefone: string | null = null
    ) {
        super(id, nome, email, senha, tipo, telefone);
        this.#matricula = matricula;
        this.#endereco = endereco;
        this.#dataNascimento = dataNascimento;
    }

    get matricula(): string {
        return this.#matricula;
    }

    set matricula(valor: string) {
        if (valor.trim() === "") {
            throw new Error("É necessário ter uma matrícula!");
        }
        this.#matricula = valor;
    }

    get endereco(): string | null {
        return this.#endereco;
    }

    set endereco(valor: string | null) {
        if (valor && valor.trim() === "") {
            throw new Error("O campo endereço deve estar preenchido!");
        }
        this.#endereco = valor;
    }

    get dataNascimento(): Date | null {
        return this.#dataNascimento;
    }

    set dataNascimento(valor: Date | null) {
        this.#dataNascimento = valor;
    }
}
