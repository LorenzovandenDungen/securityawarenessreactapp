import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtR5oIumo0IoK33Aq5aqbKhaZWrX2_xcA",
    authDomain: "fir-3bf99.firebaseapp.com",
    projectId: "fir-3bf99",
    storageBucket: "fir-3bf99.appspot.com",
    messagingSenderId: "832724850104",
    appId: "1:832724850104:web:83b5202a43039df770eb4d",
    measurementId: "G-LYKD561F1S"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//  In case you want to load content from db to your app
const db = firebase.firestore();
const auth = firebase.auth();
export { firebaseApp, firebaseConfig, auth };
export default db;