import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCoy5t4hfu6nVDnxX5xVPG7KBcXY7bBVzY",
    authDomain: "traversenz-295fe.firebaseapp.com",
    databaseURL: "https://traversenz-295fe.firebaseio.com",
    projectId: "traversenz-295fe",
    storageBucket: "traversenz-295fe.appspot.com",
    messagingSenderId: "138066235833",
    appId: "1:138066235833:web:0879df724ba4009d"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({
      timestampsInSnapshots:true
  })

  export default firebase;