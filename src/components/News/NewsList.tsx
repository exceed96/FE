import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

type TNewsListType = {
  image?: string | null;
  title: string;
  content: string;
  url: string;
  platform: string;
  createAt: string;
};

type TNewsListProps = {
  data: TNewsListType;
};

const NewsList = ({ data }: TNewsListProps): JSX.Element => {
  const { image, title, content, url, platform, createAt } = data;

  const parseCreateAt = createAt.split("-");

  // const parseData = (data: string) => {
  //   const doc = new DOMParser().parseFromString(data, "text/html");
  //   return doc.body.textContent || "";
  // };

  return (
    <li className="bg-white border-[1px] border-[#CBD1F3] border-solid  px-4 xl:py-3 lg:px-12 flex cursor-pointer min-h-20 xxs:min-h-24 xs:min-h-28 sm:min-h-32 md:min-h-36 lg:min-h-40 xl:min-h-44 max-h-28 xxs:max-h-32 xs:max-h-36 sm:max-h-40 md:max-h-44 lg:max-h-48 xl:max-h-52">
      <Link href={url} target="_blank">
        <section className="flex flex-col justify-around h-full">
          <section className="flex flex-col mt-3.5">
            <section className="font-[Pretendard-Medium] text-[#90949C] mb-1">
              <span className="mr-5 font-[Pretendard-Medium] text-[10px] sm:text-sm lg:text-base">
                {platform}
              </span>
              <span className="font-[Pretendard-Medium] text-[10px] sm:text-sm lg:text-base">
                {`${parseCreateAt[0]}.${parseCreateAt[1]}.${
                  parseCreateAt[2].split("T")[0]
                }`}
              </span>
            </section>
            <span className="font-[Pretendard-SemiBold] line-clamp-1 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-[#303948] mt-1 mb-2.5">
              {parse(title)}
            </span>
          </section>
          <section className="flex md:mt-5 mb-3">
            {/* {image && (
              <Image
                src={image}
                alt={"news image"}
                className="mr-10"
                width={100} // 적절한 너비와 높이 값 설정
                height={100}
              />
            )} */}
            <p className="text-[#505B6E] text-[12px] sm:text-sm md:text-base lg:text-lg xl:text-xl w-full line-clamp-2 xs:line-clamp-3 xl:line-clamp-1">
              {parse(content)}
            </p>
          </section>
        </section>
      </Link>
    </li>
  );
};

export default NewsList;
