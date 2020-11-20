import firebase from 'firebase';
// const firebase = require('firebase/app');

var firebaseConfig = {
    apiKey: "AIzaSyDSvn79FXhTJPiBP9ynm12gkRkxKQFSC70",
    authDomain: "studentlive-daf03.firebaseapp.com",
    databaseURL: "https://studentlive-daf03.firebaseio.com",
    projectId: "studentlive-daf03",
    storageBucket: "studentlive-daf03.appspot.com",
    messagingSenderId: "865364298362",
    appId: "1:865364298362:web:d2b6187ac098ecc751c9c3",
    measurementId: "G-5RWXW5BGGM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;