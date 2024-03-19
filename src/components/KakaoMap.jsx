/* global kakao */
import { useEffect, useRef, useState } from 'react';
import useCurrentLocation from './../hooks/useCurrentLocation';

const { kakao } = window;

const KakaoMap = ({data}) => {
  const {location} = useCurrentLocation();
  const {latitude: currentLat, longitude: currentLon} = location;
  const mapRef = useRef(null);
  const currentInfowindow = useRef(null); 

  //카카오맵 불러오기
  useEffect(() => {
    const mapContainer = mapRef.current,
          mapOption = {
            center: new kakao.maps.LatLng(currentLat, currentLon), // 지도의 중심좌표 = 현재위치
            level: 10 // 지도의 확대 레벨
          };
    const map = new kakao.maps.Map(mapContainer, mapOption);//지도 생성
   
    // 데이터를 기반으로 마커와 인포윈도우 생성
    data.forEach((item) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(item.yValue, item.xValue),
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: item.unitName, // 인포윈도우에 표시할 내용
      });

      kakao.maps.event.addListener(marker, 'click', () => {
        // 다른 마커를 클릭했을 때 이전에 열린 인포윈도우가 있다면 닫습니다.
        if (currentInfowindow.current) {
          currentInfowindow.current.close();
        }
        // 현재 인포윈도우를 열고, currentInfowindow에 저장합니다.
        infowindow.open(map, marker);
        currentInfowindow.current = infowindow;
      });
    });
  },[location, data]);
  

  return (
    <div 
      id="map"
      ref={mapRef} 
      style={{width: "100%", height: "500px"}}
    >
      지도
    </div>
  );
};

export default KakaoMap;