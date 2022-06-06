import React, { useState } from "react";
import KakaoMap from "components/KakaoMap";

export const MapContainer = ({ setData }) => {
  const [visible, setVisible] = useState(true);
  const [mapSize, setMapSize] = useState(["max-w-md", "400px"]);

  return (
    <div className="MapContainer">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        GPS 기능 추가중
      </label>
      <button type="button" onClick={() => setVisible((visible) => !visible)}>
        Toggle(Mount/Unmount)
      </button>
      <div id="wrap">
        {visible && (
          <>
            <KakaoMap size={mapSize} setData={setData} />
          </>
        )}
      </div>
    </div>
  );
};

export const MapListContainer = ({ userData }) => {
  const markerPositions = userData.map((test) => {
    return [test.location.lat, test.location.lng];
  });
  //   const markerPositions2 = [
  //     [37.499590490909185, 127.0263723554437],
  //     [37.499427948430814, 127.02794423197847],
  //     [37.498553760499505, 127.02882598822454],
  //     [37.497625593121384, 127.02935713582038],
  //     [37.49629291770947, 127.02587362608637],
  //     [37.49754540521486, 127.02546694890695],
  //     [37.49646391248451, 127.02675574250912],
  //   ];

  const [mapSize, setMapSize] = useState(["100%", "100%"]);

  return <KakaoMap markerPositions={markerPositions} size={mapSize} />;
};
