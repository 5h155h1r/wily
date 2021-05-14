import * as firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBm2i9OQjsVzy5xzCeymyJ9s_uyouhc1gk",
  authDomain: "wireless-library-1ea8c.firebaseapp.com",
  databaseURL: "https://wireless-library-1ea8c-default-rtdb.firebaseio.com",
  projectId: "wireless-library-1ea8c",
  storageBucket: "wireless-library-1ea8c.appspot.com",
  messagingSenderId: "425911522885",
  appId: "1:425911522885:web:1658bcfd5092d7b132b52c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
