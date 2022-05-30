import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	  apiKey: "AIzaSyDi1AVuX6kiInM9bNMdq0xiWgU77rC_5sk",
	  authDomain: "sean-mabli.firebaseapp.com",
	  projectId: "sean-mabli",
	  storageBucket: "sean-mabli.appspot.com",
	  messagingSenderId: "662981595137",
	  appId: "1:662981595137:web:7e3cd0cfffe02f35d07000",
	  measurementId: "G-GQ489QS53Z"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);