import React, { useState } from "react";
import KakaoMap from "components/KakaoMap";

export const MapContainer = ({ data = "", setData }) => {
  const [visible, setVisible] = useState(false);
  const [mapSize, setMapSize] = useState(["max-w-md", "400px"]);
  return (
    <div className="MapContainer">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        습득 위치 (지도)
      </label>
      <button
        type="button"
        className=" bg-blue-500 w-full rounded-sm hover:bg-blue-700"
        onClick={() => setVisible((visible) => !visible)}
      >
        <p className=" text-gray-200">{!visible ? "지도 열기" : "지도 닫기"}</p>
      </button>
      <div id="wrap">
        {visible && (
          <>
            <KakaoMap size={mapSize} data={data} setData={setData} />
          </>
        )}
      </div>
    </div>
  );
};

export const MapListContainer = ({ userData, setModalToID }) => {
  const markerPositions = userData.map((test) => {
    return [test.location.lat, test.location.lng];
  });
  const markerUser = userData.map((user) => {
    return user;
  });
  const [mapSize, setMapSize] = useState(["100%", "100%"]);
  const MouseClick = (userData) => {
    console.log("마우스클릭처리");
    console.log(userData);
    setModalToID(() => userData);
  };
  const mouseOver = () => {};
  const mouseOut = () => {};
  const mapClick = () => {
    console.log("맵클릭");
    setModalToID(() => null);
  };
  return (
    <>
      <KakaoMap
        CustomOverLayout={CustomOverLayout}
        markerPositions={markerPositions}
        markerUser={markerUser}
        size={mapSize}
        mouseOver={mouseOver}
        mouseOut={mouseOut}
        MouseClick={MouseClick}
        mapClick={mapClick}
      />
    </>
  );
};
const CustomOverLayout = () => {
  return <div>dad</div>;
};
