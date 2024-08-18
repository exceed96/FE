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
    <section className="w-full flex justify-center items-center py-10">
      <Link
        href={`/news?page=${selectPage < 6 ? "1" : selectPage - 5}&sort=${
          dropDownState === "NEW" ? "desc" : "asc"
        }`}
        className={`mr-1 xxs:mr-2 xs:mr-4 xxs:text-[10px] xs:text-sm text-base ${
          selectPage === 1 ? "pointer-events-none text-[#ccc]" : ""
        }`}
      >
        &lt;&lt;
      </Link>
      <Link
        href={`/news?page=${selectPage - 1}&sort=${
          dropDownState === "NEW" ? "desc" : "asc"
        }`}
        className={`mr-1 xxs:mr-2 xs:mr-4 xxs:text-[10px] xs:text-sm text-base ${
          selectPage === 1 ? "pointer-events-none text-[#ccc]" : ""
        }`}
      >
        &lt;
      </Link>
      <ul className="flex gap-4 xxs:gap-6 xs:gap-8 md:gap-10">
        {pages.map((page, index) => (
          <li key={index}>
            <Link
              href={`/news?page=${page}&sort=${
                dropDownState === "NEW" ? "desc" : "asc"
              }`}
              className={`${
                selectPage === page
                  ? "text-[#303948] font-[Pretendard-Bold] text-[10px] sm:text-sm md:text-base"
                  : "text-[#B1B5BA] font-[Pretendard-Medium] text-[10px] sm:text-sm md:text-base"
              }`}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className={`ml-1 xxs:ml-2 xs:ml-4 text-[10px] xxs:text-sm xs:text-base ${
          selectPage === props.totalCount
            ? "pointer-events-none text-[#ccc]"
            : ""
        }`}
        href={`/news?page=${selectPage + 1}&sort=desc`}
      >
        &gt;
      </Link>
      <Link
        className={`ml-1 xxs:ml-2 xs:ml-4 text-[10px] xxs:text-sm xs:text-base ${
          selectPage === props.totalCount
            ? "pointer-events-none text-[#ccc]"
            : ""
        }`}
        href={`/news?page=${
          selectPage > props.totalCount - 5 ? props.totalCount : selectPage + 5
        }&sort=desc`}
      >
        &gt;&gt;
      </Link>
    </section>
  );
}
