import admin from 'firebase-admin'

import fs from 'fs';

const serviceAccount = JSON.parse(fs.readFileSync('serviceAccountKey.json', 'utf-8'));


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const auth = admin.auth();



const authMiddleware = async (req, res, next) => {
    try {
      const idToken = req.headers.authorization.split('Bearer ')[1];
      const decodedToken = await auth.verifyIdToken(idToken);
      console.log(decodedToken)
      req.user = decodedToken;
      next();
    } catch (error) {
      console.error('Error verifying token:', error);
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  
export default authMiddleware;