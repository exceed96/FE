import { TAPartDataType } from "@/types/ApartDataType";

type TMApartStandard = {
  title: string;
  data: TAPartDataType;
};

const MApartStandard = (props: TMApartStandard) => {
  const titleStyle = "font-[Pretendard-SemiBold] mr-4";

  const resultData = (function () {
    if (props.title === "기본 정보") {
      return {
        title1: "설계사",
        content1: props.data.aptInfo.desgnr,
        title2: "시공사",
        content2: props.data.aptInfo.cnstEntrprs,
        title3: "감리사",
        content3: props.data.aptInfo.sprvsr,
      };
    } else if (props.title === "기둥설치현황") {
      return {
        title1: "무량판",
        content1: props.data.buildInfo.buildStru,
        title2: "부실내용",
        content2: props.data.buildInfo.defctRsn,
      };
    } else if (props.title === "보완공법") {
      return {
        title1: "보강",
        content1: props.data.splmnInfo.reinfContent,
        title2: "보강내용",
        content2: props.data.splmnInfo.reinfStatus,
      };
    }
  })();

  return (
    <section className="p-4 border-[1px] border-[#D6E5FF]">
      <h2 className="text-[#4764FF] font-[Pretendard-Bold]">{props.title}</h2>
      <ul className="flex flex-col gap-3 mt-5">
        <li>
          <strong className={titleStyle}>{resultData.title1}</strong>
          <span>{resultData.content1}</span>
        </li>
        <li>
          <strong className={titleStyle}>{resultData.title2}</strong>
          <span>{resultData.content2}</span>
        </li>
        <li>
          <strong className={titleStyle}>{resultData.title3}</strong>
          <span>{resultData.content3}</span>
        </li>
      </ul>
    </section>
  );
};

export default MApartStandard;
