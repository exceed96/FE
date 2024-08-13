type TWeakApartSubInfoProps = {
  reinfStatus: number;
  reinfContent: string;
};

export default function WeakApartSupInfo(props: TWeakApartSubInfoProps) {
  return (
    <div className="flex flex-col text-white px-6 py-8 border-[1px] border-[#D6E5FF]">
      <strong className="text-[#4764FF] text-xl">보완공법</strong>
      <div className="mt-6 text-lg">
        <div className="mb-3 flex">
          <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
            보완내용
          </strong>
          <span className="text-[#393D45]">{props.reinfContent}</span>
        </div>
        <div className="mb-3 flex">
          <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
            공법
          </strong>
          <span className="text-[#393D45]">{props.reinfStatus}</span>
        </div>
        <div className="mb-3 flex">
          <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
            보강현황
          </strong>
          <span className="text-[#FE7A1A]">
            {props.reinfStatus === 1 && "진행 예정"}
            {props.reinfStatus === 2 && "진행 중"}
            {props.reinfStatus === 3 && "진행 완료"}
          </span>
        </div>
      </div>
    </div>
  );
}
