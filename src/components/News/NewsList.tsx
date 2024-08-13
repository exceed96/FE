import Link from "next/link";
import NewsTitle from "./NewsTitle";
import NewsContent from "./NewsContent";
import { TNewsListType } from "@/types/NewsType";

type TNewsListProps = {
  data: TNewsListType;
};

const NewsList = ({ data }: TNewsListProps): JSX.Element => {
  const { title, content, url, platform, createAt } = data;

  return (
    <li className="bg-white border-[1px] border-[#CBD1F3] border-solid  px-4 xl:py-3 lg:px-12 flex cursor-pointer min-h-20 xxs:min-h-24 xs:min-h-28 sm:min-h-32 md:min-h-36 lg:min-h-40 xl:min-h-44 max-h-28 xxs:max-h-32 xs:max-h-36 sm:max-h-40 md:max-h-44 lg:max-h-48 xl:max-h-52">
      <Link href={url} target="_blank">
        <section className="flex flex-col justify-around h-full">
          <NewsTitle title={title} platform={platform} createAt={createAt} />
          <NewsContent content={content} />
        </section>
      </Link>
    </li>
  );
};

export default NewsList;
