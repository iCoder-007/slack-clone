import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAehXCpCEhmfht2RBxSeLSAv8dhcg2FwvU",
    authDomain: "slack-clone-84315.firebaseapp.com",
    projectId: "slack-clone-84315",
    storageBucket: "slack-clone-84315.appspot.com",
    messagingSenderId: "703213069128",
    appId: "1:703213069128:web:4d394248e28396dbf0497d",
    measurementId: "G-XNCR1BY4SN"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth()
  const provider =new firebase.auth.GoogleAuthProvider()

  export {db,auth,provider};