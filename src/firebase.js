import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlQKRixG36AEK0OQwd0Y3hz_iBo5zzz3s",
  authDomain: "clone-affba.firebaseapp.com",
  projectId: "clone-affba",
  storageBucket: "clone-affba.appspot.com",
  messagingSenderId: "988473910855",
  appId: "1:988473910855:web:b93ecf1d301c46c50df362",
  measurementId: "G-KSJ6KVN8WF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
