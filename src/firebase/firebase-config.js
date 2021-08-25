import firebase from 'firebase'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyCCTDvPhgDaUYZ8pCU4zRNYiAWbwHcO89o",
    authDomain: "dashboard-phorus.firebaseapp.com",
    projectId: "dashboard-phorus",
    storageBucket: "dashboard-phorus.appspot.com",
    messagingSenderId: "1091093949622",
    appId: "1:1091093949622:web:b8fe1b29d39a4ca52d8a17"
  };

  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export{
    db,
    googleAuthProvider,
    firebase
}
