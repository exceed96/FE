import NewsList from "@/components/News/NewsList";
import DropDown from "@/components/Util/DropDown";
import Paginate from "@/components/Util/Paginate";

const getNewsApiHandler = async (page: string, sort: string) => {
  const url = `${process.env.NEXT_PUBLIC_BASEURL}/news?page=${page}&sort=${sort}`;
  return await (await fetch(url, { cache: "no-store" })).json();
};

export default async function Newspage({ searchParams }: any) {
  const data = await getNewsApiHandler(searchParams.page, searchParams.sort);

  return (
    <section className="w-full h-full relative flex flex-col border-t-[1px] border-[#CDD0E2] xl:border-none px-5 md:px-10">
      <DropDown />
      <ul className="flex flex-col gap-5">
        {data &&
          data.newsList.map((news, index: number) => (
            <NewsList key={index} data={news} />
          ))}
      </ul>
      <Paginate totalCount={Math.ceil(data.totalElements / 5)} />
    </section>
  );
}
