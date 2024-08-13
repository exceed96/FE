"use client";

import NavBar from "./NavBar";

const Header = (): JSX.Element => {
  return (
    <header className="flex py-4 px-4 sm:px-5 xl:px-0 items-start xl:items-end flex-col xl:flex-row">
      <section className="font-[Pretendard-Bold] xxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl text-[#303948] md:mr-10">
        전국 부실아파트 조회
      </section>
      <NavBar />
    </header>
  );
};

export default Header;
