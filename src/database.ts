import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore"
import { firebaseConfig } from "./support";

initializeApp(firebaseConfig);

export const db = getFirestore();

export const data = getDocs(collection(db, "leaderboard"))