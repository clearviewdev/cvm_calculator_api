const { Router } = require('express');
const {
  createPolicy,
  getPolicy,
  updatePolicy,
  deletePolicy,
} = require('../controllers/policyController.js');
const { authenticate } = require('../middleware/authentication.js');

const router = Router();

// Authentication middleware applied to all routes below
router.use(authenticate);

// Routes
router.route('/').get(getPolicy);
router.post('/', createPolicy);
router.route('/:id').put(updatePolicy).delete(deletePolicy);

module.exports = router;