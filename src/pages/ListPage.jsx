import { InputSearch } from "components/input-search-bar.jsx";
import { ListData } from "components/list-data";
import React from "react";
import db from "util/firebase";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
// import { mock as userStore } from "./mock.js";
// const ListTap = () => {

const ListTap = () => {
  const [userStore, setUserStore] = useState([{ name: "loading", id: "initial" }]);

  useEffect(() => {
    const collectionRef = collection(db, "userStore");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) => {
      setUserStore(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    console.log("collection fetch");
    return unsub;
  }, []);
  const [text, setText] = useState("");
  //
  return (
    <div className=" max-w-md mx-auto sm:max-w-3xl">
      <div className="bg-white px-4 py-6">
        <div className="mt-1 relative rounded-md shadow-sm">
          <InputSearch value={text} handleChange={setText} />
        </div>
        <div className="mt-10">
          <ListData store={userStore} input={text} />
        </div>
      </div>
    </div>
  );
};

export default ListTap;
