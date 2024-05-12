"use client";

import { useEffect } from "react";
import SearchIcon from "@/Img/Main/Search.svg";
import Image from "next/image";
import Map from "@/components/Main/Map";
import axios from "axios";

export default function Home() {
  const getData = async () => {
    try {
      const response = await axios.get("http://15.165.54.47:80/api/v1/main/");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="flex flex-col md:flex-row mt-16 h-[calc(100%-80px)]">
      <section className="w-full md:w-1/4 mr-8 flex flex-col">
        <section className="relative flex items-center h-1/10">
          <input
            type="text"
            className="border-[1px] border-[#6C82F7] border-solid text-[#4764FF] py-2.5 px-4 w-full outline-none"
          />
          <Image
            src={SearchIcon}
            alt={"location search"}
            className="absolute right-4"
          />
        </section>
        <section className="bg-[#F9FBFE] mt-3 h-9/10 flex flex-col justify-between">
          <section>
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
          </section>
        </section>
      </section>
      <Map />
    </main>
  );
}
