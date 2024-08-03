"use client";

import React from "react";
import { useApartState } from "@/store/Apart";
import { useModalState } from "@/store/Modal";

function Detail() {
  const { data } = useApartState();
  const { modalName } = useModalState();

  return (
    <>
      {data && !modalName && (
        <section className="bg-[#F9FBFE] xl:mt-3 xl:h-9/10 flex flex-col justify-between">
          <section>
            <section className="flex flex-col text-white px-6 py-8 bg-[#425EF0]">
              <strong className="mb-2 text-2xl font-[Pretendard-Bold]">
                {data.info.title}
              </strong>
              <span className="text-base font-[Pretendard-Medium]">
                {data.info.subTitle}
              </span>
              <span className="text-base font-[Pretendard-Medium]">
                {data.info.address}
              </span>
            </section>
            <section className="flex flex-col text-white px-6 py-8 border-[1px] border-[#D6E5FF]">
              <strong className="text-[#4764FF] text-xl">기본 정보</strong>
              <section className="mt-6 text-lg">
                <section className="mb-3 flex">
                  <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                    설계사
                  </strong>
                  <span className="text-[#393D45]">{data.aptInfo.desgnr}</span>
                </section>
                <section className="mb-3 flex">
                  <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                    시공사
                  </strong>
                  <span className="text-[#393D45]">
                    {data.aptInfo.cnstEntrprs}
                  </span>
                </section>
                <section className="flex">
                  <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                    감리사
                  </strong>
                  <span className="text-[#393D45]">{data.aptInfo.sprvsr}</span>
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
                <span className="text-[#393D45]">
                  {data.buildInfo.buildStru}
                </span>
              </section>
              <section className="mb-3 flex">
                <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                  무량판
                </strong>
                <span className="text-[#393D45]">
                  {data.buildInfo.defctRsn}
                </span>
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
                <span className="text-[#393D45]">
                  {data.splmnInfo.reinfStatus}
                </span>
              </section>
              <section className="mb-3 flex">
                <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
                  보강현황
                </strong>
                <span className="text-[#FE7A1A]">
                  {data.splmnInfo.reinfStatus === 1 && "진행 예정"}
                  {data.splmnInfo.reinfStatus === 2 && "진행 중"}
                  {data.splmnInfo.reinfStatus === 3 && "진행 완료"}
                </span>
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
      )}
    </>
  );
}

export default React.memo(Detail);
