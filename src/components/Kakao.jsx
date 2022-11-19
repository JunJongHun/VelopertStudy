import React, { useEffect, useRef, useState } from "react";
import KakaoMapScript from "../KakaoMapScript";

export default function Kakao() {
  let [word, setWord] = useState("");
  let [kakao, setKakao] = useState({});
  let [map, setMap] = useState({});
  let [infowindow, setInfowindow] = useState({});
  let [ps, setPs] = useState({});
  let [markers, setMarkers] = useState([]);
  useEffect(() => {
    console.log("카카오맵 자바스크립트 실행");
    let [kakao, map, infowindow, ps] = KakaoMapScript();
    setKakao(kakao);
    setMap(map);
    setInfowindow(infowindow);
    setPs(ps);
  }, []);

  useEffect(() => {
    console.log("키워드 입력중..");
  }, [word]);

  let typingWord = (e) => {
    console.log(e.target.value);

    setWord(e.target.value);
  };

  let onSearch = () => {
    removeMarker();
    ps.keywordSearch(word, placesSearchCB);
  };
  let placesSearchCB = (data, status, pagination) => {
    if (status === kakao.maps.services.Status.OK) {
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      var bounds = new kakao.maps.LatLngBounds();
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        displayMarker(data[i]);
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
    }
  };

  let displayMarker = (place) => {
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    let test = [...markers];
    test.push(marker);
    console.log("test 배열상태");
    console.log(test);
    setMarkers(test);
    console.log("sss" + markers);
    console.log(markers);

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infowindow.setContent(
        '<div style="padding:5px;font-size:12px;">' +
          place.place_name +
          "</div>"
      );
      infowindow.open(map, marker);
      console.log(`${place.place_name}의 위도 경도는 =` + place.y, place.x);
    });
  };

  let removeMarker = () => {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    setMarkers([]);
  };
  return (
    <>
      <div
        id="myMap"
        style={{
          width: "1000px",
          height: "800px",
        }}
      ></div>
      <input type="text" onChange={typingWord} />
      <button onClick={onSearch}>검색</button>
    </>
  );
}
