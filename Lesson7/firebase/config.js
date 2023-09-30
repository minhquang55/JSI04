import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCH5FfRBxWV6lRmL7Ys2WbpLIToU6VIHSo",
  authDomain: "jsi04-5c1fa.firebaseapp.com",
  projectId: "jsi04-5c1fa",
  storageBucket: "jsi04-5c1fa.appspot.com",
  messagingSenderId: "919901930015",
  appId: "1:919901930015:web:b44a06bd477280bc364b2a",
  measurementId: "G-W042Q64YX9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
