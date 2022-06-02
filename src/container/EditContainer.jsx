import React from "react";
import { db } from "util/firebase";
import { useState, useEffect } from "react";
import { InputImageFile } from "components/InputImageFile";
import { useNavigate, useParams } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { handleEdit, handleDeleteImage } from "util/utils";
import { InputDate } from "components/InputDate";
// import { mock as userStore } from "./mock";
const EditContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userDoc, setUserDoc] = useState();
  const [delTargetImg, setDelTargetImg] = useState();
  useEffect(() => {
    const docRef = doc(db, "userStore", id);
    const unsub = onSnapshot(docRef, (snapshot) => {
      setUserDoc(snapshot.data());
      console.log("doc fetching- edit");

      setDelTargetImg(snapshot.data().StoragePath);
    });
    return unsub;
  }, []);

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserDoc((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const showData = () => {
    console.log(id);
    console.log(userDoc);
  };
  const onSubmit = async (e) => {
    console.log("제출버튼누름");
    // firebase 값 전송 (성공)
    //여기서 이미지를 서버에올리고()
    //초기화
    if (userDoc.StoragePath !== delTargetImg) {
      console.log("deleteimage");
      handleDeleteImage(delTargetImg);
    }
    handleEdit(id, userDoc);
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className=" max-w-md mx-auto max-h-full sm:max-w-3xl">
      <div className="bg-white px-4 py-6">
        <div className="mt-1 relative rounded-md shadow-sm"></div>
        <div className="mt-10">
          {userDoc && (
            <form onSubmit={onSubmit} className="w-full sm:max-w-3xl sm:text-sm">
              <div className="flex flex-wrap -mx-3  md:mb-6">
                <div className="w-1/2 md:w-1/4  px-3 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    이름
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="이름을 입력하세요"
                    onChange={onChange}
                    name="name"
                    value={userDoc.name}
                  />
                </div>
                <div className="w-1/2 md:w-1/4 px-3 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    비번
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="비번"
                    onChange={onChange}
                    name="password"
                    value={userDoc.password}
                  />
                </div>
                <div className="w-1/2  md:w-1/4 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    물건종류
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="종류"
                    onChange={onChange}
                    name="object"
                    value={userDoc.object}
                  />
                </div>
                <div className="w-1/2 md:w-1/4 px-3 md:mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    습득 위치
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="습득한 위치"
                    onChange={onChange}
                    name="place"
                    value={userDoc.place}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 md:mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    날짜
                  </label>
                  <div>
                    <InputDate data={userDoc.date} setData={setUserDoc} />
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 md:mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    보관장소
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="맡겨놓은 장소"
                    onChange={onChange}
                    name="locker"
                    value={userDoc.locker}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 md:mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    메모
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder="추가사항입력"
                    onChange={onChange}
                    name="memo"
                    value={userDoc.memo}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-15 md:mb-0">
                  <InputImageFile data={userDoc} setData={setUserDoc} />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-15 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    GPS 기능 추가중
                  </label>
                </div>
              </div>
              <div className="mt-10 sm:mt-20">
                <button
                  type="submit"
                  onClick={showData}
                  className="block w-full  px-4 py-2 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus-offset-2 focus:ring-indigo-500 "
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditContainer;
