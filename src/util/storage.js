import { storage } from "util/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export const handleImage = async ({ localPath }) => {
  if (localPath == null) return;
  const imageRefPath = v4();
  const imageRef = ref(storage, `images/${imageRefPath}`);
  uploadBytes(imageRef, localPath).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {});
  });
  return imageRefPath;
};
