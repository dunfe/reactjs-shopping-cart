import firebase from "firebase/app";
import ReduxSagaFirebase from "redux-saga-firebase";

const fb = firebase.initializeApp({
  apiKey: "AIzaSyCbB1zOg39AjUXVMSFc5n37SrVDv5a9P1M",
  authDomain: "react-shopping-cart-f09d2.firebaseapp.com",
  databaseURL: "https://react-shopping-cart-f09d2.firebaseio.com",
  projectId: "react-shopping-cart-f09d2",
  storageBucket: "react-shopping-cart-f09d2.appspot.com",
  messagingSenderId: "237760961127",
  appId: "1:237760961127:web:de5211552408d772e212c2",
  measurementId: "G-NCL2E36HTQ"
});
export const reduxSagaFirebase = new ReduxSagaFirebase(fb);
