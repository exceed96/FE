import Image from "next/image";
import NewsImage from "@/Img/News/newsImage.svg";

const NewsList = (): JSX.Element => {
  return (
    <li className="bg-white border-[1px] border-[#CBD1F3] border-solid py-6 px-12 flex mb-10 cursor-pointer">
      <Image src={NewsImage} alt={"news image"} className="mr-10" />
      <section>
        <section className="font-[Pretendard-Medium] text-base text-[#90949C]">
          <span className="mr-5 font-[Pretendard-Medium]">연합뉴스</span>
          <span className="font-[Pretendard-Medium]">2023.08.30</span>
        </section>
        <section className="flex flex-col">
          <span className="font-[Pretendard-SemiBold] text-xl text-[#303948] mt-2.5">
            'LH부실공사' 감리업체, 안전평가서도 문제점 수두룩
          </span>
          <p className="mt-3 text-[#505B6E] text-lg line-clamp-2">
            LH 부실공사로 지적된 단지의 감리업체들이 안전관리 평가에서도 다수의
            문제점이 발견된 것으로 나타났다. 인센티브는 있지만 규제사항은 없는
            공공건설 공사업체 평가제도를 손봐야 한다는 지적이 나온다. 30일 국회
            국토교통위원회 소속 국민의힘 유경준 의원이 국토안전관리원로부터 제출
            받은 2022년 안전관리 수준평가 세부평가표를 분석한 결과 LH 부실공사로
            지적된 단지의 감리업체들이 국토부 '안전관리 수준평가' 에서도 다수의
            문제점이 발견됐다.
          </p>
        </section>
      </section>
    </li>
  );
};

export default NewsList;
