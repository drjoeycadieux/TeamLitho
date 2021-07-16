  var firebaseConfig = {
        apiKey: "AIzaSyA20eFtdIhWl1oqE2_5o2sAtHj5SstdnSI",
        authDomain: "teamlitho-9ac2b.firebaseapp.com",
        databaseURL: "https://teamlitho-9ac2b-default-rtdb.firebaseio.com",
        projectId: "teamlitho-9ac2b",
        storageBucket: "teamlitho-9ac2b.appspot.com",
        messagingSenderId: "587633326348",
        appId: "1:587633326348:web:76b3b93999231788287129",
        measurementId: "G-RZEMM11TG3"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();

      var admin = require("firebase-admin");

      var serviceAccount = require("path/to/serviceAccountKey.json");

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://teamlitho-9ac2b-default-rtdb.firebaseio.com"
      });