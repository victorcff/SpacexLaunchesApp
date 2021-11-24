import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBh5i47JxwqjLQsSlyiyIXMxmte0-PaOOg",
  authDomain: "pontotelspacex.firebaseapp.com",
  projectId: "pontotelspacex",
  storageBucket: "pontotelspacex.appspot.com",
  messagingSenderId: "205722529246",
  appId: "1:205722529246:web:b386cb20c5365d9c55814f"
};

let app;
if (firebase.getApps().length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp()
}

const auth = firebaseAuth.getAuth()

export { auth }