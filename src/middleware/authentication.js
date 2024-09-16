// middleware/auth.js

import { checkAuth } from '../utils/common.js';

// Authentication for all protected API routes.
export async function authenticate(req, res, next) {
  try {
    const checksum = await checkAuth(req.body);
    // Use req.header('authorization') directly and compare without converting to lowercase
    if (checksum === req.header('authorization')) {
      next();
    } else {
      res.status(403).send('You do not have permission to access this route.');
    }
  } catch (err) {
    next(err);
  }
}
