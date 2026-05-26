import { prisma } from '../config/database'

export class AlunoDAO {

  async listarTodos() {
    return prisma.aluno.findMany({
      include: {
        usuario: true,
        matriculas: true,
        notas: true
      }
    })
  }

  async buscarPorId(id: number) {
    return prisma.aluno.findUnique({
      where: { id },
      include: {
        usuario: true,
        matriculas: true,
        notas: true
      }
    })
  }

  async criar(dados: any) {
    return prisma.aluno.create({
      data: dados
    })
  }

  async atualizar(id: number, dados: any) {
    return prisma.aluno.update({
      where: { id },
      data: dados
    })
  }

  async deletar(id: number) {
    return prisma.aluno.delete({
      where: { id }
    })
  }
}
