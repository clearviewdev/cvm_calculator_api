import { Router } from 'express';
import {
  createPolicy,
  getPolicy,
  updatePolicy,
  deletePolicy,
} from '../controllers/policyController.js';
import { authenticate } from '../middleware/authentication.js';

const router = Router();

router.route('/').get(getPolicy);

router.use(authenticate);

router.post('/', createPolicy);
router.route('/:id').put(updatePolicy).delete(deletePolicy);

export default router;
