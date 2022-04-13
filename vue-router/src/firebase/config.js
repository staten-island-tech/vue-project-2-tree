import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADtiPFcL7HQbsJUvj9kXplqU8k02Dv6WU",
  authDomain: "fir-vuex-proje.firebaseapp.com",
  projectId: "fir-vuex-proje",
  storageBucket: "fir-vuex-proje.appspot.com",
  messagingSenderId: "161461179052",
  appId: "1:161461179052:web:1233d3cfac57b758b58509",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const auth = getAuth();

export { auth };
