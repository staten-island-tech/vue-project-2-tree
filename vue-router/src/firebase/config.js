import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnR_y2kkwqB-m-R-5hfRptxuU535lMc0k",
  authDomain: "fir-2-vuex-project.firebaseapp.com",
  projectId: "fir-2-vuex-project",
  storageBucket: "fir-2-vuex-project.appspot.com",
  messagingSenderId: "1072061725777",
  appId: "1:1072061725777:web:d6e0ea9520d7eeef450c70",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const auth = getAuth();

export { auth };
