import { prisma } from "../Config/Database.js";

export class AlunoDAO {
    async listarTodos() {
        return await prisma.aluno.findMany({
            include: {
                usuario: true,
                matriculas: true,
                notas: true
            }
        });
    }

    async buscarPorId(id: number) {
        return await prisma.aluno.findUnique({
            where: { id },
            include: {
                usuario: true,
                matriculas: true,
                notas: true
            }
        });
    }

    async criar(dados: any) {
        return await prisma.aluno.create({
            data: {
                matricula: dados.matricula,
                dataNascimento: dados.dataNascimento,
                endereco: dados.endereco,
                usuario: {
                    create: {
                        nome: dados.nome,
                        email: dados.email,
                        senha: dados.senha,
                        telefone: dados.telefone,
                        tipo: "ALUNO"
                    }
                }
            }
        });
    }

    async atualizar(id: number, dados: any) {
        return await prisma.aluno.update({
            where: { id },
            data: {
                matricula: dados.matricula,
                dataNascimento: dados.dataNascimento,
                endereco: dados.endereco,
                usuario: {
                    update: {
                        nome: dados.nome,
                        email: dados.email,
                        senha: dados.senha,
                        telefone: dados.telefone
                    }
                }
            }
        });
    }

    async deletar(id: number) {
        return await prisma.aluno.delete({
            where: { id }
        });
    }
}
