//Form 안의 Text Type Input 관리하는 jsx
import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "SVG";

export const InputName = ({ onChange, data }) => {
  return (
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        <p className={`${data && " text-green-500"}`}>*이름</p>
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
        type="text"
        placeholder="이름을 입력하세요"
        onChange={onChange}
        value={data}
        name="name"
      />
    </>
  );
};

export const InputPassword = ({ onChange, data }) => {
  const [passwordType, setPasswordType] = useState("password");
  const onEyeClick = () => {
    passwordType !== "text" ? setPasswordType("text") : setPasswordType("password");
  };
  return (
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        <p className={`${data && " text-green-500"}`}>*비밀번호</p>
      </label>
      <div className="  relative w-full top-5 right-1 bg-slate-800 flex justify-end items-center">
        <button type="button" className=" absolute text-gray-700" onClick={onEyeClick}>
          {passwordType !== "text" ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      </div>

      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
        id="input-password"
        name="password"
        placeholder="비번"
        onChange={onChange}
        type={passwordType}
        value={data}
        autoComplete="one-time-code"
      />
    </>
  );
};

export const InputObject = ({ onChange, data }) => {
  return (
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        <p className={`${data && " text-green-500"}`}>*물건종류</p>
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-city"
        type="text"
        placeholder="종류"
        onChange={onChange}
        name="object"
        value={data}
      />
    </>
  );
};
export const InputPlace = ({ onChange, data }) => {
  return (
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        <p className={`${data && " text-green-500"}`}>*습득위치</p>
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-last-name"
        type="text"
        placeholder="습득한 위치"
        onChange={onChange}
        name="place"
        value={data}
      />
    </>
  );
};

export const InputLocker = ({ onChange, data }) => {
  return (
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        <p className={`${data && " text-green-500"}`}>*보관위치</p>
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="맡겨놓은 장소"
        onChange={onChange}
        name="locker"
        value={data}
      />
    </>
  );
};

export const InputMemo = ({ onChange, data }) => {
  return (
    <>
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
        value={data}
      />
    </>
  );
};
