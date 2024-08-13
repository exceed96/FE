"use client";

import MapSearchInput from "./SearchMapInput";
import WeakApart from "../WeakApart/WeakApart";
import { useRef } from "react";
import { useMapLocation } from "@/store/Map";

export default function MapSearch() {
  const searchAreaInputRef = useRef(null);
  const { mapLocation } = useMapLocation();

  const searchAreaApiHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchAreaInputRef.current.value) {
      naver.maps.Service.geocode(
        {
          query: searchAreaInputRef.current.value,
        },
        function (status, response) {
          if (status !== naver.maps.Service.Status.OK) {
            return alert("지도 검색 에러 발생!");
          }
          const result = response.v2;
          if (searchAreaInputRef.current.value)
            searchAreaInputRef.current.value = "";
          if (!result.addresses.length) {
            return;
          } else {
            mapLocation.setSearchAreaY(result.addresses[0].y);
            mapLocation.setSearchAreaX(result.addresses[0].x);
            mapLocation.setRoadAddress(result.addresses[0].roadAddress);
          }
        }
      );
    }
  };

  return (
    <section className="w-full flex flex-col justify-start xl:w-1/4 xl:mr-8">
      <MapSearchInput
        searchAreaInputRef={searchAreaInputRef}
        searchAreaApiHandler={searchAreaApiHandler}
      />
      <WeakApart />
    </section>
  );
}
