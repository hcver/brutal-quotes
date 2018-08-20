import firebase from 'firebase';
// Initialize Firebase

let config = {
    apiKey: "AIzaSyD2N8zkfIKpUsLZ5sIC29iu9gVVVLy5Ie0",
    authDomain: "brutalic-quote.firebaseapp.com",
    databaseURL: "https://brutalic-quote.firebaseio.com",
    projectId: "brutalic-quote",
    storageBucket: "brutalic-quote.appspot.com",
    messagingSenderId: "224415553056"
};
firebase.initializeApp(config)

export default {
    database: firebase.database()
}