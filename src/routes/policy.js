const { Router } = require("express");
const {
  createPolicy,
  getPolicy,
  updatePolicy,
  deletePolicy,
} = require("../controllers/policyController.js");
const { authenticate } = require("../middleware/authentication.js");

const router = Router();
router.route("/").get(getPolicy);
// Authentication middleware applied to all routes below
router.use(authenticate);

// Routes
router.post("/", createPolicy);
router.route("/:id").put(updatePolicy).delete(deletePolicy);

module.exports = router;
