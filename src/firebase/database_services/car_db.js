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
import { v4 as uuidv4 } from "uuid";
import { firebase_db } from "../firebase_init";

class CarDBServices {
  async addCarDoc() {
    console.log("creating car ");
    try {
      let carUid = uuidv4();

      const docRef = doc(collection(firebase_db, "Cars"));

      await setDoc(docRef, {
        doc_ref: docRef.id,
        name: "Nisan GTR",
        yearModel: "2024",
        seats: 4,
        milege: "18km/L",
        images: [
          "https://tse4.mm.bing.net/th?id=OIP.bM9Mb1Z2uuK0F-sCCyq0zQHaEK&pid=Api&P=0&h=180",
          "https://tse4.mm.bing.net/th?id=OIP.bM9Mb1Z2uuK0F-sCCyq0zQHaEK&pid=Api&P=0&h=180",
          "https://tse4.mm.bing.net/th?id=OIP.bM9Mb1Z2uuK0F-sCCyq0zQHaEK&pid=Api&P=0&h=180",
        ],
        description:
          "This is a test description about this car. This is a test.",
        type: "petrol",
        rent: "45",
        currencyOfRent: "aed",
        rating: 4.5,
        carId: carUid,
      });

      console.log("Car Added with doc ref : ", docRef.id);
    } catch (e) {
      console.log("error while adding car : " + e);
    }
  }

  // Function to update a car document
  async updateCarDoc(carId, newData) {
    try {
      const q = query(collection(db, "Cars"), where("carId", "==", carId)); // Query for the document
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No car document found with carId:", carId);
        return;
      }

      const carDoc = querySnapshot.docs[0];
      await updateDoc(carDoc.ref, newData); // Update the document
      console.log("Car document updated successfully!");
    } catch (error) {
      console.error("Error updating car document:", error);
    }
  }

  // Function to delete a car document
  async deleteCarDoc(carId) {
    try {
      const q = query(collection(db, "Cars"), where("carId", "==", carId)); // Query for the document
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No car document found with carId:", carId);
        return;
      }

      const carDoc = querySnapshot.docs[0];
      await deleteDoc(carDoc.ref); // Delete the document
      console.log("Car document deleted successfully!");
    } catch (error) {
      console.error("Error deleting car document:", error);
    }
  }

  // Function to get car details
  async getCarDoc(carId) {
    try {
      const q = query(collection(db, "Cars"), where("carId", "==", carId)); // Query for the document
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No car document found with carId:", carId);
        return null;
      }

      const carDoc = querySnapshot.docs[0];
      const carData = carDoc.data();

      return carData;
    } catch (error) {
      console.error("Error getting car details:", error);
      return null;
    }
  }
}

// Usage:
// const carDB = new CarDBServices();
// carDB.addCarDoc(newData);
// carDB.updateCarDoc(carId, newData);
// carDB.deleteCarDoc(carId);
// carDB.getCarDoc(carId);

export { CarDBServices };
