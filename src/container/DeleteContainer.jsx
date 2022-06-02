import React from "react";
import { db } from "util/firebase";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { handleDelete, handleDeleteImage } from "util/utils";
import { PasswordModify } from "components/PasswordModify";

const DeleteContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userDoc, setUserDoc] = useState([]);
  useEffect(() => {
    const docRef = doc(db, "userStore", id);
    const unsub = onSnapshot(docRef, (snapshot) => {
      setUserDoc(snapshot.data());
      console.log("doc fetching");
    });
    return unsub;
  }, []);
  const deleteDoc = () => {
    handleDeleteImage(userDoc.StoragePath);
    handleDelete(id);
    navigate(-2);
  };
  return (
    <div className=" max-w-md mx-auto sm:max-w-3xl">
      <div className="bg-white px-4 py-6">
        <PasswordModify password={userDoc.password} func={deleteDoc} />
      </div>
    </div>
  );
};

export default DeleteContainer;
