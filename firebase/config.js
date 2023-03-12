import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBk7tSEX9Qqm_K-Hyz2bPJ-BekQ6gy0pI",
  authDomain: "react-native-social-networks.firebaseapp.com",
  projectId: "react-native-social-networks",
  databaseURL: "https://europe-west3.firebaseio.com",
  storageBucket: "react-native-social-networks.appspot.com",
  appId: "795015384654",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
