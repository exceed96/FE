"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MapSearch from "@/Img/Main/MapSearch.svg";

const Map = (): JSX.Element => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [mapLoading, setMapLoading] = useState<boolean>(false);

  const getSuccess = (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const { naver } = window;
    // if (naver) setMapLoading(true);
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const location2 = new naver.maps.LatLng(lat + 1, lng + 1);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
      });
      new naver.maps.Marker({
        position: location,
        map,
        icon: {
          url: "Img/Main/MapMarker.png",
          size: new naver.maps.Size(45, 50),
          scaledSize: new naver.maps.Size(45, 50),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(12, 34),
        },
      });
      new naver.maps.Marker({
        position: location2,
        map,
        icon: {
          url: "Img/Main/MapMarker.png",
          size: new naver.maps.Size(45, 50),
          scaledSize: new naver.maps.Size(45, 50),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(12, 34),
        },
      });
    }
  };

  const getError = () => {
    console.log("location error");
  };

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(getSuccess, getError);
  }, [mapLoading]);

  return (
    <section className="relative md:w-3/4 w-full border-[#CED5E1] border-[1px]">
      {mapLoading ? (
        <>
          <section className="absolute top-0 left-0 bg-[#6E7CA2] flex z-10 px-4 py-2.5">
            <Image
              src={MapSearch}
              alt="search region icon"
              className="mr-3.5"
            />
            <span className="text-white font-[Pretendard-SemiBold] text-xl">
              동대문구 용산동
            </span>
          </section>
          <section className="w-full h-full" id="map" ref={mapRef} />
        </>
      ) : (
        <section className="w-full bg-[#F0F5FE] h-full flex flex-col justify-center items-center text-[#535B83]">
          <span className="text-lg">지도를 불러오는 중입니다</span>
          <div className="flex items-center mt-5">
            <div className="h-3 w-3 rounded-full mr-2 animate-[changeColor_1.5s_infinite]"></div>
            <div className="h-3 w-3 rounded-full mx-2 animate-[changeColor_1.5s_infinite_300ms]"></div>
            <div className="h-3 w-3 rounded-full ml-2 animate-[changeColor_1.5s_infinite_600ms]"></div>
          </div>
        </section>
      )}
    </section>
  );
};

export default Map;
