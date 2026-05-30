import { Router } from 'express';
import { AlunoController } from '../controllers/alunoController.js';

const router = Router();
const alunoController = new AlunoController();

router.get('/', alunoController.listar);
router.get('/:id', alunoController.buscar);
router.post('/', alunoController.criar);
router.put('/:id', alunoController.atualizar);
router.delete('/:id', alunoController.deletar);

export default router;
