const admin = require('firebase-admin')
const serviceAccount = require('./firebase-keys.json')

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://burger-builder-app-3a30d.firebaseio.com',
  })
} catch {
  console.log('Firebase not initialize')
}

export const firestore = admin.firestore()
