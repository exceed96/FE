"use client";

import { parseContent } from "@/libs/News/NewsParser";

type TNewsContentProps = {
  content: string;
};

export default function NewsContent(props: TNewsContentProps) {
  return (
    <section className="flex md:mt-5 mb-3">
      <p className="text-[#505B6E] text-[12px] sm:text-sm md:text-base lg:text-lg xl:text-xl w-full line-clamp-2 xs:line-clamp-3 xl:line-clamp-1">
        {parseContent(props.content)}
      </p>
    </section>
  );
}
