import { Request, Response } from "express";
import { NotaDAO } from "../DAO/notaDAO";

const notaDAO = new NotaDAO();

export class NotaController {

    async listar(req: Request, res: Response) {
        try {
            const notas = await notaDAO.listarTodos();
            res.json(notas);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async buscar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id as string);

            const nota = await notaDAO.buscarPorId(id);

            if (nota) {
                res.json(nota);
            } else {
                res.status(404).json({
                    message: "Nota não encontrada"
                });
            }

        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const novaNota = await notaDAO.criar(req.body);

            res.status(201).json(novaNota);

        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async atualizar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id as string);

            const notaAtualizada =
                await notaDAO.atualizar(id, req.body);

            res.json(notaAtualizada);

        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async deletar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id  as string);

            await notaDAO.deletar(id);

            res.status(204).send();

        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
