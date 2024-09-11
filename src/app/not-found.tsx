import { GiBrokenWall } from "react-icons/gi";

export default function NotFound() {
  return (
    <div className="flex w-full h-svh justify-center items-center flex-col gap-2">
      <GiBrokenWall className="w-1/12 h-1/10" />
      <h1 className="text-2xl sm:text-3xl font-[Pretendard-ExtraBlack]">
        잘못된 페이지 접근입니다.
      </h1>
    </div>
  );
}
