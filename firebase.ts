
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgjANwYRxzKt0Jp66lfhGW2LGsg8TkfLg",
  authDomain: "pmnts-gais-1.firebaseapp.com",
  projectId: "pmnts-gais-1",
  storageBucket: "pmnts-gais-1.firebasestorage.app",
  messagingSenderId: "223618119758",
  appId: "1:223618119758:web:6716ce49fa3cb7e7b8ab1f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
