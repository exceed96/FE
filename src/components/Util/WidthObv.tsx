"use client";

import { useEffect } from "react";
import { throttle } from "lodash";
import { useModalState } from "@/store/Modal";
import { useWidth } from "@/store/Width";

export default function WidthObv() {
  const { modalName, setModalName } = useModalState();
  const { setWidth } = useWidth();

  const handleResize = throttle(() => {
    if (window.innerWidth < 1280 && !modalName) setModalName("apart");
    else setModalName(null);
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <></>;
}
