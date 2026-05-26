import { AlunoDAO } from '../dao/alunoDAO'

const alunoDAO = new AlunoDAO()

export class AlunoController {

  async listar(req, res) {
    const alunos = await alunoDAO.listarTodos()
    res.json(alunos)
  }

  async buscar(req, res) {
    const id = Number(req.params.id)

    const aluno = await alunoDAO.buscarPorId(id)

    if (!aluno) {
      return res.status(404).json({
        erro: 'aluno n encontrado'
      })
    }

    res.json(aluno)
  }

  async criar(req, res) {
    const aluno = await alunoDAO.criar(req.body)

    res.status(201).json(aluno)
  }

  async atualizar(req, res)  {
    const id = Number(req.params.id)

    const aluno = await alunoDAO.atualizar(id, req.body)

    res.json(aluno)
  }

  async deletar(req, res) {
    const id = Number(req.params.id)

    await alunoDAO.deletar(id)

    res.json({
      mensagem: 'aluno deletado'
    })
  }
}
