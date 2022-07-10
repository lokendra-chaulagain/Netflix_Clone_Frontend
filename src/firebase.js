//import firebase
import firebase from "firebase";
const firebaseConfig = {
  apiKey: process.env.APT_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: "netflix-clone-ba757.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;


