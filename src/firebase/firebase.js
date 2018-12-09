import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBNtBURkW7LzVrRw2WwskbdoXwsGxerdUA",
    authDomain: "track-expenses-31ef6.firebaseapp.com",
    databaseURL: "https://track-expenses-31ef6.firebaseio.com",
    projectId: "track-expenses-31ef6",
    storageBucket: "track-expenses-31ef6.appspot.com",
    messagingSenderId: "580570047116"
  };

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Zarek Ivey'
});