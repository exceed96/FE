import parse from "html-react-parser";

type TNewsTitleProps = {
  title: string;
  platform: string;
  createAt: string;
};

export default function NewsTitle(props: TNewsTitleProps) {
  const parseCreateAt = props.createAt.split("-");

  return (
    <section className="flex flex-col mt-3.5">
      <section className="font-[Pretendard-Medium] text-[#90949C] mb-1">
        <span className="mr-5 font-[Pretendard-Medium] text-[10px] sm:text-sm lg:text-base">
          {props.platform}
        </span>
        <span className="font-[Pretendard-Medium] text-[10px] sm:text-sm lg:text-base">
          {`${parseCreateAt[0]}.${parseCreateAt[1]}.${
            parseCreateAt[2].split("T")[0]
          }`}
        </span>
      </section>
      <span className="font-[Pretendard-SemiBold] line-clamp-1 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-[#303948] mt-1 mb-2.5">
        {parse(props.title)}
      </span>
    </section>
  );
}
