type TWeakApartInfoProps = {
  desgnr: string;
  cnstEntrprs: string;
  sprvsr: string;
};

export default function WeakApartInfo(props: TWeakApartInfoProps) {
  return (
    <div className="flex flex-col text-white px-6 py-8 border-[1px] border-[#D6E5FF] bg-[#F9FBFE]">
      <strong className="text-[#4764FF] text-xl">기본 정보</strong>
      <div className="mt-6 text-lg">
        <div className="mb-3 flex">
          <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
            설계사
          </strong>
          <span className="text-[#393D45]">{props.desgnr}</span>
        </div>
        <div className="mb-3 flex">
          <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
            시공사
          </strong>
          <span className="text-[#393D45]">{props.cnstEntrprs}</span>
        </div>
        <div className="flex">
          <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
            감리사
          </strong>
          <span className="text-[#393D45]">{props.sprvsr}</span>
        </div>
      </div>
    </div>
  );
}
