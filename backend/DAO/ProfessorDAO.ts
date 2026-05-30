import { prisma } from '../Config/Database';

export class ProfessorDAO {
    async listarTodos() {
        return await prisma.professor.findMany({
            include: {
                usuario: true,
                disciplinas: true
            }
        });
    }

    async buscarPorId(id: number) {
        return await prisma.professor.findUnique({
            where: { id },
            include: {
                usuario: true,
                disciplinas: true
            }
        });
    }

    async criar(dados: any) {
        return await prisma.professor.create({
            data: {
                especialidade: dados.especialidade,
                usuario: {
                    create: {
                        nome: dados.nome,
                        email: dados.email,
                        senha: dados.senha,
                        telefone: dados.telefone,
                        tipo: "PROFESSOR"
                    }
                }
            }
        });
    }

    async atualizar(id: number, dados: any) {
        return await prisma.professor.update({
            where: { id },
            data: {
                especialidade: dados.especialidade,
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
        return await prisma.professor.delete({
            where: { id }
        });
    }
}
