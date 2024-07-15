const admin = require('firebase-admin');
const serviceAccount = require('./<path of service file.json>');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<your-project-name>.com'
});

const db = admin.firestore();

module.exports = db;
