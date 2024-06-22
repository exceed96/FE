// import { useState, useEffect } from "react";
import NewsList from "@/components/News/NewsList";
import DropDown from "@/components/Util/DropDown";
import Image from "next/image";
import DropDownIcon from "@/Img/Util/DropDown.svg";
import DropDownOutIcon from "@/Img/Util/DropDownOut.svg";
import DropdownCheck from "@/Img/News/DropdownCheck.svg";
import Paginate from "@/components/Util/Paginate";

const getNewsApiHandler = async (page: string, sort: string) => {
  const url = `${process.env.NEXT_PUBLIC_BASEURL}/news?page=${page}&sort=${sort}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };
  return await (await fetch(url, options)).json();
};

export default async function Newspage({ searchParams }: any) {
  const data = await getNewsApiHandler(searchParams.page, searchParams.sort);

  return (
    <>
      <ul className="flex flex-col gap-5">
        {data &&
          data.newsList.map((news, index: number) => (
            <NewsList key={index} data={news} />
          ))}
      </ul>
      <Paginate totalCount={11} />
    </>
  );
}

// const NewsPage = async (): JSX.Element => {
// const [dropdownVisibility, setDropdownVisibility] = useState(false);
// const [dropdownState, setDropdownState] = useState("New");
// const [newsPage, setNewsPage] = useState(0);
// const instance = useAxios();

// const dropdownListStyle = "relative flex items-center ml-5 cursor-pointer";

// const getNewsApiHandler = async (currentPage: number) => {
//   const sortOrder = dropdownState === "New" ? "desc" : "asc";
//   const response = await instance(
//     `/news?page=${currentPage + 1}&sort=${sortOrder}`
//   );
//   return response.data;
// };

// const queryClient = useQueryClient();

// const { data, isLoading } = useQuery({
//   queryKey: ["news", newsPage, dropdownState],
//   queryFn: () => getNewsApiHandler(newsPage),
//   placeholderData: (previousData) => previousData,
//   staleTime: 10 * 1000,
// });

// useEffect(() => {
//   if (data && newsPage < Math.ceil(data.totalElements / 5) - 1) {
//     const nextPage = newsPage + 1;
//     queryClient.prefetchQuery({
//       queryKey: ["news", nextPage, dropdownState],
//       queryFn: () => getNewsApiHandler(nextPage),
//     });
//   }
// }, [newsPage, data, dropdownState, queryClient]);

// if (isLoading) {
//   return <div>Loading....</div>;
// }

// const handlePage = ({ selected: selectedPage }) => {
//   setNewsPage(selectedPage);
// };

// return (
//   <div className="w-full h-full flex flex-col border-t-[1px] border-[#CDD0E2] md:border-none px-5 md:px-10">
//     <section className="self-end relative my-3">
{
  /* <button
          className="self-end text-[#505B6E] flex items-center"
          onClick={() => {
            setDropdownVisibility(!dropdownVisibility);
          }}
        >
          <span className="mr-2">
            {dropdownState === "New" ? "최신순" : "오래된순"}
          </span>
          <Image
            src={dropdownVisibility ? DropDownOutIcon : DropDownIcon}
            alt={"news dropdown"}
          />
        </button> */
}
{
  /* <DropDown
          visibility={dropdownVisibility}
          setDropdownVisibility={setDropdownVisibility}
        >
          <ul
            className={`text-[#505B6E] py-3 flex flex-col w-full min-w-24 ${
              dropdownVisibility
                ? "animate-[dropdownSlideIn_0.4s_ease]"
                : "animate-[dropdownSlideOut_0.4s_ease_forwards] border-[1px] border-[#E6E6E6]"
            }`}
          >
            <li
              className={dropdownListStyle}
              onClick={() => {
                setDropdownState("New");
                setNewsPage(0);
              }}
            >
              {dropdownState === "New" && (
                <Image
                  src={DropdownCheck}
                  alt={"new"}
                  className="absolute left-[-8px]"
                />
              )}
              <span
                className={`ml-2 ${
                  dropdownState === "New"
                    ? "font-[Pretendard-SemiBold]"
                    : "font-[Pretendard-Medium]"
                }`}
              >
                최신 순
              </span>
            </li>
            <li
              className={dropdownListStyle}
              onClick={() => {
                setDropdownState("Old");
                setNewsPage(0);
              }}
            >
              {dropdownState === "Old" && (
                <Image
                  src={DropdownCheck}
                  alt={"old"}
                  className="absolute left-[-8px]"
                />
              )}
              <span
                className={`ml-2 ${
                  dropdownState === "Old"
                    ? "font-[Pretendard-SemiBold]"
                    : "font-[Pretendard-Medium]"
                }`}
              >
                오래된 순
              </span>
            </li>
          </ul>
        </DropDown> */
}
// </section>
// <ul className="flex flex-col gap-5">
{
  /* {data &&
          data.newsList.map((news, index: number) => (
            <NewsList key={index} data={news} />
          ))} */
}
// </ul>
{
  /* <NewsPaginate
        pageCount={Math.ceil(data.totalElements / 5)} // 총 페이지 수 계산
        currentPage={newsPage}
        onPageChange={handlePage}
      /> */
}
// </div>
// );
// };

// export default NewsPage;
