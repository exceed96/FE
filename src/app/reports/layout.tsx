import type { Metadata } from "next";
import { ReactNode } from "react";

export function generateMetadata(): Metadata {
  return {
    title: "제보 - 전국 부실아파트 조회",
    description: "부실아파트관련 소식을 제보할 수 있는 홈페이지 입니다.",
  };
}

export default function layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
