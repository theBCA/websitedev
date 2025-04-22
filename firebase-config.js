// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDbMB-T1scrE57qnF2T0Mac-8Vw7jSssM",
    authDomain: "perde-website.firebaseapp.com",
    projectId: "perde-website",
    storageBucket: "perde-website.appspot.com",
    messagingSenderId: "908490709170",
    appId: "1:908490709170:web:7e200d3abd37204be611ab",
    databaseURL: "https://perde-website-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const database = firebase.database();
const storage = firebase.storage();
const auth = firebase.auth(); 