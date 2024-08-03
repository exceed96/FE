"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DropDownIcon from "@/Img/Util/DropDown.svg";
import DropDownOutIcon from "@/Img/Util/DropDownOut.svg";
import DropdownCheck from "@/Img/News/DropdownCheck.svg";
// interface DropDownProps {
//   visibility: boolean;
//   setDropdownVisibility: React.Dispatch<React.SetStateAction<boolean>>;
//   children: ReactNode;
// }

const DropDown = (): JSX.Element => {
  const [visibilityAnimation, setVisibilityAnimation] =
    useState<boolean>(false);
  const [visibility, setVisibility] = useState(false);
  const [dropdownState, setDropdownState] = useState("New");

  const dropdownListStyle = "relative flex items-center ml-5 cursor-pointer";

  useEffect(() => {
    if (visibility) {
      setVisibilityAnimation(true);
    } else {
      setTimeout(() => {
        setVisibilityAnimation(false);
      }, 400);
    }
  }, [visibility]);

  return (
    <>
      <button
        className="self-end text-[#505B6E] flex items-center mt-4 mb-2"
        onClick={() => {
          setVisibility(!visibility);
        }}
      >
        <span className="mr-2">
          {dropdownState === "New" ? "최신순" : "오래된순"}
        </span>
        <Image
          src={visibility ? DropDownOutIcon : DropDownIcon}
          alt={"news dropdown"}
        />
      </button>
      <article
        className={`absolute ${
          visibility && "border-[1px] border-[#E6E6E6] min-w-24"
        } flex self-end overflow-hidden top-12 z-100 bg-white`}
        onClick={(e) => setVisibility(!visibility)}
      >
        {visibilityAnimation && (
          <ul
            className={`text-[#505B6E] py-3 flex flex-col w-full min-w-24 ${
              visibility
                ? "animate-[dropdownSlideIn_0.4s_ease]"
                : "animate-[dropdownSlideOut_0.4s_ease_forwards] border-[1px] border-[#E6E6E6]"
            }`}
          >
            <li
              className={dropdownListStyle}
              onClick={() => {
                setDropdownState("New");
              }}
            >
              {dropdownState === "New" && (
                <Image
                  src={DropdownCheck}
                  alt={"new"}
                  className="absolute left-[-8px]"
                />
              )}
              <Link
                href={`https://weakapart.vercel.app/news?page=1&sort=desc`}
                className={`ml-2 ${
                  dropdownState === "New"
                    ? "font-[Pretendard-SemiBold]"
                    : "font-[Pretendard-Medium]"
                }`}
              >
                최신 순
              </Link>
            </li>
            <li
              className={dropdownListStyle}
              onClick={() => {
                setDropdownState("Old");
              }}
            >
              {dropdownState === "Old" && (
                <Image
                  src={DropdownCheck}
                  alt={"old"}
                  className="absolute left-[-8px]"
                />
              )}
              <Link
                href={`https://weakapart.vercel.app/news?page=1&sort=asc`}
                className={`ml-2 ${
                  dropdownState === "Old"
                    ? "font-[Pretendard-SemiBold]"
                    : "font-[Pretendard-Medium]"
                }`}
              >
                오래된 순
              </Link>
            </li>
          </ul>
        )}
      </article>
    </>
  );
};

export default DropDown;
