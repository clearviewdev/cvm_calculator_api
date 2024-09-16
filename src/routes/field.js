import { Router } from 'express';
import { getFields, createField, updateField } from '../controllers/field.js';
import { authenticate } from '../middleware/authentication.js';

const router = Router();

router.route('/').get(getFields);

router.use(authenticate);

router.post('/', createField);
router.post('/:id', updateField);

export default router;
