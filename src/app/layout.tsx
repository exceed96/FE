import type { Metadata, Viewport } from "next";
import Header from "@/components/Header/Header";
import "./globals.css";
import Script from "next/script";
import ModalContainer from "@/components/Container/ModalContainer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { other } from "@/libs/MetaData/SplashImg";
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "전국 부실아파트 조회",
  description: "전국 부실아파트를 조회할 수 있는 서비스 입니다.",
  manifest: "/manifest.json",
  icons: {
    icon: "./favicon.ico",
    other,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="xl:px-10 xl:py-5 flex flex-col h-svh">
        <Script
          strategy="beforeInteractive"
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
        />
        <Script
          strategy="beforeInteractive"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}&submodules=geocoder`}
        />
        <Header />
        {children}
        <div id="modalContent" />
        <ModalContainer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
