import db from "util/firebase";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  query,
  getDocs,
  where,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
//create

export const handleNew = async ({ name, memo, darm, room, place }) => {
  const collectionRef = collection(db, "userStore");
  const payload = { name, memo, darm, room, place, timestamp: serverTimestamp() };
  await addDoc(collectionRef, payload);
};

export const handleEdit = async (id) => {
  const name = prompt("Enter color name");
  const value = prompt("Enter color name");

  const docRef = doc(db, "colors", id);
  const payload = { name, value };
  updateDoc(docRef, payload);
};

export const handleDelete = async (id) => {
  const docRef = doc(db, "colors", id);
  console.log(id);
  await deleteDoc(docRef);
};

export const handleQureyDelete = async (id) => {
  const userInputName = prompt("id :? ");
  const collectionRef = collection(db, "colors");
  const q = query(collectionRef, where("name", "==", userInputName));
  const snapshot = await getDocs(q);
  const results = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  results.forEach(async (results) => {
    const docRef = doc(db, "colors", results.id);
    await deleteDoc(docRef);
  });
};
