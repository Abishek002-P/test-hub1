import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAuoEKF1s3Yhb7nlHfsz6PSm_rQhcMtrIg",
    authDomain: "login-a5b42.firebaseapp.com",
    projectId: "login-a5b42",
    storageBucket: "login-a5b42.appspot.com",
    messagingSenderId: "897626566560",
    appId: "1:897626566560:web:531602b4cf511a95b27ec5"
  };

 const fire = firebase.initializeApp(firebaseConfig);

  export default fire;