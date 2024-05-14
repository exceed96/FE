"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MapSearch from "@/Img/Main/MapSearch.svg";
import MapMarker from "@/Img/Main/MapMarker.svg";
import useAxios from "@/hooks/useAxios";

interface apartDataTypes {
  id: string;
  x: number;
  y: number;
}

interface MapProps {
  x: string;
  y: string;
  roadAddress: string;
  apartData: apartDataTypes[];
}

const Map = (props: MapProps): JSX.Element => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [mapLoading, setMapLoading] = useState<boolean>(false);
  const instance = useAxios();

  console.log(MapSearch);
  const getSuccess = (position: GeolocationPosition) => {
    const lat = props.x ? Number(props.x) : position.coords.latitude;
    const lng = props.y ? Number(props.y) : position.coords.longitude;
    const { naver } = window;
    if (naver) setMapLoading(true);
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
      });

      props.apartData.map((apart) => {
        const location = new naver.maps.LatLng(apart.y, apart.x);
        const marker = new naver.maps.Marker({
          position: location,
          map,
          icon: {
            url: MapMarker.src,
            size: new naver.maps.Size(45, 50),
            scaledSize: new naver.maps.Size(45, 50),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(12, 34),
          },
        });
        naver.maps.Event.addListener(marker, "click", async function () {
          const response = await instance.get(`/main/detail?id=${apart.id}`);
          console.log(response);
        });
      });
    }
  };

  const getError = () => {
    console.log("location error");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getSuccess, getError);
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
              {props.roadAddress}
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
