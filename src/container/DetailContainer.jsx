import React from "react";
import { db } from "util/firebase";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
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
  return (
    <div className=" max-w-md mx-auto sm:max-w-3xl">
      <div className=" bg-slate-100 px-4 py-6 rounded-md shadow-xl">
        {userDoc && (
          <div className="mt-1 relative ">
            <p>{userDoc.name}님의 글</p>
            <div className="md:flex gap-3">
              {userDoc.imagePath !== "" && (
                <img
                  className="md:w-1/2 h-1/2 max-h-1/2 max-w-1/2"
                  src={userDoc.imagePath}
                  alt="미리보기 이미지"
                />
              )}
              <div className="w-full flex flex-col justify-around  ">
                <div>
                  <p>
                    <span className=" font-bold text-blue-700">습득물: </span>
                    <span className=""> {userDoc.object}</span>
                  </p>
                  <p>
                    <span className=" font-bold text-blue-700">습득위치: </span>
                    <span className=""> {userDoc.place}</span>
                  </p>
                  <p>
                    <span className=" font-bold text-blue-700">보관위치: </span>
                    <span className=""> {userDoc.locker}</span>
                  </p>
                  <p>
                    <span className=" font-bold text-blue-700">메모: </span>
                    <span className=""> {userDoc.memo}</span>
                  </p>
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
                    <Link to={`/delete/${id}`}>
                      <button
                        className=" w-full  px-4 py-2 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus-offset-2 focus:ring-indigo-500 "
                        type="button"
                      >
                        삭제
                      </button>
                    </Link>
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
