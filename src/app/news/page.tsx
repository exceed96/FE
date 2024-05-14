"use client";

import { useState } from "react";
import NewsList from "@/components/News/NewsList";
import DropDown from "@/components/Util/DropDown";
import Image from "next/image";
import DropDownIcon from "@/Img/Util/DropDown.svg";
import DropDownOutIcon from "@/Img/Util/DropDownOut.svg";

const NewsPage = (): JSX.Element => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [dropdownState, setDropdownState] = useState("New");

  return (
    <div className="w-full h-full flex flex-col">
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
              className="hover:bg-black hover:text-white cursor-pointer"
              onClick={() => {
                setDropdownState("New");
              }}
            >
              최신 순
            </li>
            <li
              className="border-t-[1px] border-black hover:bg-black hover:text-white cursor-pointer"
              onClick={() => {
                setDropdownState("Old");
              }}
            >
              오래된 순
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
