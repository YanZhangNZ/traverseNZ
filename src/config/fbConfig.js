import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBItwXgA2vD7oCMM2JiNyp0pV-Y8X7ZVWM",
    authDomain: "traversenz-43ec2.firebaseapp.com",
    databaseURL: "https://traversenz-43ec2.firebaseio.com",
    projectId: "traversenz-43ec2",
    storageBucket: "traversenz-43ec2.appspot.com",
    messagingSenderId: "107765526284"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({
      timestampsInSnapshots:true
  })

  export default firebase;