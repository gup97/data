import React from "react";
import { useState, useEffect } from "react";
import { db } from "util/firebase";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import 입력값을만족하는배열 from "util/search-check";
import { InputSearch } from "components/InputSearch.jsx";
import { ListData } from "components/ListData";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "components/Loading/LoadingSpinner";
import { FilterIcon } from "components/FilterIcon";

// import { mock as userStore } from "../mock/mock.js";
// const ListContainer = () => {
const ListContainer = () => {
  const [userStore, setUserStore] = useState();
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("object");
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
    filterArray = 입력값을만족하는배열(userStore, text, filter);
  }
  // //
  const openFilter = () => {
    const collectionRef = collection(db, "userStore");
    const q = query(collectionRef, orderBy("timestamp", "desc"), limit(2));
    const unsub = onSnapshot(q, (snapshot) => {
      setUserStore(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("filter modal open");
    });
  };
  return (
    <>
      <div className=" max-w-md mx-auto sm:max-w-3xl">
        <div className="bg-white px-4 py-10">
          <div className="flex">
            <FilterIcon onClick={openFilter} setFilter={setFilter} />
            <InputSearch value={text} handleChange={setText} />
          </div>
          <div className="mt-3">
            <span>검색결과</span>
          </div>
          <div>
            {userStore && (
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {filterArray.map((user) => (
                  <li key={user.id}>
                    <Link to={`${user.id}`}>
                      <ListData main={user.object} sub={user.place} part={user.name} />
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
