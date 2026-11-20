// Bundled into vendor/firebase.js (npm run build:firebase) so the app works without a CDN.
// initializeAuth without a popup/redirect resolver: avoids the hidden auth iframe that hangs inside the Android WebView.
import { initializeApp } from 'firebase/app';
import { initializeAuth, indexedDBLocalPersistence, browserLocalPersistence, onAuthStateChanged,
  signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { initializeFirestore, doc, onSnapshot, setDoc, serverTimestamp } from 'firebase/firestore';
window.FB = {
  initializeApp,
  getAuth: app => initializeAuth(app, { persistence: [indexedDBLocalPersistence, browserLocalPersistence] }),
  getFirestore: app => initializeFirestore(app, { experimentalAutoDetectLongPolling: true }),
  setPersistence: async () => {}, browserLocalPersistence,
  onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail,
  doc, onSnapshot, setDoc, serverTimestamp
};
