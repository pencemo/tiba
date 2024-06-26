import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebase_auth } from "../firebase_init";

class AuthService {
  async createUser(email, password) {
    console.log("creating user");
    await createUserWithEmailAndPassword(firebase_auth, email, password);
    console.log("created");
  }

  async login(email, password) {
    console.log("logging in");
    await signInWithEmailAndPassword(firebase_auth, email, password);
  }

  async logout() {
    await signOut(firebase_auth);
  }

  getCurrentUserEmail() {
    const email = firebase_auth.currentUser.email;
    return email;
  }


  async isAuthenticated() {
    const user = firebase_auth.currentUser;
    if (user) {
      return true;
    }
    else {
      return false;
    }
  }

}

export { AuthService };
