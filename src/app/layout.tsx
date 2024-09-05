import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import "./globals.css";
import Script from "next/script";
import ModalContainer from "@/components/Container/ModalContainer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "전국 부실아파트 조회",
  description: "전국 부실아파트를 조회할 수 있는 서비스 입니다.",
  manifest: "/manifest.json",
  icons: {
    icon: "./favicon.ico",
    other: [
      {
        url: "/icons/splashscreens/iphone5_splash.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/iphone6_splash.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/iphoneplus_splash.png",
        media:
          "(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/iphonex_splash.png",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/iphonexr_splash.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/iphonexsmax_splash.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/ipad_splash.png",
        media:
          "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/ipadpro1_splash.png",
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/ipadpro3_splash.png",
        media:
          "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/icons/splashscreens/ipadpro2_splash.png",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
    ],
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
