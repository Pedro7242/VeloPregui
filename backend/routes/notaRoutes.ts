import { Router } from 'express';
import { NotaController } from '../controllers/notaControllers';

const router = Router();
const notaController = new NotaController();

router.get('/', notaController.listar);
router.get('/:id', notaController.buscar);
router.post('/', notaController.criar);
router.put('/:id', notaController.atualizar);
router.delete('/:id', notaController.deletar);

export default router;
