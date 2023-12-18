importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyA2b-GW7QwBiMLf-ePEozutrzehSI_vOiE",
    authDomain: "cocoeats.firebaseapp.com",
    projectId: "cocoeats",
    storageBucket: "cocoeats.appspot.com",
    messagingSenderId: "207948719304",
    appId: "1:207948719304:web:0e24b88ab3eaf0dfaa31fd",
    measurementId: "G-VZC0NS3SSY"
    databaseURL: "...",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
});
