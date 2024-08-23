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

  const navClick = () => {
    setModalName(null);
    setData(null);
    mapLocation.setRoadAddress("");
  };

  const navItems = [
    { url: "/", label: "지도", path: "/" },
    { url: "/news?page=1&sort=desc", label: "뉴스", path: "/news" },
    { url: "/reports", label: "제보", path: "/reports" },
  ];

  return (
    <nav>
      <ul className="flex flex-row xxs:mt-4 xs:mt-6 sm:mt-8 xl:mt-0">
        {navItems.map(({ url, label, path }) => (
          <li
            key={url}
            className="font-[Pretendard-SemiBold] text-[#505B6E] mr-8 xl:px-10 xxs:text-base xs:text-lg sm:text-xl md:text-2xl cursor-pointer"
          >
            <Link
              href={url}
              className={pathName === path ? "text-[#4764FF]" : ""}
              onClick={url !== "/" ? navClick : undefined}
              prefetch={true}
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
