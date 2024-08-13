export default function MapLoading() {
  return (
    <section className="w-full bg-[#F0F5FE] h-full flex flex-col justify-center items-center text-[#535B83]">
      <span className="text-lg">지도를 불러오는 중입니다</span>
      <div className="flex items-center mt-5">
        <div className="h-3 w-3 rounded-full mr-2 animate-[changeColor_1.5s_infinite]"></div>
        <div className="h-3 w-3 rounded-full mx-2 animate-[changeColor_1.5s_infinite_300ms]"></div>
        <div className="h-3 w-3 rounded-full ml-2 animate-[changeColor_1.5s_infinite_600ms]"></div>
      </div>
    </section>
  );
}
