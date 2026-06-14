import { Request, Response } from "express";
import { MatriculaDAO } from "../DAO/matriculaDAO";

const matriculaDAO = new MatriculaDAO();

export class MatriculaController {

    async listar(req: Request, res: Response) {
        try {
            const matriculas = await matriculaDAO.listarTodos();
            res.json(matriculas);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async buscar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id as string);

            const matricula = await matriculaDAO.buscarPorId(id);

            if (matricula) {
                res.json(matricula);
            } else {
                res.status(404).json({
                    message: "Matrícula não encontrada"
                });
            }

        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const novaMatricula = await matriculaDAO.criar(req.body);

            res.status(201).json(novaMatricula);

        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async atualizar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id as string);

            const matriculaAtualizada =
                await matriculaDAO.atualizar(id, req.body);

            res.json(matriculaAtualizada);

        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async deletar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id as string);

            await matriculaDAO.deletar(id);

            res.status(204).send();

        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
