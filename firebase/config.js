import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBk7tSEX9Qqm_K-Hyz2bPJ-BekQ6gy0pI",
  authDomain: "react-native-social-networks.firebaseapp.com",
  projectId: "react-native-social-networks",
  storageBucket: "react-native-social-networks.appspot.com",
  messagingSenderId: "795015384654",
  appId: "1:795015384654:web:0ee2ada80b1ca168f5bd1f",
  measurementId: "G-6D1B7ZXDC5",
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
