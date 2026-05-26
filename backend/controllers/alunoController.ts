import { Request, Response } from 'express'
import { AlunoDAO } from '../dao/alunoDAO'

const alunoDAO = new AlunoDAO()

export class AlunoController {

  async listar(req: Request, res: Response) {
    const alunos = await alunoDAO.listarTodos()
    res.json(alunos)
  }

  async buscar(req: Request, res: Response) {
    const id = Number(req.params.id)

    const aluno = await alunoDAO.buscarPorId(id)

    if (!aluno) {
      return res.status(404).json({
        erro: 'Aluno não encontrado'
      })
    }

    res.json(aluno)
  }

  async criar(req: Request, res: Response) {
    const aluno = await alunoDAO.criar(req.body)

    res.status(201).json(aluno)
  }

  async atualizar(req: Request, res: Response) {
    const id = Number(req.params.id)

    const aluno = await alunoDAO.atualizar(id, req.body)

    res.json(aluno)
  }

  async deletar(req: Request, res: Response) {
    const id = Number(req.params.id)

    await alunoDAO.deletar(id)

    res.json({
      mensagem: 'Aluno deletado'
    })
  }
}
