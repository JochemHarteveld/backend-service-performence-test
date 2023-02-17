// @ts-nocheck
import { collection, addDoc, getDoc, query, getFirestore, limit } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebaseConfig";

export default class FirebaseService {
  constructor() {
    this.initFirebase();
  }

  firebase = null;

  async initFirebase() {
    const app = initializeApp(firebaseConfig);
    this.firebase = getFirestore(app);
  }

  async addProductToFirebase(product) {
    try {
      //Start Time
      const startTime = performance.now();

      //Test
      const docRef = await addDoc(
        collection(this.firebase, "products"),
        product
      );

      //Stop Time
      const endTime = performance.now();
      const firebaseAddTime = endTime - startTime;

      //Show results
      console.log(`Firebase: Product aangemaakt met id: ${docRef.id} en duurde ${firebaseAddTime} MS`)

      //Return
      return firebaseAddTime;
    } catch (error) {
      console.log(error);
    }
  }

  async getProductFromFirebase() {
    try {
      //Setup
      const q = query(collection(this.firebase, "products"), limit(1));

      //Start Time
      const startTime = performance.now();
      
      //Test
      const querySnapshot = await getDoc(q);

      //Stop Time
      const endTime = performance.now();
      const firebaseGetTime = endTime - startTime;

      //Show results
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
      });
      console.log(`Firebase: Product binnengehaald en duurde ${firebaseGetTime}MS`);

      //Return
      return firebaseGetTime;
    } catch (error) {
      console.log(error);
    }
  }
}
