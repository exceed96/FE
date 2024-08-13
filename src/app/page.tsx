import Map from "@/components/Main/Map";
import WidthObv from "@/components/Util/WidthObv";
import MapSearch from "@/components/Main/MapSearch/MapSearch";
import { getApartAction } from "@/libs/ServerAction/getApartAction";

export default async function Home() {
  const { data } = await getApartAction();

  return (
    <main className="flex flex-col xl:flex-row xl:mt-16 h-[calc(100%-80px)] border-t-[1px] border-[#CDD0E2] xl:border-none">
      <MapSearch />
      <Map apartData={data.result.defectLocs} />
      <WidthObv />
    </main>
  );
}
