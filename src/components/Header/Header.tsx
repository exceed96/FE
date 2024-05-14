"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = (): JSX.Element => {
  const pathName = usePathname();

  const navListStyle =
    "font-[Pretendard-SemiBold] text-[#505B6E] px-10 text-2xl cursor-pointer";

  return (
    <header className="flex items-end">
      <section className="font-[Pretendard-Bold] text-4xl text-[#303948] mr-10">
        전국 부실아파트 조회
      </section>
      <nav>
        <ul className="flex">
          <li className={navListStyle}>
            <Link
              href="/"
              className={`${pathName === "/" && "text-[#4764FF]"}`}
            >
              지도
            </Link>
          </li>
          <li className={navListStyle}>
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
