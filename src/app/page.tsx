"use client";

import { useState, useRef } from "react";
import Map from "@/components/Main/Map";
import SearchMapInput from "@/components/Main/SearchMapInput";
import { useQuery } from "@tanstack/react-query";
import useAxios from "@/hooks/useAxios";

export default function Home() {
  const searchAreaInputRef = useRef(null);
  const [searchXArea, setSearchXArea] = useState<string>("");
  const [searchYArea, setSearchYArea] = useState<string>("");
  const [roadAddress, setRoadAddress] = useState<string>("");
  const instance = useAxios();

  const fetchApartDatas = async () => {
    const response = await instance.get("/main/");
    return response.data;
  };

  const { data } = useQuery({
    queryKey: ["apart"],
    queryFn: fetchApartDatas,
    initialData: { result: { defectLocs: [] } },
  });

  const searchAreaApiHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchAreaInputRef.current.value) {
      naver.maps.Service.geocode(
        {
          query: searchAreaInputRef.current.value,
        },
        function (status, response) {
          if (status !== naver.maps.Service.Status.OK) {
            return alert("Something wrong!");
          }
          const result = response.v2; // 검색 결과의 컨테이너
          if (searchAreaInputRef.current.value)
            searchAreaInputRef.current.value = "";
          if (!result.addresses.length) {
            return;
          } else {
            setSearchYArea(result.addresses[0].y);
            setSearchXArea(result.addresses[0].x);
            setRoadAddress(result.addresses[0].roadAddress);
          }
        }
      );
    }
  };

  return (
    <main className="flex flex-col xl:flex-row xl:mt-16 h-[calc(100%-80px)] border-t-[1px] border-[#CDD0E2] xl:border-none">
      <section className="w-full flex flex-col xl:w-1/4 xl:mr-8">
        <SearchMapInput
          searchAreaInputRef={searchAreaInputRef}
          searchAreaApiHandler={searchAreaApiHandler}
        />
        <section className="bg-[#F9FBFE] xl:mt-3 xl:h-9/10 flex flex-col justify-between">
          {/* <section>
            <section className="flex flex-col text-white px-6 py-8 bg-[#425EF0]">
              <strong className="mb-2 text-2xl font-[Pretendard-Bold]">
                파주 운정 A34
              </strong>
              <span className="text-base font-[Pretendard-Medium]">
                경기도 파주시 동패동 2070번지
              </span>
            </section>
            <section className="flex flex-col text-white px-6 py-8 border-[1px] border-[#D6E5FF]">
              <strong className="text-[#4764FF] text-xl">기본 정보</strong>
              <section className="mt-6 text-lg">
                <section className="mb-3 flex">
                  <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                    설계사
                  </strong>
                  <span className="text-[#393D45]">에스아이/에이유</span>
                </section>
                <section className="mb-3 flex">
                  <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                    시공사
                  </strong>
                  <span className="text-[#393D45]">대보건설</span>
                </section>
                <section className="flex">
                  <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                    감리사
                  </strong>
                  <span className="text-[#393D45]">건원 신화 한빛</span>
                </section>
              </section>
            </section>
          </section>
          <section className="flex flex-col text-white px-6 py-8 border-[1px] border-[#D6E5FF]">
            <strong className="text-[#4764FF] text-xl">기둥 설치 현황</strong>
            <section className="mt-6 text-lg">
              <section className="mb-3 flex">
                <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                  전체
                </strong>
                <span className="text-[#393D45]">464</span>
              </section>
              <section className="mb-3 flex">
                <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                  무량판
                </strong>
                <span className="text-[#393D45]">331</span>
              </section>
              <section className="mb-3 flex">
                <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                  미흡개소
                </strong>
                <span className="text-[#393D45]">12</span>
              </section>
              <section className="flex">
                <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                  콘크리트 강도
                </strong>
                <span className="text-[#393D45]">25</span>
              </section>
            </section>
          </section>
          <section className="flex flex-col text-white px-6 py-8 border-[1px] border-[#D6E5FF]">
            <strong className="text-[#4764FF] text-xl">보완공법</strong>
            <section className="mt-6 text-lg">
              <section className="mb-3 flex">
                <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                  공법
                </strong>
                <span className="text-[#393D45]">슬래브보완</span>
              </section>
              <section className="mb-3 flex">
                <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                  보강현황
                </strong>
                <span className="text-[#FE7A1A]">보강중</span>
              </section>
              <section className="flex">
                <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                  공사 완료 예정일
                </strong>
                <span className="text-[#393D45]">2023.08.10</span>
              </section>
            </section>
          </section> */}
        </section>
      </section>
      <Map
        y={searchXArea}
        x={searchYArea}
        roadAddress={roadAddress}
        apartData={data.result.defectLocs}
      />
    </main>
  );
}
