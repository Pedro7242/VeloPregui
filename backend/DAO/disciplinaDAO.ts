import { prisma } from "../config/database.js";

const includeDisciplina = {
    curso: true,
    professor: {
        include: {
            usuario: true
        }
    },
    matriculas: {
        include: {
            aluno: {
                include: {
                    usuario: true
                }
            }
        }
    },
    notas: true,
    frequencias: true
};

export class DisciplinaDAO {
    async listarTodos() {
        return prisma.disciplina.findMany({
            include: includeDisciplina
        });
    }

    async buscarPorId(id: number) {
        return prisma.disciplina.findUnique({
            where: { id },
            include: includeDisciplina
        });
    }

    async criar(dados: any) {
        return prisma.disciplina.create({
            data: dados,
            include: includeDisciplina
        });
    }

    async atualizar(id: number, dados: any) {
        return prisma.disciplina.update({
            where: { id },
            data: dados
        });
    }

    async deletar(id: number) {
        return prisma.disciplina.delete({
            where: { id }
        });
    }
}
