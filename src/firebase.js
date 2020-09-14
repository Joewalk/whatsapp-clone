import firebase from "firebase";

// firebase config options
const firebaseConfig = {
  apiKey: "AIzaSyCpYmAcCJ2CfxRaiMJOPAbpXdSNy7r1mYA",
  authDomain: "whatsapp-clone-a3acd.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-a3acd.firebaseio.com",
  projectId: "whatsapp-clone-a3acd",
  storageBucket: "whatsapp-clone-a3acd.appspot.com",
  messagingSenderId: "390525701267",
  appId: "1:390525701267:web:f8ea1e19f0ccc99a5a5166",
  measurementId: "G-B0412W220L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
