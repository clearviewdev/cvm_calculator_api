import { createHash } from 'crypto';
const SECRET = process.env.SECRET;

export async function checkAuth(request) {
  const algorithm = 'sha256'; // Use lowercase algorithm name
  const str = SECRET + JSON.stringify(request);

  const hash = createHash(algorithm);
  hash.update(str);

  return hash.digest('hex');
}
