import { Router } from 'express';
import { MatriculaController } from '../controllers/matriculaController';

const router = Router();
const matriculaController = new MatriculaController();

router.get('/', matriculaController.listar);
router.get('/:id', matriculaController.buscar);
router.post('/', matriculaController.criar);
router.put('/:id', matriculaController.atualizar);
router.delete('/:id', matriculaController.deletar);

export default router;
