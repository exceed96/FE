import Link from "next/link";

const ReportsPage = (): JSX.Element => {
  return (
    <main className="bg-[#F9FBFE] w-full h-full flex flex-col items-center justify-center">
      <h1 className="font-[Pretendard-Bold] text-[#425EF0] text-4xl mb-7">
        Contact
      </h1>
      <h2 className="font-[Pretendard-Medium] text-xl mb-7">
        부실아파트 관련 제보사항이 있으신 분들은 아래 이메일로 연락
        부탁드립니다.
      </h2>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSfw56ichPs8qBBmYj_W_5z7rgzMeZ08qvevLO5ZEXlS5nIoqA/viewform?usp=sf_link"
        className="bg-[#425EF0] text-white font-[Pretendard-Medium] text-2xl py-3 px-9"
      >
        apartment0513@gamil.com
      </Link>
    </main>
  );
};

export default ReportsPage;
