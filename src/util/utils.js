import { db } from "util/firebase";
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
import { storage } from "util/firebase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export const handleNew = async ({ name, object, place, locker, memo, imagePath }) => {
  const imageRefPath = v4();
  const imageRef = ref(storage, `images/${imageRefPath}`);

  const response = await uploadString(imageRef, imagePath, "data_url");
  const imagePathUrl = await getDownloadURL(response.ref);
  const collectionRef = collection(db, "userStore");
  const payload = {
    name,
    object,
    place,
    locker,
    memo,
    imagePath: imagePathUrl,
    timestamp: serverTimestamp(),
  };
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
