import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyCjySBL_wlhdcAl-VWFUaPtyu_lg_BwhV4",
  authDomain: "binar-car-rental-95863.firebaseapp.com",
  projectId: "binar-car-rental-95863",
  storageBucket: "binar-car-rental-95863.appspot.com",
  messagingSenderId: "311347008953",
  appId: "1:311347008953:web:a7ee46bb6018fa5f321268",
  measurementId: "G-11TH7PXXVL",
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;
