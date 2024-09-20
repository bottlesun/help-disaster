import React from "react";
import type { Metadata } from "next";
import "@/_styles/font.css";
import "@/_styles/global.css";

export const metadata: Metadata = {
  title: " Help Disaster - 긴급 재난 메시지 도우미",
  description:
    "긴급 재난 메시지 도우미 서비스 | 각종 재난, 재해, 긴급상황에 대한 발빠른 소식을 전달해드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
