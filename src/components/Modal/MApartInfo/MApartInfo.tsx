import MApartHeader from "./MApartHeader";
import MApartStandard from "./MApartStandard";
import { useApartState } from "@/store/Apart";

const MApartInfo = () => {
  const { data } = useApartState();
  return (
    <div className="overflow-scroll h-full border-[1px] border-[#D6E5FF]">
      <MApartHeader data={data} />
      <MApartStandard title="기본 정보" data={data} />
      <MApartStandard title="기둥설치현황" data={data} />
      <MApartStandard title="보완공법" data={data} />
    </div>
  );
};

export default MApartInfo;
