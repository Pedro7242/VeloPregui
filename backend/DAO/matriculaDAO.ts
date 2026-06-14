
 import { prisma } from "../config/database.js";
export class MatriculaDAO {
 
  async criar(dados : any) {
    return  prisma.matricula.create({
      data : dados,
    });
  }
 
  async listar() {
    return await prisma.matricula.findMany({
      include: { aluno: true, disciplina: true },
    });
  }
 
  async buscarPorId(id: number) {
    return await prisma.matricula.findUnique({
      where: { id },
      include: { aluno: true, disciplina: true },
    });
  }
 
  async deletar(id: number) {
    return await prisma.matricula.delete({
      where: { id },
    });
  }
  async listarTodos() {
    return prisma.matricula.findMany({
        include: {
            aluno: {
                include: {
                    usuario: true
                }
            },
            disciplina: true
        }
    });
}

async atualizar(id: number, dados: any) {
    return prisma.matricula.update({
        where: { id },
        data: dados,
        include: {
            aluno: {
                include: {
                    usuario: true
                }
            },
            disciplina: true
        }
    });
}
}
