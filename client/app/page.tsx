import React from "react";
import LayoutPage from "@/_components/layout/LayoutPage";
import HomeDisaster from "@/_components/disaster/HomeDisaster";

export default async function Home() {
  return (
    <LayoutPage>
      <HomeDisaster />
    </LayoutPage>
  );
}
