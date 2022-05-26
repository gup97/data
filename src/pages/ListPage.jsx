import { InputSearch } from "components/InputSearch.jsx";
import { ListData } from "components/ListData";
import React, { useId } from "react";
import { db } from "util/firebase";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import 입력값을만족하는배열 from "util/search-check";
import { Link } from "react-router-dom";

// import { mock as userStore } from "../mock/mock.js";
// const ListTap = () => {
const ListTap = () => {
  const [userStore, setUserStore] = useState([{ object: "loading", id: "initial" }]);

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

  const filterCondition = "object";
  const filterArray = 입력값을만족하는배열(userStore, text, filterCondition);
  // //
  return (
    <div className=" max-w-md mx-auto sm:max-w-3xl">
      <div className="bg-white px-4 py-6">
        <div className="mt-1 relative rounded-md shadow-sm">
          <InputSearch value={text} handleChange={setText} />
        </div>
        <div className="mt-5">
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {filterArray.map((user) => (
              <li key={user.id}>
                <Link to={`${user.id}`}>
                  <ListData user={user} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListTap;
