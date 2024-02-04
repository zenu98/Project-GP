import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBV1z7XASdaNeiVK34BWwC9hoKftxpDyI",
  authDomain: "gameplanner-541d3.firebaseapp.com",
  databaseURL: "https://gameplanner-541d3-default-rtdb.firebaseio.com",
  projectId: "gameplanner-541d3",
  storageBucket: "gameplanner-541d3.appspot.com",
  messagingSenderId: "708320980639",
  appId: "1:708320980639:web:e1cbaeaf667adbfae4bcaa",
  measurementId: "G-JEP5BN5B0X",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
