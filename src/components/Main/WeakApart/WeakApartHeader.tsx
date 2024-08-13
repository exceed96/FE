type TWeakApartHeaderProps = {
  title: string;
  subTitle: string;
  address: string;
};

export default function WeakApartHeader(props: TWeakApartHeaderProps) {
  return (
    <header className="flex flex-col text-white px-6 py-8 bg-[#425EF0]">
      <strong className="mb-2 text-2xl font-[Pretendard-Bold]">
        {props.title}
      </strong>
      <span className="text-base font-[Pretendard-Medium]">
        {props.subTitle}
      </span>
      <span className="text-base font-[Pretendard-Medium]">
        {props.address}
      </span>
    </header>
  );
}
