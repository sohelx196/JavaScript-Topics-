


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyBm-ifO5P-_XEyIl7IBkknVQC08lXnRaGY",
    authDomain: "weather-web-2cfbf.firebaseapp.com",
    projectId: "weather-web-2cfbf",
    storageBucket: "weather-web-2cfbf.firebasestorage.app",
    messagingSenderId: "563427297474",
    appId: "1:563427297474:web:8b4b3af80d2978ac2f935b",
    measurementId: "G-7ZLSFXFG6L"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);;
  export const auth = getAuth(app);

  