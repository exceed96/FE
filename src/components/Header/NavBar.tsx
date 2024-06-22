import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModalState } from "@/store/Modal";

const NavBar = () => {
  const navListStyle =
    "font-[Pretendard-SemiBold] text-[#505B6E] mr-8 xl:px-10 xxs:text-base xs:text-lg sm:text-xl md:text-2xl cursor-pointer";
  const pathName = usePathname();
  const { setModalName } = useModalState();

  return (
    <nav>
      <ul className="flex flex-row xxs:mt-4 xs:mt-6 sm:mt-8 xl:mt-0">
        <li className={navListStyle}>
          <Link href="/" className={`${pathName === "/" && "text-[#4764FF]"}`}>
            지도
          </Link>
        </li>
        <li className={navListStyle} onClick={() => setModalName(null)}>
          <Link
            href="/news?page=1&sort=desc"
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
  );
};

export default NavBar;
