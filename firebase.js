// ===============================
// Firebase Configuration
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUATkDNaYo-WNXgrBzsF_6BGDLfyMP08Y",
  authDomain: "mj-cinema-empire.firebaseapp.com",
  projectId: "mj-cinema-empire",
  storageBucket: "mj-cinema-empire.firebasestorage.app",
  messagingSenderId: "682302843099",
  appId: "1:682302843099:web:857008320404261b4b84fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Login
window.adminLogin = async function () {

  const email = document.getElementById("adminEmail").value;
  const password = document.getElementById("adminPassword").value;

  try {

    await signInWithEmailAndPassword(auth, email, password);

    alert("✅ Login Successful");

  } catch (e) {

    alert(e.message);

  }

};

// Logout
window.logoutAdmin = function () {

  signOut(auth);

};

// Check Login
onAuthStateChanged(auth, (user) => {

  if (user) {

    document.getElementById("admin").style.display = "none";

    document.getElementById("dashboard").style.display = "block";

  } else {

    document.getElementById("admin").style.display = "block";

    document.getElementById("dashboard").style.display = "none";

  }

});