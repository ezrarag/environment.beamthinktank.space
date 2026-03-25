import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const isFirebaseConfigured = Object.values(firebaseConfig).every((value) => value && value !== 'undefined')

let app: ReturnType<typeof initializeApp> | null = null
let db: ReturnType<typeof getFirestore> | null = null
let auth: ReturnType<typeof getAuth> | null = null

if (isFirebaseConfigured) {
  app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
  db = getFirestore(app)
  auth = getAuth(app)
} else {
  console.warn(
    'Firebase configuration incomplete. Add the shared BEAM Firebase vars and authorize environment.beamthinktank.space in Firebase Console.',
  )
}

export { app, auth, db }
