import React from "react";
import { Link } from "react-router-dom";
const Page = () => {
  return (
    <div className=" max-w-md mx-auto sm:max-w-xl">
      <div className="bg-white px-4 py-6 ">
        <Link to="submit">
          <div className=" hover:cursor-pointer border-dashed border-2 text-center border-blue-500 rounded-md py-10">
            <p className=" text-blue-500 text-2xl font-bold">물건을 주웠습니다</p>
          </div>
        </Link>

        <Link to="list">
          <div className=" hover:cursor-pointer border-dashed border-2 text-center border-red-500 rounded-md py-10 my-5">
            <p className=" text-red-500 text-2xl font-bold">물건을 분실했어요</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
