import React from "react";
import db from "util/firebase";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { handleNew } from "util/utils";

const SubmitPage = () => {
  const dormitorys = [
    "아마레관", //0
    "예지관", //1
    "세르비레관", //2
    "효성관", //3
    "성김대건관", //4
    "다솜관", //5
    "참인재관", //6
    "주소미입력", //7
  ];
  const [userStore, setUserStore] = useState([{ name: "loading", id: "initial" }]);

  useEffect(() => {
    const collectionRef = collection(db, "userStore");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) => {
      setUserStore(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }, []);

  const [form, setForm] = useState({
    name: "", //input
    memo: "",
    darm: "아마레관", //option
    room: "", //input
    place: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };
  const showData = () => {
    console.log(form);
  };

  const onSubmit = (e) => {
    console.log("제출");

    //초기화
    setForm({
      name: "", //input
      memo: "",
      darm: "아마레관", //option
      room: "", //input
      place: "", //input
    });

    // firebase 값 전송 (성공)
    handleNew(form);
    e.preventDefault();
  };
  return (
    <div className=" max-w-md mx-auto max-h-full sm:max-w-3xl">
      <div className="bg-white px-4 py-6">
        <div className="mt-1 relative rounded-md shadow-sm"></div>
        <div className="mt-10">
          <form onSubmit={onSubmit} className="w-full sm:max-w-3xl">
            <div className="flex flex-wrap -mx-3 mb-0 sm:mb-7">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  이름
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="이름을 입력하세요"
                  onChange={onChange}
                  name="name"
                  value={form.name}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  추가입력사항
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="추가입력"
                  onChange={onChange}
                  name="memo"
                  value={form.memo}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6"></div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  기숙사
                </label>
                <div className="relative">
                  <select
                    onChange={onChange}
                    name="darm"
                    value={form.darm}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    {dormitorys.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  호수
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="방 번호를 입력하세요"
                  onChange={onChange}
                  name="room"
                  value={form.room}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  위치
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="위치를 입력하세요"
                  onChange={onChange}
                  name="place"
                  value={form.place}
                />
              </div>
            </div>
            <div className="mt-10 sm:mt-20">
              <button
                type="submit"
                onClick={showData}
                className="block w-full px-4 py-2 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus-offset-2 focus:ring-indigo-500 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitPage;
