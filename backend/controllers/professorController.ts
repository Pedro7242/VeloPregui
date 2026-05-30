import { Request, Response } from 'express';
import { ProfessorDAO } from '../DAO/ProfessorDAO';

const professorDAO = new ProfessorDAO();

export class ProfessorController {
    async listar(req: Request, res: Response) {
        try {
            const professores = await professorDAO.listarTodos();
            res.json(professores);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async buscar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id!);
            const professor = await professorDAO.buscarPorId(id);
            if (professor) {
                res.json(professor);
            } else {
                res.status(404).json({ message: "Professor não encontrado" });
            }
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const novoProfessor = await professorDAO.criar(req.body);
            res.status(201).json(novoProfessor);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async atualizar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id!);
            const professorAtualizado = await professorDAO.atualizar(id, req.body);
            res.json(professorAtualizado);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async deletar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id!);
            await professorDAO.deletar(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
