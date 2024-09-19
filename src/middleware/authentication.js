import { checkAuth } from '../utils/common.js';

export async function authenticate(req, res, next) {
  try {
    const checksum = await checkAuth(req.body);
    if (checksum === req.header('authorization')) {
      next();
    } else {
      res.status(403).send('You do not have permission to access this route.');
    }
  } catch (err) {
    next(err);
  }
}

//* DEV auth implementation
// export async function authenticate(req, res, next) {
//   next();
// }
