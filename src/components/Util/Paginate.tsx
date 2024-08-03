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
        href={`/news?page=${selectPage - 1}&sort=${
          dropDownState === "NEW" ? "desc" : "asc"
        }`}
        className={`mr-8 ${
          selectPage === 1 ? "pointer-events-none text-[#ccc]" : ""
        }`}
      >
        &lt;
      </Link>
      <ul className="flex gap-8 sm:gap-9 md:gap-10">
        {pages.map((page, index) => (
          <li key={index}>
            <Link
              href={`/news?page=${page}&sort=${
                dropDownState === "NEW" ? "desc" : "asc"
              }`}
              className={`${
                selectPage === page
                  ? "text-[#303948] font-[Pretendard-Bold] text-xs sm:text-sm md:text-base"
                  : "text-[#B1B5BA] font-[Pretendard-Medium] text-xs sm:text-sm md:text-base"
              }`}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className={`ml-8 ${
          selectPage === props.totalCount
            ? "pointer-events-none text-[#ccc]"
            : ""
        }`}
        href={`/news?page=${selectPage + 1}&sort=desc`}
      >
        &gt;
      </Link>
    </section>
  );
}
