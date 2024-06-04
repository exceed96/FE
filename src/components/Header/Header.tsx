"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModalState } from "@/store/Modal";

const Header = (): JSX.Element => {
  const pathName = usePathname();
  const { setModalName } = useModalState();

  const navListStyle =
    "font-[Pretendard-SemiBold] text-[#505B6E] mr-8 xl:px-10 xxs:text-base xs:text-lg sm:text-xl md:text-2xl cursor-pointer";

  return (
    <header className="flex py-4 px-4 sm:px-5 xl:px-0 items-start xl:items-end flex-col xl:flex-row">
      <section className="font-[Pretendard-Bold] xxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl text-[#303948] md:mr-10">
        전국 부실아파트 조회
      </section>
      <nav>
        <ul className="flex flex-row xxs:mt-4 xs:mt-6 sm:mt-8 xl:mt-0">
          <li className={navListStyle}>
            <Link
              href="/"
              className={`${pathName === "/" && "text-[#4764FF]"}`}
            >
              지도
            </Link>
          </li>
          <li className={navListStyle} onClick={() => setModalName(null)}>
            <Link
              href="/news"
              className={`${pathName === "/news" && "text-[#4764FF]"}`}
            >
              뉴스
            </Link>
          </li>
          <li className={navListStyle}>
            <Link
              href="/reports"
              className={`${pathName === "/reports" && "text-[#4764FF]"}`}
            >
              제보
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
