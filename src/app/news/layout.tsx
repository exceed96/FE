import type { Metadata } from "next";
import { ReactNode } from "react";

export function generateMetadata(): Metadata {
  return {
    title: "뉴스 - 전국 부실아파트 조회",
    description: "부동산에 관련된 뉴스를 제공하는 서비스 입니다.",
    icons: {
      icon: "./favicon",
    },
  };
}

export default function layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
