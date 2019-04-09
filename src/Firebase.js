import firebase from 'firebase';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBPCujHyd93_AGWLspi7otXnUC4sq9-U-E",
    authDomain: "task-34404.firebaseapp.com",
    databaseURL: "https://task-34404.firebaseio.com",
    projectId: "task-34404",
    storageBucket: "task-34404.appspot.com",
    messagingSenderId: "392464005083"
  };
  firebase.initializeApp(config);
  export default firebase;