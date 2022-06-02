import React from "react";
import { useState } from "react";
export const PasswordModify = ({ password, func }) => {
  const [text, setText] = useState("");
  const checkPassword = () => {
    if (text === password) {
      func();
      console.log("정답");
    } else {
      console.log("다름");
      alert("Password error");
      setText("");
    }
  };
  return (
    <div className="w-full h-full border-2 border-slate-300 px-12 py-6 mt-4">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="text">비밀번호를 입력하세요</div>
        <input
          className="appearance-none block md:w-1/2 bg-gray-200 text-gray-700 border py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoComplete="off"
        />
        <button
          className=" w-1/2 px-4 py-2 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus-offset-2 focus:ring-indigo-500"
          type="button"
          onClick={checkPassword}
        >
          확인
        </button>
      </div>
    </div>
  );
};
