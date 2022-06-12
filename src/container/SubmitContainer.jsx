import React from "react";
import { useState } from "react";
import { handleAddItem } from "util/utils";
import { InputImageFile } from "components/InputImageFile";
import { InputDate } from "components/InputDate";
import { MapContainer } from "./MapContainer";
import {
  InputLocker,
  InputMemo,
  InputName,
  InputObject,
  InputPassword,
  InputPlace,
} from "components/InputText";

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
    // console.log(form);
    const { value, name } = e.target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };
  const showData = () => {
    // console.log(form);
  };

  const onSubmit = (e) => {
    if (
      form.name === "" ||
      form.password === "" ||
      form.object === "" ||
      form.place === "" ||
      form.locker === ""
    ) {
      alert(" *항목은 필수입력입니다.");
    } else {
      handleAddItem(form);
      alert("제출되었습니다.");
    }
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
      <div className="bg-white px-4 py-1 pb-4">
        <form onSubmit={onSubmit} className="w-full sm:max-w-3xl sm:text-sm">
          <div className="flex flex-wrap -mx-3  md:mb-6">
            <div className="w-1/2 md:w-1/4  px-3 md:mb-0">
              <InputName onChange={onChange} data={form.name} />
            </div>
            <div className="w-1/2 md:w-1/4 px-3 md:mb-0">
              <InputPassword onChange={onChange} data={form.password} />
            </div>
            <div className="w-1/2 md:w-1/4 px-3">
              <InputObject onChange={onChange} data={form.object} />
            </div>
            <div className="w-1/2 md:w-1/4 px-3 md:mb-6">
              <InputDate
                userDoc={form}
                onChange={onChange}
                data={form.date}
                setData={setForm}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 md:mb-6">
              <InputPlace onChange={onChange} data={form.place} />
            </div>
            <div className="w-full md:w-1/3 px-3 md:mb-6">
              <InputLocker onChange={onChange} data={form.locker} />
            </div>
            <div className="w-full md:w-1/3 px-3 md:mb-6">
              <InputMemo onChange={onChange} data={form.memo} />
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
