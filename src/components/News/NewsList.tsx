import Image from "next/image";
import NewsImage from "@/Img/News/newsImage.svg";

const NewsList = (): JSX.Element => {
  return (
    <li className="bg-white border-[1px] border-[#CBD1F3] border-solid px-4 py-4 lg:py-6 lg:px-12 flex mb-5 cursor-pointer">
      <section>
        <section className="flex flex-col mb-2">
          <section className="font-[Pretendard-Medium] text-[#90949C]">
            <span className="mr-5 font-[Pretendard-Medium] text-sm lg:text-base">
              연합뉴스
            </span>
            <span className="font-[Pretendard-Medium] text-sm lg:text-base">
              2023.08.30
            </span>
          </section>
          <span className="font-[Pretendard-SemiBold] text-base text-[#303948] mt-1">
            'LH부실공사' 감리업체, 안전평가서도 문제점 수두룩
          </span>
        </section>
        <section className="flex md:mt-5">
          <Image
            src={NewsImage}
            alt={"news image"}
            className="mr-10 md:max-w-[186px] max-h-[82px]"
          />
          <p className="text-[#505B6E] line-clamp-3 text-sm lg:text-lg w-full">
            LH 부실공사로 지적된 단지의 감리업체들이 안전관리 평가에서도 다수의
            문제점이 발견된 것으로 나타났다. 인센티브는 있지만 규제사항은 없는
            공공건설 공사업체 평가제도를 손봐야 한다는 지적이 나온다. 30일 국회
            국토교통위원회 소속 국민의힘 유경준 의원이 국토안전관리원로부터 제출
            받은 2022년 안전관리 수준평가 세부평가표를 분석한 결과 LH 부실공사로
            지적된 단지의 감리업체들이 국토부 '안전관리 수준평가' 에서도 다수의
            문제점이 발견됐다. LH 부실공사로 지적된 단지의 감리업체들이 안전관리
            평가에서도 다수의 문제점이 발견된 것으로 나타났다. 인센티브는 있지만
            규제사항은 없는 공공건설 공사업체 평가제도를 손봐야 한다는 지적이
            나온다.
          </p>
        </section>
      </section>
    </li>
  );
};

export default NewsList;
