import Map from "@/components/Main/Map";
import WidthObv from "@/components/Util/WidthObv";
import DetailSearch from "@/components/Main/DetailSearch/DetailSearch";
import { getApartAction } from "@/components/libs/serverAction/getApartAction";

export default async function Home() {
  const { data, status } = await getApartAction();

  return (
    <main className="flex flex-col xl:flex-row xl:mt-16 h-[calc(100%-80px)] border-t-[1px] border-[#CDD0E2] xl:border-none">
      <DetailSearch />
      <Map apartData={data.result.defectLocs} />
      <WidthObv />
    </main>
  );
}
