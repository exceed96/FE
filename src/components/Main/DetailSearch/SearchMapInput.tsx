"use client";

import { RefObject, useState } from "react";
import Image from "next/image";
import SearchIcon from "@/Img/Main/Search.svg";

interface SearchMapInputProps {
  searchAreaInputRef: RefObject<HTMLInputElement>;
  searchAreaApiHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchMapInput = (props: SearchMapInputProps): JSX.Element => {
  const [searhArea, setSearchArea] = useState<string>("");

  return (
    <form
      className="relative flex items-center xl:h-1/10"
      onSubmit={props.searchAreaApiHandler}
    >
      <input
        type="text"
        className="border-[#CDD0E2] border-y-[1px] sm:border-[1px] sm:border-[#6C82F7] border-solid text-[#4764FF] py-2.5 px-4 w-full outline-none"
        onChange={(e) => {
          setSearchArea(e.target.value);
        }}
        ref={props.searchAreaInputRef}
        placeholder="궁금한 지역, 아파트를 검색해보세요."
      />
      <Image
        src={SearchIcon}
        alt={"location search"}
        className="absolute right-4"
      />
    </form>
  );
};

export default SearchMapInput;
