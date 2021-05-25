import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWBhgkdJNbjNoPdwyDR6toB-DxAKbQCwY",
  authDomain: "pwj-rockpaperscissors.firebaseapp.com",
  projectId: "pwj-rockpaperscissors",
  storageBucket: "pwj-rockpaperscissors.appspot.com",
  messagingSenderId: "1030945592199",
  appId: "1:1030945592199:web:f03061bc1026c4e9943922",
  measurementId: "G-YYE4298PJK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
