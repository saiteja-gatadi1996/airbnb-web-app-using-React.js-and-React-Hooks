import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBI9LiQxYeijU7DIWYXl8OV-IdRwKBxk1Y",
  authDomain: "airbnb-c2760.firebaseapp.com",
  databaseURL: "https://airbnb-c2760.firebaseio.com",
  projectId: "airbnb-c2760",
  storageBucket: "airbnb-c2760.appspot.com",
  messagingSenderId: "578758973719",
  appId: "1:578758973719:web:97c93adaa86fe8b04aff52",
  measurementId: "G-KC4R6Z5KFY"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
