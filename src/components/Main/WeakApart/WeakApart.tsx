"use client";

import React from "react";
import { useApartState } from "@/store/Apart";
import { useModalState } from "@/store/Modal";
import WeakApartHeader from "./WeakApartHeader";
import WeakApartInfo from "./WeakApartInfo";
import WeakApartBuildInfo from "./WeakApartBuildInfo";
import WeakApartSupInfo from "./WeakApartSupInfo";

function WeakApart() {
  const { data } = useApartState();
  const { modalName } = useModalState();

  return (
    <>
      {data && !modalName && (
        <section className="bg-[#F9FBFE] xl:mt-3 xl:h-9/10 flex flex-col justify-between">
          <WeakApartHeader
            title={data.info.title}
            subTitle={data.info.subTitle}
            address={data.info.address}
          />
          <WeakApartInfo
            desgnr={data.aptInfo.desgnr}
            cnstEntrprs={data.aptInfo.cnstEntrprs}
            sprvsr={data.aptInfo.sprvsr}
          />
          <WeakApartBuildInfo
            buildStru={data.buildInfo.buildStru}
            defctRsn={data.buildInfo.defctRsn}
          />
          <WeakApartSupInfo
            reinfStatus={data.splmnInfo.reinfStatus}
            reinfContent={data.splmnInfo.reinfContent}
          />
        </section>
      )}
    </>
  );
}

export default React.memo(WeakApart);
