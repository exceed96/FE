import Map from "@/components/Main/Map";
import WidthObv from "@/components/Util/WidthObv";
import DetailSearch from "@/components/Main/DetailSearch/DetailSearch";

const getApartApiHandler = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASEURL}/main/`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };
  return await (await fetch(url, options)).json();
};

export default async function Home() {
  const locate = await getApartApiHandler();

  return (
    <main className="flex flex-col xl:flex-row xl:mt-16 h-[calc(100%-80px)] border-t-[1px] border-[#CDD0E2] xl:border-none">
      <DetailSearch />
      <Map apartData={locate.result.defectLocs} />
      <WidthObv />
    </main>
  );
}
