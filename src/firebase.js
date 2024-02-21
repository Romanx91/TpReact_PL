import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNOZ_IEi6wpu2EDAJyTxhzpDQmQuEYuts",
  authDomain: "ecommerce-carde.firebaseapp.com",
  projectId: "ecommerce-carde",
  storageBucket: "ecommerce-carde.appspot.com",
  messagingSenderId: "142377689848",
  appId: "1:142377689848:web:f8f623a0bd3c32429bd10d",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { auth };
