import { prisma } from "../config/database.js";

export class NotaDAO {
    async listarTodos() {
        return prisma.nota.findMany({
            include: {
                aluno: { include: { usuario: true } },
                disciplina: {
                    include: {
                        curso: true,
                        professor: { include: { usuario: true } }
                    }
                }
            }
        });
    }

    async buscarPorId(id: number) {
        return prisma.nota.findUnique({
            where: { id },
            include: {
                aluno: { include: { usuario: true } },
                disciplina: {
                    include: {
                        curso: true,
                        professor: { include: { usuario: true } }
                    }
                }
            }
        });
    }

    async criar(dados: any) {
        return prisma.nota.create({
            data: dados,
            include: {
                aluno: { include: { usuario: true } },
                disciplina: true
            }
        });
    }

    async atualizar(id: number, dados: any) {
        return prisma.nota.update({ where: { id }, data: dados });
    }

    async deletar(id: number) {
        return prisma.nota.delete({ where: { id } });
    }
}
