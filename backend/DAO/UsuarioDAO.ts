import { prisma } from '../Config/Database';
import { Usuario } from '../Model/Usuario';

export class UsuarioDAO {
    async listarTodos() {
        return await prisma.usuario.findMany();
    }

    async buscarPorId(id: number) {
        return await prisma.usuario.findUnique({
            where: { id },
            include: {
                aluno: true,
                professor: true
            }
        });
    }

    async buscarPorEmail(email: string) {
        return await prisma.usuario.findUnique({
            where: { email }
        });
    }

    async criar(dados: any) {
        return await prisma.usuario.create({
            data: {
                nome: dados.nome,
                email: dados.email,
                senha: dados.senha,
                telefone: dados.telefone,
                tipo: dados.tipo
            }
        });
    }

    async atualizar(id: number, dados: any) {
        return await prisma.usuario.update({
            where: { id },
            data: dados
        });
    }

    async deletar(id: number) {
        return await prisma.usuario.delete({
            where: { id }
        });
    }
}
