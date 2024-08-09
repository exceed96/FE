import Link from "next/link";

const REPORT_URL = process.env.NEXT_PUBLIC_REPORTURL;

const ReportsPage = (): JSX.Element => {
  return (
    <main className="xl:bg-[#F9FBFE] w-full h-full flex flex-col items-center justify-center border-t-[1px] border-[#CDD0E2] xl:border-none">
      <section className="flex flex-col items-center mb-24">
        <h1 className="font-[Pretendard-Bold] text-[#425EF0] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xxs:mb-4 xs:mb-5 sm:mb-6 md:mb-7">
          Contact
        </h1>
        <section className="font-[Pretendard-Medium] text-[#303948] sm:text-md md:text-xl mb-5 sm:mb-6 md:mb-7 flex flex-col md:flex-row items-center">
          <span>부실아파트 관련 제보사항이 있으신 분들은</span>
          <span>아래 이메일로 연락 부탁드립니다.</span>
        </section>
        <Link
          href={REPORT_URL}
          className="bg-[#425EF0] text-white font-[Pretendard-Medium] text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl py-3 px-9"
          target="_blank"
        >
          apartment0513@gmail.com
        </Link>
      </section>
    </main>
  );
};

export default ReportsPage;
