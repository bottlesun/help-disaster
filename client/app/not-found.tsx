import Link from "next/link";
import React from "react";
import NotfoundLayout from "@/_components/layout/NotfoundLayout";
import { NotFoundWrap } from "@/_components/layout/layout.style";

export const generateMetadata = () => {
  return {
    title: "404 - 페이지를 찾을 수 없습니다",
    description: "이 페이지는 존재하지 않습니다.",
  };
};

export default function NotFound() {
  return (
    <NotfoundLayout>
      <div className={NotFoundWrap}>
        <div className={"notfound-container"}>
          <h1>404 NOT FOUND</h1>
          <p>찾으시는 페이지가 존재하지 않습니다.</p>
        </div>

        <Link href={"/"}>홈으로</Link>
      </div>
    </NotfoundLayout>
  );
}
