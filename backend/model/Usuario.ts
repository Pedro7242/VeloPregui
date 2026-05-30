export class Usuario {
    #id: number;
    #nome: string;
    #email: string;
    #senha: string;
    #telefone: string | null;
    #tipo: string;

    constructor(id: number, nome: string, email: string, senha: string, tipo: string, telefone: string | null = null) {
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
        this.#tipo = tipo;
        this.#telefone = telefone;
    }

    get id(): number {
        return this.#id;
    }

    get nome(): string {
        return this.#nome;
    }

    set nome(valor: string) {
        if (valor.trim().length < 3) {
            throw new Error("O nome precisa ter mais que 3 caracteres!");
        }
        this.#nome = valor;
    }

    get email(): string {
        return this.#email;
    }

    set email(valor: string) {
        if (!valor.includes("@")) {
            throw new Error("E-mail inválido! Precisa conter '@'.");
        }
        this.#email = valor;
    }

    get senha(): string {
        return this.#senha;
    }

    set senha(valor: string) {
        this.#senha = valor;
    }

    get telefone(): string | null {
        return this.#telefone;
    }

    set telefone(valor: string | null) {
        if (valor && valor.trim() === "") {
            throw new Error("O campo do telefone não pode estar vazio!");
        }
        this.#telefone = valor;
    }

    get tipo(): string {
        return this.#tipo;
    }

    set tipo(valor: string) {
        this.#tipo = valor;
    }
}
