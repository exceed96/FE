"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useModalState } from "@/store/Modal";
import MApartInfo from "../Modal/MApartInfo/MApartInfo";
import { useApartState } from "@/store/Apart";

const ModalContent = (): JSX.Element => {
  const { modalName } = useModalState();
  const { data } = useApartState();

  const modalContent: { [key: string]: JSX.Element | null } = {
    apart: <MApartInfo />,
  };

  return (
    <>
      {modalName && data && (
        <section className="absolute bottom-0 w-full h-1/2 bg-[#F9FBFE] z-100">
          {modalName ? modalContent[modalName] : null}
        </section>
      )}
    </>
  );
};

const ModalContainer = () => {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);

  if (typeof window === "undefined") return <></>;
  if (!isMount) return <></>;

  return createPortal(
    <ModalContent />,
    document.getElementById("modalContent")
  );
};

export default ModalContainer;
