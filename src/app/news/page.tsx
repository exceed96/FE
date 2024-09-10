import NewsList from "@/components/News/NewsList";
import DropDown from "@/components/Util/DropDown";
import Paginate from "@/components/Util/Paginate";
import { notFound } from "next/navigation";
import { getNewsAction } from "@/libs/ServerAction/getNewsAction";

export default async function Newspage({ searchParams, params }: any) {
  const { data } = await getNewsAction(searchParams.page, searchParams.sort);

  if (params.slug || !data) notFound();
  return (
    <section className="w-full h-full relative flex flex-col border-t-[1px] border-[#CDD0E2] xl:border-none px-5 md:px-10">
      <DropDown />
      <ul className="flex flex-col gap-3">
        {data &&
          data.newsList.map((news, index: number) => (
            <NewsList key={index} data={news} />
          ))}
      </ul>
      {data && <Paginate totalCount={Math.ceil(data.totalElements / 5)} />}
    </section>
  );
}
