import { Usuario } from "./Usuario.js";

export class Professor extends Usuario {
    #especialidade: string | null;

    constructor(
        id: number,
        nome: string,
        email: string,
        senha: string,
        tipo: string,
        especialidade: string | null = null,
        telefone: string | null = null
    ) {
        super(id, nome, email, senha, tipo, telefone);
        this.#especialidade = especialidade;
    }

    get especialidade(): string | null {
        return this.#especialidade;
    }

    set especialidade(valor: string | null) {
        if (valor && valor.trim() === "") {
            throw new Error("O campo especialidade não pode estar vazio!");
        }
        this.#especialidade = valor;
    }
}
