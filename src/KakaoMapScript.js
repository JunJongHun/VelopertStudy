export default function KakaoMapScript() {
  const { kakao } = window;
  const container = document.getElementById("myMap");
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
  let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  let ps = new kakao.maps.services.Places();

  return [kakao, map, infowindow, ps];
}
