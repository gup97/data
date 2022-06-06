import React from "react";
import { useState, useEffect } from "react";
import { db } from "util/firebase";
import { collection, where, onSnapshot, orderBy, query } from "firebase/firestore";
import 입력값을만족하는배열 from "util/search-check";
import { InputSearch } from "components/InputSearch.jsx";
import { ListData } from "components/ListData";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "components/Loading/LoadingSpinner";
import { FilterDate, ShowDate } from "components/InputDate";
import { MapListContainer } from "./MapContainer";
// import { mock as userStore } from "../mock/mock.js";
// const ListContainer = () => {
const ListContainer = () => {
  const [userStore, setUserStore] = useState();
  const [text, setText] = useState("");
  const [filterDay, setFilterDay] = useState(new Date());
  const [filter, setFilter] = useState("object");

  const [tab, setTab] = useState(false);
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
  const dateFiltering = (e) => {
    console.log("filterDay", e);
    const collectionRef = collection(db, "userStore");
    const q = query(collectionRef, where("date", "<", e), orderBy("date", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setUserStore(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };
  return (
    <>
      <div className="relative max-w-md mx-auto sm:max-w-3xl z-10">
        <div className=" px-4 py-2">
          <div className="flex justify-center items-center p-2">
            <div>
              <ul className="flex justify-around items-center rounded-md bg-white w-80 h-10 border-2">
                <li className="w-1/2 text-center cursor-pointer">
                  <p
                    className={tab ? "text-black" : " text-slate-600"}
                    onClick={() => setTab(() => false)}
                  >
                    검색
                  </p>
                </li>
                <li className="w-1/2 text-center cursor-pointer">
                  <p
                    className={!tab ? "text-black" : " text-slate-600"}
                    onClick={() => setTab(() => true)}
                  >
                    지도
                  </p>
                </li>
                <li
                  className={`${
                    tab ? " translate-x-20" : "-translate-x-20"
                  } absolute mt-[30px] h-1 rounded-[16px] z-20 opacity-100  bg-slate-500 transition ease-in-out`}
                >
                  <div className="w-[120px]"></div>
                </li>
              </ul>
            </div>
          </div>
          {!tab && (
            <>
              <div className="flex">
                <div className="flex justify-center items-center">
                  <FilterDate
                    dateFiltering={dateFiltering}
                    date={filterDay}
                    setDate={setFilterDay}
                  />
                </div>
                {/* <InputDate data={filterDay.date} setData={setFilterDay} /> */}
                <InputSearch value={text} handleChange={setText} />
              </div>
              <div className="mt-3">{filterDay && <ShowDate date={filterDay} />}</div>
              <div>
                {userStore && (
                  <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {filterArray.map((user) => (
                      <li key={user.id}>
                        <Link to={`${user.id}`}>
                          <ListData
                            main={user.object}
                            sub={user.place}
                            part={user.name}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {!userStore && <LoadingSpinner />}
              </div>
            </>
          )}
        </div>
      </div>
      {tab && (
        <div className=" absolute top-0 w-full h-screen z-0  ">
          {userStore && <MapListContainer userData={userStore} />}
        </div>
      )}
    </>
  );
};

export default ListContainer;
