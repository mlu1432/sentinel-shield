import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, onAuthStateChanged, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
let FIREBASE_APP;
if (!getApps().length) {
  FIREBASE_APP = initializeApp(firebaseConfig);
} else {
  FIREBASE_APP = getApp();
}

// Initialize Firebase Authentication and get a reference to the service
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { FIREBASE_AUTH, onAuthStateChanged };