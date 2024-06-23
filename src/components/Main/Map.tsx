"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MapSearch from "@/Img/Main/MapSearch.svg";
import MapMarker from "@/Img/Main/MapMarker.svg";
import useAxios from "@/hooks/useAxios";
import { useApartState } from "@/store/Apart";
import { useMapLocation } from "@/store/Map";
import { useModalState } from "@/store/Modal";

// types폴더에 따로 빼야 한다.
interface apartDataTypes {
  id: string;
  x: number;
  y: number;
}

interface MapProps {
  apartData: apartDataTypes[];
}
// types폴더에 따로 빼야 한다.

const Map = (props: MapProps): JSX.Element => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [mapLoading, setMapLoading] = useState<boolean>(false);
  const instance = useAxios();
  const { setData } = useApartState();
  const { mapLocation } = useMapLocation();
  const { setModalName } = useModalState();
  // 함수 따로 빼기
  const getSuccess = async (position: GeolocationPosition) => {
    const lat = mapLocation.searchAreaY
      ? Number(mapLocation.searchAreaY)
      : position.coords.latitude;
    const lng = mapLocation.searchAreaX
      ? Number(mapLocation.searchAreaX)
      : position.coords.longitude;
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
          if (response.status === 200) {
            if (window.innerWidth < 1280) setModalName("apart");
            setData(response.data.result);
          }
        });
      });
    }
  };

  const getError = () => {
    console.log("location error");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getSuccess, getError);
  }, [mapLoading, mapLocation.searchAreaX, mapLocation.searchAreaY]);

  return (
    <section className="relative xl:w-3/4 w-full h-full xl:border-[#CED5E1] xl:border-[1px]">
      {mapLoading ? (
        <>
          <section className="absolute right-0 xl:right-auto top-0 xl:left-0 bg-[#6E7CA2] flex z-10 px-4 py-2.5">
            <Image
              src={MapSearch}
              alt="search region icon"
              className="mr-3.5"
            />
            <span className="text-white font-[Pretendard-SemiBold] xxs:text-xs xs:text-base sm:text-lg md:text-xl">
              {mapLocation.roadAddress}
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
