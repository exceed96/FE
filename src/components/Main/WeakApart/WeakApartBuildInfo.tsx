type TWeakApartBuildInfo = {
  buildStru: string;
  defctRsn: string;
};

export default function WeakApartBuildInfo(props: TWeakApartBuildInfo) {
  return (
    <div className="flex flex-col text-white px-6 py-8 border-[1px] border-[#D6E5FF] bg-[#F9FBFE]">
      <strong className="text-[#4764FF] text-xl">기둥 설치 현황</strong>
      <div className="mt-6 text-lg">
        <div className="mb-3 flex">
          <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
            전체
          </strong>
          <span className="text-[#393D45]">{props.buildStru}</span>
        </div>
        <div className="mb-3 flex">
          <strong className="text-[#0F0E0E] font-[Pretendard-SemiBold] mr-4">
            무량판
          </strong>
          <span className="text-[#393D45]">{props.defctRsn}</span>
        </div>
      </div>
    </div>
  );
}
