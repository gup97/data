import React from "react";
import { db } from "util/firebase";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { handleDelete, handleDeleteImage } from "util/utils";
import { LoadingSpinner } from "components/Loading/LoadingSpinner";
const DetailContainer = () => {
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

  const onClickDelete = () => {
    handleDeleteImage(userDoc);
    handleDelete(id);
    navigate(-1);
  };
  return (
    <div className=" max-w-md mx-auto sm:max-w-3xl">
      <div className="bg-white px-4 py-6">
        {userDoc && (
          <div className="mt-1 relative ">
            <p>{userDoc.name}님의 글</p>
            <div className="md:flex gap-3">
              {userDoc.imagePath ? (
                <img
                  className="md:w-1/2 h-1/2 max-h-1/2 max-w-1/2"
                  src={userDoc.imagePath}
                  alt="aa"
                />
              ) : (
                <div className=" md:w-1/2 h-48 flex justify-center items-center w-full bg-slate-200 max-h-1/2 max-w-1/2">
                  <p>첨부된 이미지가 없습니다.</p>
                </div>
              )}
              <div className="w-full flex flex-col justify-around  ">
                <div>
                  <p> {userDoc.object}</p>
                  <p> {userDoc.place}</p>
                  <p> {userDoc.locker}</p>
                  <p> {userDoc.memo}</p>
                </div>
                <div className=" flex gap-3 mt-2 w-full">
                  <div className="w-1/2">
                    <Link to={`/edit/${id}`}>
                      <button className="w-full px-4 py-2 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus-offset-2 focus:ring-indigo-500 ">
                        수정
                      </button>
                    </Link>
                  </div>
                  <div className="w-1/2">
                    <button
                      className=" w-full  px-4 py-2 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus-offset-2 focus:ring-indigo-500 "
                      type="button"
                      onClick={onClickDelete}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailContainer;
