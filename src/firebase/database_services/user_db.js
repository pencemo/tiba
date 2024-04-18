import {
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { firebase_db } from "../firebase_init";

class UserDBServices {
  async getUser(email) {
    const q = query(collection(firebase_db, "Users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No User Found:", email);
      return null;
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    return userData;
  }
}

export { UserDBServices };
