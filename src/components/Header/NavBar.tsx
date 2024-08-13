import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModalState } from "@/store/Modal";
import { useApartState } from "@/store/Apart";
import { useMapLocation } from "@/store/Map";

const NavBar = () => {
  const pathName = usePathname();
  const { setModalName } = useModalState((state) => ({
    setModalName: state.setModalName,
  }));
  const { setData } = useApartState((state) => ({ setData: state.setData }));
  const { mapLocation } = useMapLocation((state) => ({
    mapLocation: state.mapLocation,
  }));

  const handleClick = () => {
    setModalName(null);
    setData(null);
    mapLocation.setRoadAddress("");
  };

  const navItems = [
    { href: "/", label: "지도" },
    { href: "/news?page=1&sort=desc", label: "뉴스" },
    { href: "/reports", label: "제보" },
  ];

  return (
    <nav>
      <ul className="flex flex-row xxs:mt-4 xs:mt-6 sm:mt-8 xl:mt-0">
        {navItems.map(({ href, label }) => (
          <li
            key={href}
            className="font-[Pretendard-SemiBold] text-[#505B6E] mr-8 xl:px-10 xxs:text-base xs:text-lg sm:text-xl md:text-2xl cursor-pointer"
          >
            <Link
              href={href}
              className={pathName === href ? "text-[#4764FF]" : ""}
              onClick={href !== "/" ? handleClick : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
