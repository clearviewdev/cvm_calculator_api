const { Router } = require('express');
const {
  createPolicy,
  getPolicy,
  updatePolicy,
  deletePolicy,
} = require('../controllers/policyController.js');
const { authenticate } = require('../middleware/authentication.js');

const router = Router();

router.route('/').get(getPolicy);

router.use(authenticate);

router.post('/', createPolicy);
router.route('/:id').put(updatePolicy).delete(deletePolicy);

module.exports = router;