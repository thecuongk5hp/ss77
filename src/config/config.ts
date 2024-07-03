// di cau hinh voi filebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_FIREBASE,
  authDomain: "haiphong-2f996.firebaseapp.com",
  projectId: "haiphong-2f996",
  storageBucket: "haiphong-2f996.appspot.com",
  messagingSenderId: "430213135332",
  appId: "1:430213135332:web:9085a3bfceb6bd6ed325f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);