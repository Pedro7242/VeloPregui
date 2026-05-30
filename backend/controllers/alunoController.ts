import { Request, Response } from 'express';
import { AlunoDAO } from '../DAO/alunoDAO.js';

const alunoDAO = new AlunoDAO();

export class AlunoController {
    async listar(req: Request, res: Response) {
        try {
            const alunos = await alunoDAO.listarTodos();
            res.json(alunos);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async buscar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id!);
            const aluno = await alunoDAO.buscarPorId(id);
            if (aluno) {
                res.json(aluno);
            } else {
                res.status(404).json({ message: "Aluno não encontrado" });
            }
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const novoAluno = await alunoDAO.criar(req.body);
            res.status(201).json(novoAluno);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async atualizar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id!);
            const alunoAtualizado = await alunoDAO.atualizar(id, req.body);
            res.json(alunoAtualizado);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async deletar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id!);
            await alunoDAO.deletar(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
