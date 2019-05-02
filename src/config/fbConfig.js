import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAm8l8MJ6uh8CZ6NM0DlKDRsI8L9J8Jmtc",
  authDomain: "sonicplan-9a6ef.firebaseapp.com",
  databaseURL: "https://sonicplan-9a6ef.firebaseio.com",
  projectId: "sonicplan-9a6ef",
  storageBucket: "sonicplan-9a6ef.appspot.com",
  messagingSenderId: "406767708569"
};
firebase.initializeApp(config);
firebase.firestore().settings({}) //todo

export default firebase;