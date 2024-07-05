import { initializeApp, } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbQ1_duqVZFahphekZSfLeU3O-hV4D-Wc",
  authDomain: "visioni-a20ca.firebaseapp.com",
  projectId: "visioni-a20ca",
  storageBucket: "visioni-a20ca.appspot.com",
  messagingSenderId: "550664710276",
  appId: "1:550664710276:web:9e6a275ad112647db73ad1"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app