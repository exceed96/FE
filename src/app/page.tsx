import Map from "@/components/Main/Map";
import SearchMapInput from "@/components/Main/SearchMapInput";
import WidthObv from "@/components/Util/WidthObv";
import Detail from "@/components/Main/Detail";

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
  // const searchAreaInputRef = useRef(null);
  // const [searchXArea, setSearchXArea] = useState<string>("");
  // const [searchYArea, setSearchYArea] = useState<string>("");
  // const [roadAddress, setRoadAddress] = useState<string>("");

  // const searchAreaApiHandler = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (searchAreaInputRef.current.value) {
  //     naver.maps.Service.geocode(
  //       {
  //         query: searchAreaInputRef.current.value,
  //       },
  //       function (status, response) {
  //         if (status !== naver.maps.Service.Status.OK) {
  //           return alert("Something wrong!");
  //         }
  //         const result = response.v2; // 검색 결과의 컨테이너
  //         if (searchAreaInputRef.current.value)
  //           searchAreaInputRef.current.value = "";
  //         if (!result.addresses.length) {
  //           return;
  //         } else {
  //           setSearchYArea(result.addresses[0].y);
  //           setSearchXArea(result.addresses[0].x);
  //           setRoadAddress(result.addresses[0].roadAddress);
  //         }
  //       }
  //     );
  //   }
  // };

  return (
    <main className="flex flex-col xl:flex-row xl:mt-16 h-[calc(100%-80px)] border-t-[1px] border-[#CDD0E2] xl:border-none">
      <section className="w-full flex flex-col justify-start xl:w-1/4 xl:mr-8">
        <SearchMapInput
        // searchAreaInputRef={searchAreaInputRef}
        // searchAreaApiHandler={searchAreaApiHandler}
        />
        <Detail />
      </section>
      <Map
        // y={searchXArea}
        // x={searchYArea}
        // roadAddress={roadAddress}
        apartData={locate.result.defectLocs}
      />
      <WidthObv />
    </main>
  );
}
