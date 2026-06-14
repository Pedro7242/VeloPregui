import { Request, Response } from "express";
import { DisciplinaDAO } from "../DAO/disciplinaDAO";

const disciplinaDAO = new DisciplinaDAO();

export class DisciplinaController {

    async listar(req: Request, res: Response) {
        try {
            const disciplinas = await disciplinaDAO.listarTodos();
            res.json(disciplinas);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async buscar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id as string);

            const disciplina = await disciplinaDAO.buscarPorId(id);

            if (disciplina) {
                res.json(disciplina);
            } else {
                res.status(404).json({
                    message: "Disciplina não encontrada"
                });
            }

        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const novaDisciplina = await disciplinaDAO.criar(req.body);

            res.status(201).json(novaDisciplina);

        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async atualizar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id as string);

            const disciplinaAtualizada =
                await disciplinaDAO.atualizar(id, req.body);

            res.json(disciplinaAtualizada);

        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async deletar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id as string);

            await disciplinaDAO.deletar(id);

            res.status(204).send();

        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
