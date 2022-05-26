import React from "react";
import { db } from "util/firebase";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
// import { mock as userStore } from "../mock/mock.js";
// const DetailPage = () => {
const DetailPage = () => {
  const { id } = useParams();
  const [userDoc, setUserDoc] = useState([
    {
      id: "initial",
      object: "loading",
      location: {
        imagePath: "뭔데",
      },
    },
  ]);
  useEffect(() => {
    const docRef = doc(db, "userStore", id);

    const unsub = onSnapshot(docRef, (snapshot) => {
      setUserDoc(snapshot.data());
      console.log("doc fetching");
    });
    return unsub;
  }, []);
  //
  return (
    <div className=" max-w-md mx-auto sm:max-w-3xl">
      <div className="bg-white px-4 py-6">
        <div className="mt-1 relative rounded-md shadow-sm"></div>
        <div className="mt-5">
          {userDoc.object && (
            <div>
              <p>id :{id}</p>
              <p>user object : {userDoc.object}</p>
              <img src={userDoc.imagePath} alt="aa" />
            </div>
          )}

          {/* <p> {userDoc.location.imagePath}</p> */}
          {/* <img src={userDoc.location.imagePath} alt="aa" /> */}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
