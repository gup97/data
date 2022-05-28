import { InputSearch } from "components/InputSearch.jsx";
import { ListData } from "components/ListData";
import React, { useId } from "react";
import { db } from "util/firebase";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import 입력값을만족하는배열 from "util/search-check";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "components/Loading/LoadingSpinner";

// import { mock as userStore } from "../mock/mock.js";
// const ListContainer = () => {
const ListContainer = () => {
  const [userStore, setUserStore] = useState();
  const [text, setText] = useState("");
  let filterArray = [];
  useEffect(() => {
    const collectionRef = collection(db, "userStore");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setUserStore(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    console.log("collection fetch");
    return unsub;
  }, []);
  if (userStore) {
    const filterCondition = "object";
    filterArray = 입력값을만족하는배열(userStore, text, filterCondition);
  }
  // //
  return (
    <>
      <div className=" max-w-md mx-auto sm:max-w-3xl">
        <div className="bg-white px-4 py-10">
          <div className="flex">
            <div className="flex justify-center items-center pr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </div>
            <InputSearch value={text} handleChange={setText} />
          </div>
          <div className="  mt-3">필터 기능 준비중</div>
          <div className="mt-5">
            {userStore && (
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {filterArray.map((user) => (
                  <li key={user.id}>
                    <Link to={`${user.id}`}>
                      <ListData user={user} />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {!userStore && <LoadingSpinner />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListContainer;
