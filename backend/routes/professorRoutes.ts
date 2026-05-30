import { Router } from 'express';
import { ProfessorController } from '../controllers/professorController.js';

const router = Router();
const professorController = new ProfessorController();

router.get('/', professorController.listar);
router.get('/:id', professorController.buscar);
router.post('/', professorController.criar);
router.put('/:id', professorController.atualizar);
router.delete('/:id', professorController.deletar);

export default router;
