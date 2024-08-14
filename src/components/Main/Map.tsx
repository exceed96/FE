"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MapSearch from "@/Img/Main/MapSearch.svg";
import MapMarker from "@/Img/Main/MapMarker.svg";
import { useApartState } from "@/store/Apart";
import { useMapLocation } from "@/store/Map";
import { useModalState } from "@/store/Modal";
import MapLoading from "../Util/MapLoading";

type TApartDataTypes = {
  id: string;
  x: number;
  y: number;
};

type TMapProps = {
  apartData: TApartDataTypes[];
};

const Map = (props: TMapProps): JSX.Element => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [mapLoading, setMapLoading] = useState<boolean>(false);
  const { setData } = useApartState((state) => ({
    setData: state.setData,
  }));

  const { mapLocation } = useMapLocation((state) => ({
    mapLocation: state.mapLocation,
  }));

  const { setModalName } = useModalState((state) => ({
    setModalName: state.setModalName,
  }));

  // 함수 따로 빼기
  const getSuccess = async (position: GeolocationPosition) => {
    const lat = mapLocation.searchAreaY
      ? Number(mapLocation.searchAreaY)
      : 36.34;
    const lng = mapLocation.searchAreaX
      ? Number(mapLocation.searchAreaX)
      : 127.77;
    const { naver } = window;
    if (naver) setMapLoading(true);
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: mapLocation.searchAreaX ? 15 : 7,
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
        // naver.maps.Event.addListener(marker, "click", async function () {
        //   const response = await fetch(
        //     `${process.env.NEXT_PUBLIC_BASEURL}/main/detail?id=${apart.id}`
        //   );
        //   if (response.ok) {
        //     if (window.innerWidth < 1280) setModalName("apart");
        //     const data = await response.json();
        //     mapLocation.setRoadAddress(data.result.info.address);
        //     setData(data.result);
        //   }
        // });
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
        <MapLoading />
      )}
    </section>
  );
};

export default Map;
