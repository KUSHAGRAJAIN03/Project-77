import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyC_hbjSyY7XhBVZv41USF9fifLy6IhtasA",
    authDomain: "barterapp-ff7f6.firebaseapp.com",
    projectId: "barterapp-ff7f6",
    databaseURL:"https://barterapp-ff7f6-default-rtdb.firebaseio.com/",
    storageBucket: "barterapp-ff7f6.appspot.com",
    messagingSenderId: "1060624059458",
    appId: "1:1060624059458:web:c7c23c9427581f41d9f1db"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();