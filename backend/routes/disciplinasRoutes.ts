import { Router } from 'express';
import { DisciplinaController } from '../controllers/disciplinasController';

const router = Router();
const disciplinaController = new DisciplinaController();

router.get('/', disciplinaController.listar);
router.get('/:id', disciplinaController.buscar);
router.post('/', disciplinaController.criar);
router.put('/:id', disciplinaController.atualizar);
router.delete('/:id', disciplinaController.deletar);

export default router;
