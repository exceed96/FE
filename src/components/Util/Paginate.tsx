"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useDropDown } from "@/store/DropDown";
import Link from "next/link";

type TPaginate = {
  totalCount: number;
};

export default function Paginate(props: TPaginate) {
  const searchParmas = useSearchParams();
  const selectPage = Number(searchParmas.get("page"));
  const { dropDownState } = useDropDown((state) => ({
    dropDownState: state.dropDownState,
  }));

  const generatePages = (selectPage: number, totalCount: number) => {
    let pagesArray = [];
    let startIdx = 0;
    const maxPages = totalCount < 5 ? totalCount : 5;

    if (selectPage === 1) {
      startIdx = 0;
    } else if (selectPage === 2) {
      startIdx = -1;
    } else {
      startIdx = -2;
    }

    for (let i = startIdx; i < startIdx + maxPages; i++) {
      const page = selectPage + i;
      if (page > 0 && page <= totalCount) {
        pagesArray.push(page);
      }
    }

    return pagesArray;
  };

  const [pages, setPages] = useState(() =>
    generatePages(selectPage, props.totalCount)
  );

  useEffect(() => {
    setPages(generatePages(selectPage, props.totalCount));
  }, [selectPage, props.totalCount]);

  return (
    <div className="w-full flex justify-between sm:justify-center py-10">
      <div>
        <Link
          href={`/news?page=${selectPage < 6 ? "1" : selectPage - 5}&sort=${
            dropDownState === "NEW" ? "desc" : "asc"
          }`}
          className={`mr-1 xxs:mr-2 xs:mr-4 text-[10px] xs:text-sm sm:text-lg ${
            selectPage === 1 ? "pointer-events-none text-[#ccc]" : ""
          }`}
          prefetch={false}
        >
          &lt;&lt;
        </Link>
        <Link
          href={`/news?page=${selectPage - 1}&sort=${
            dropDownState === "NEW" ? "desc" : "asc"
          }`}
          className={`mr-1 xxs:mr-2 xs:mr-4 text-[10px] xs:text-sm sm:text-lg ${
            selectPage === 1 ? "pointer-events-none text-[#ccc]" : ""
          }`}
          prefetch={false}
        >
          &lt;
        </Link>
      </div>
      <ul className="flex items-center justify-around w-full sm:w-fit sm:gap-12">
        {pages.map((page, index) => (
          <li key={index}>
            <Link
              href={`/news?page=${page}&sort=${
                dropDownState === "NEW" ? "desc" : "asc"
              }`}
              className={`text-[8px] xs:text-[10px] sm:text-sm ${
                selectPage === page
                  ? "text-[#303948] font-[Pretendard-Bold]"
                  : "text-[#B1B5BA] font-[Pretendard-Medium]"
              }`}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Link
          className={`ml-2 xs:ml-4 text-[10px] xxs:text-xs xs:text-sm sm:text-lg ${
            selectPage === props.totalCount
              ? "pointer-events-none text-[#ccc]"
              : ""
          }`}
          href={`/news?page=${selectPage + 1}&sort=desc`}
          prefetch={false}
        >
          &gt;
        </Link>
        <Link
          className={`ml-2 xs:ml-4 text-[10px] xxs:text-xs xs:text-sm sm:text-lg ${
            selectPage === props.totalCount
              ? "pointer-events-none text-[#ccc]"
              : ""
          }`}
          href={`/news?page=${
            selectPage > props.totalCount - 5
              ? props.totalCount
              : selectPage + 5
          }&sort=desc`}
          prefetch={false}
        >
          &gt;&gt;
        </Link>
      </div>
    </div>
  );
}
