import React, { useEffect, useState, useRef } from "react";
/* global kakao */
export default function KakaoMap(props) {
  const { size, setData, data } = props;
  const {
    markerPositions,
    markerUser,
    mouseOver,
    MouseClick,
    mouseOut,
    CustomOverLayout,
    mapClick,
  } = props;
  const [kakaoMap, setKakaoMap] = useState(null);
  const [, setMarkers] = useState([]);
  const CENTER_VALUE = { lat: 35.91049066285645, lng: 128.80801119490002 };

  const container = useRef();
  useEffect(() => {
    kakao.maps.load(() => {
      const center = new kakao.maps.LatLng(CENTER_VALUE.lat, CENTER_VALUE.lng);
      const options = {
        center,
        level: 4,
      };
      const map = new kakao.maps.Map(container.current, options);
      //setMapCenter(center);
      setKakaoMap(map);
    });
  }, [container]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }
    // save center position
    const center = kakaoMap.getCenter();
    // change viewport size
    const [width, height] = size;
    container.current.style.width = `${width}`;
    container.current.style.height = `${height}`;
    // relayout and...
    kakaoMap.relayout();
    // restore
    kakaoMap.setCenter(center);
  }, [kakaoMap, size]);

  useEffect(() => {
    if (kakaoMap === null || markerPositions === undefined) {
      return;
    }
    const positions = markerPositions.map((pos) => new kakao.maps.LatLng(...pos));
    console.log(markerPositions);
    setMarkers(() => {
      // clear prev markers
      console.log("positions", positions);
      //남아 있던 마커제거
      return positions.map((position, index) => {
        console.log("position", position);
        const marker = new kakao.maps.Marker({ map: kakaoMap, position });
        const userData = markerUser[index];
        // const tempContent = userData.object;
        const tempContent = CustomOverLayout;

        const content = `<div class="bg-black opacity-70 top-[20px] right-1 relative p-1">
          <p class=" text-white">${userData.object}</p>
        </div>`;

        var overlayHover = new kakao.maps.CustomOverlay({
          content,
          map: kakaoMap,
          position,
        });
        kakao.maps.event.addListener(marker, "mouseover", function () {
          overlayHover.setMap(kakaoMap);
          mouseOver();
        });
        kakao.maps.event.addListener(marker, "mouseout", function () {
          overlayHover.setMap(null);
          mouseOut();
        });
        kakao.maps.event.addListener(marker, "click", function () {
          MouseClick(userData);
          // overlay.setMap(kakaoMap);
        });
        kakao.maps.event.addListener(kakaoMap, "click", function () {
          overlayHover.setMap(null);
          mapClick();
          // MouseClick(userData.id);
        });
        overlayHover.setMap(null);
      });
    });
  }, [kakaoMap, markerPositions]);

  useEffect(() => {
    if (kakaoMap === null || setData === undefined) {
      return;
    }
    var marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: data ? new kakao.maps.LatLng(data.location.lat, data.location.lng) : "",
    });
    // 지도에 마커를 표시합니다
    marker.setMap(kakaoMap);
    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(kakaoMap, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;
      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);
      setData((state) => ({
        ...state,
        location: {
          lat: latlng.getLat(),
          lng: latlng.getLng(),
        },
      }));
    });
  }, [kakaoMap]);

  return <div id="container" ref={container} />;
}
