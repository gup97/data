import { Link } from "react-router-dom";

export const BottomSheetModal = ({ modalToID }) => {
  return (
    <>
      {modalToID && (
        <Link to={`${modalToID.id}`}>
          <div className=" z-50 fixed  bottom-0 bg-white border-2 w-full h-44 p-2">
            <div className="flex justify-around">
              <div className="flex-row w-1/2 p-2 text-sm">
                <p>
                  <span className=" font-bold text-blue-700">물건: </span>
                  <span className=""> {modalToID.object}</span>
                </p>
                <p>
                  <span className=" font-bold text-blue-700">위치: </span>
                  <span className=""> {modalToID.place}</span>
                </p>
                <p>
                  <span className=" font-bold text-blue-700">메모: </span>
                  <span className=""> {modalToID.memo}</span>
                </p>
              </div>
              <div className=" w-1/2  h-36 p-1 bg-slate-200">
                <img
                  className="object-scale-down h-full w-full bg-slate-200"
                  src={modalToID.imagePath}
                  alt="이미지 없음"
                />
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
