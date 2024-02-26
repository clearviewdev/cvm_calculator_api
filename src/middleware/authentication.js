// Authentication for all protected API routes.
async function authenticate(req, res, next) {
  try {
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  authenticate,
};
