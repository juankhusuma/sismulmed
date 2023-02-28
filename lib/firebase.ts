import { FirebaseApp, FirebaseOptions, getApps, initializeApp } from "firebase/app"

const config: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET
}

let firebase: FirebaseApp;
if (getApps().length === 0) {
    firebase = initializeApp(config)
} else {
    firebase = getApps()[0]
}
export const app = firebase;