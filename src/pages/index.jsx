import React from "react";
import { Link } from "react-router-dom";
import DCU from "asset/dcu.png";
const Page = () => {
  return (
    <>
      <div className=" bg-white ">
        <div className=" max-w-md  mx-auto h-screen flex justify-center items-center sm:max-w-xl ">
          <div className="absolute inset-x-0 top-0 h-16 "></div>
          <div className=" h-32 flex flex-wrap justify-center  px-4 py-6 content-around gap-5">
            <Link to="list">
              <div className=" group hover:bg-red-500 hover:border-white  bg-white   border-2 text-center border-red-500 rounded-md p-5">
                <p className=" group-hover:text-white  text-red-500 text-2xl font-bold">
                  물건을 찾고있어요
                </p>
              </div>
            </Link>
            <Link to="submit">
              <div className=" group hover:bg-blue-500 hover:border-white bg-white  border-2 text-center border-blue-500 rounded-md p-5">
                <p className=" group-hover:text-white  text-blue-500 text-2xl font-bold">
                  물건을 주웠습니다
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <img src={DCU} alt="" className=" scale-50 fixed bottom-2 right-0" />
    </>
  );
};

export default Page;
