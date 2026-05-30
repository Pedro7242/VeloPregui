import { Request, Response } from 'express';
import { UsuarioDAO } from '../DAO/UsuárioDAO';

const usuarioDAO = new UsuarioDAO();

export class UsuarioController {
    async listar(req: Request, res: Response) {
        try {
            const usuarios = await usuarioDAO.listarTodos();
            res.json(usuarios);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async buscar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id!);
            const usuario = await usuarioDAO.buscarPorId(id);
            if (usuario) {
                res.json(usuario);
            } else {
                res.status(404).json({ message: "Usuário não encontrado" });
            }
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async criar(req: Request, res: Response) {
        try {
            const novoUsuario = await usuarioDAO.criar(req.body);
            res.status(201).json(novoUsuario);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async atualizar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id!);
            const usuarioAtualizado = await usuarioDAO.atualizar(id, req.body);
            res.json(usuarioAtualizado);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async deletar(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id!);
            await usuarioDAO.deletar(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
