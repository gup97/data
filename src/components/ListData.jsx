import { timestampToLocaleString } from "./InputDate";

export const ListData = ({ main, sub, part }) => {
  return (
    <button
      type="button"
      className="group p-2 w-full flex items-center justify-between rounded-md
            border border-gray-300 shadow-sm space-x-3 text-left hover:bg-gray-50 focus:outline-none 
            focus:ring focus:ring-offset-2 focus:ring-indigo-500"
    >
      <div className=" min-w-0 flex-1 flex items-center space-x-3">
        <div className=" px-7 min-w-0 flex-1">
          <div className="flex">
            <p className="font-medium text-gray-900 truncate">
              <span className="text-xs text-gray-400">습득물 : </span>
              {main}
            </p>
          </div>
          <div className="flex justify-between truncate">
            <p className="text-sm font-medium truncate ">
              <span className="text-xs text-gray-400">습득장소 : </span>
              {sub}
            </p>
            <p className="text-xs font-medium truncate text-gray-400 ">
              {timestampToLocaleString(new Date(part.seconds * 1000))}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

//   id: "2",
//   object: 물건
//   place: 주운 장소",
//   locker: 맡긴 장소
//   name: "이름 쓰여 있을시",
//   memo: 메모
