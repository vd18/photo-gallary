import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';



var firebaseConfig = {
    apiKey: "AIzaSyB2df6a75s6zlO4Querqm7M3wdvbsrJzAU",
    authDomain: "photo-gallery-app-2f9f6.firebaseapp.com",
    projectId: "photo-gallery-app-2f9f6",
    storageBucket: "photo-gallery-app-2f9f6.appspot.com",
    messagingSenderId: "1089322373401",
    appId: "1:1089322373401:web:3b412b3848863c1a333588"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const prostorage = firebase.storage();

  const profirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export {profirestore, prostorage, timestamp};
