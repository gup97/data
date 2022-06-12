import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "util/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { InputImageFile } from "components/InputImageFile";
import { handleEdit, handleDeleteImage } from "util/utils";
import { InputDate } from "components/InputDate";
import { MapContainer } from "./MapContainer";
import { PasswordModify } from "components/PasswordModify";
import {
  InputLocker,
  InputMemo,
  InputName,
  InputObject,
  InputPassword,
  InputPlace,
} from "components/InputText";

// import { mock as userStore } from "./mock";
const EditContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userDoc, setUserDoc] = useState();
  const [delTargetImg, setDelTargetImg] = useState();
  const [isPassword, setIsPassword] = useState(false);
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
    if (userDoc.StoragePath === "") {
      console.log("변화가있었으");
    }
    handleEdit(id, userDoc);
    e.preventDefault();
    navigate(-1);
  };
  const passwordCollected = () => {
    console.log("first");
    setIsPassword(true);
  };
  return (
    <div className=" max-w-md mx-auto max-h-full sm:max-w-3xl">
      <div className="bg-white px-4 py-6">
        {userDoc && (
          <div className="mt-10">
            {!isPassword ? (
              <PasswordModify password={userDoc.password} func={passwordCollected} />
            ) : (
              <form onSubmit={onSubmit} className="w-full sm:max-w-3xl sm:text-sm">
                <div className="flex flex-wrap -mx-3  md:mb-6">
                  <div className="w-1/2 md:w-1/4  px-3 md:mb-0">
                    <InputName onChange={onChange} data={userDoc.name} />
                  </div>
                  <div className="w-1/2 md:w-1/4 px-3 md:mb-0">
                    <InputPassword onChange={onChange} data={userDoc.password} />
                  </div>
                  <div className="w-1/2  md:w-1/4 px-3">
                    <InputObject onChange={onChange} data={userDoc.object} />
                  </div>
                  <div className="w-1/2 md:w-1/4 px-3 md:mb-6">
                    <InputDate
                      userDoc={userDoc}
                      onChange={onChange}
                      data={userDoc.date}
                      setData={setUserDoc}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/3 px-3 md:mb-6">
                    <InputPlace onChange={onChange} data={userDoc.place} />
                  </div>
                  <div className="w-full md:w-1/3 px-3 md:mb-6">
                    <InputLocker onChange={onChange} data={userDoc.locker} />
                  </div>
                  <div className="w-full md:w-1/3 px-3 md:mb-6">
                    <InputMemo onChange={onChange} data={userDoc.memo} />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-15 md:mb-0">
                    <InputImageFile data={userDoc} setData={setUserDoc} />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-15 md:mb-0">
                    <MapContainer data={userDoc} setData={setUserDoc} />
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
        )}
      </div>
    </div>
  );
};

export default EditContainer;
