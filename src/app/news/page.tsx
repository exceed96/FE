"use client";

import { useState } from "react";
import NewsList from "@/components/News/NewsList";
import DropDown from "@/components/Util/DropDown";
import Image from "next/image";
import DropDownIcon from "@/Img/Util/DropDown.svg";
import DropDownOutIcon from "@/Img/Util/DropDownOut.svg";
import DropdownCheck from "@/Img/News/DropdownCheck.svg";

const NewsPage = (): JSX.Element => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [dropdownState, setDropdownState] = useState("New");

  const dropdownListStyle =
    "flex hover:bg-black hover:text-white cursor-pointer";

  return (
    <div className="w-full h-full flex flex-col border-t-[1px] border-[#CDD0E2] md:border-none px-5 md:px-0">
      <section className="self-end relative my-5">
        <button
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
        </button>
        <DropDown
          visibility={dropdownVisibility}
          setDropdownVisibility={setDropdownVisibility}
        >
          <ul
            className={`text-[#505B6E] ${
              dropdownVisibility
                ? "animate-[dropdownSlideIn_0.4s_ease]"
                : "animate-[dropdownSlideOut_0.4s_ease_forwards]"
            }`}
          >
            <li
              className={dropdownListStyle}
              onClick={() => {
                setDropdownState("New");
              }}
            >
              <Image src={DropdownCheck} alt={"new"} />
              <strong className="ml-2">최신 순</strong>
            </li>
            <li
              className={dropdownListStyle}
              onClick={() => {
                setDropdownState("Old");
              }}
            >
              <Image src={DropdownCheck} alt={"old"} />
              <strong className="ml-2">오래된 순</strong>
            </li>
          </ul>
        </DropDown>
      </section>
      <ul>
        <NewsList />
        <NewsList />
        <NewsList />
        <NewsList />
      </ul>
    </div>
  );
};

export default NewsPage;
