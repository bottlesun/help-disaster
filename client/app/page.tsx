import React from "react";
import Layout from "@/_components/layout/Layout";
import HomeDisaster from "@/_components/disaster/HomeDisaster";

export default async function Home() {
  return (
    <Layout>
      <HomeDisaster />
    </Layout>
  );
}
