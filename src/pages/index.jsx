import React from "react";
import { Link } from "react-router-dom";
const Page = () => {
  return (
    <>
      <div className=" max-w-md  mx-auto h-screen flex justify-center items-center sm:max-w-xl ">
        <div class="absolute inset-x-0 top-0 h-16 "></div>
        <div className="bg-white h-1/2 flex flex-wrap justify-center  px-4 py-6 content-around">
          <Link to="submit">
            <div className=" group hover:bg-blue-500 hover:border-white   border-dashed border-2 text-center border-blue-500 rounded-md p-10">
              <p className=" group-hover:text-white  text-blue-500 text-2xl font-bold">
                물건을 주웠습니다
              </p>
            </div>
          </Link>

          <Link to="list">
            <div className=" group hover:bg-red-500 hover:border-white   border-dashed border-2 text-center border-red-500 rounded-md p-10">
              <p className=" group-hover:text-white  text-red-500 text-2xl font-bold">
                물건을 찾고있어요
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
