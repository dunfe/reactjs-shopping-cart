import firebase from "firebase/app";
import ReduxSagaFirebase from "redux-saga-firebase";

const fb = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
});
export const reduxSagaFirebase = new ReduxSagaFirebase(fb);
