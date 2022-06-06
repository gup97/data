import React from "react";
import { useState } from "react";
import { handleAddItem } from "util/utils";
import { InputImageFile } from "components/InputImageFile";
import { InputDate } from "components/InputDate";
import { MapContainer } from "./MapContainer";

// import { mock as userStore } from "./mock";
const SubmitContainer = () => {
  // const [date, setDate] = useState(new Date());
  const [form, setForm] = useState({
    name: "", //습득한사람 이름
    password: "", //비번
    object: "", //물건 종류
    place: "", //습득위치
    locker: "", // 보관장소
    memo: "", //
    imagePath: "",
    date: new Date(),
    location: {
      lat: "",
      lng: "",
    },
  });

  const onChange = (e) => {
    console.log(form);
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
    handleAddItem(form);
    console.log("제출");
    // firebase 값 전송 (성공)
    //여기서 이미지를 서버에올리고()
    //초기화
    setForm({
      name: "", //습득한사람 이름
      password: "",
      object: "", //물건 종류
      place: "", //습득위치
      locker: "", // 보관장소
      memo: "", //
      imagePath: "",
      location: {
        lat: "",
        lng: "",
      },
      date: new Date(),
    });
    e.preventDefault();
  };
  return (
    <div className=" max-w-md mx-auto max-h-full sm:max-w-3xl">
      <div className="bg-white px-4 py-1">
        <form onSubmit={onSubmit} className="w-full sm:max-w-3xl sm:text-sm">
          <div className="flex flex-wrap -mx-3  md:mb-6">
            <div className="w-1/2 md:w-1/4  px-3 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                이름
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
                id="input-name"
                type="text"
                placeholder="이름을 입력하세요"
                onChange={onChange}
                name="name"
                value={form.name}
              />
            </div>
            <div className="w-1/2 md:w-1/4 px-3 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                비번
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
                id="input-password"
                type="password"
                placeholder="비번"
                onChange={onChange}
                name="password"
                value={form.password}
                autoComplete="off"
              />
            </div>
            <div className="w-1/2 md:w-1/4 px-3">
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
                value={form.object}
              />
            </div>
            <div className="w-1/2 md:w-1/4 px-3 md:mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                날짜
              </label>
              <div>
                <InputDate
                  userDoc={form}
                  onChange={onChange}
                  data={form.date}
                  setData={setForm}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 md:mb-6">
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
                value={form.place}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 md:mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                보관장소
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="맡겨놓은 장소"
                onChange={onChange}
                name="locker"
                value={form.locker}
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
                value={form.memo}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-15 md:mb-0">
              <InputImageFile data={form} setData={setForm} />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-15 md:mb-0">
              <MapContainer setData={setForm} />
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
      </div>
    </div>
  );
};

export default SubmitContainer;
