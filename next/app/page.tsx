import React from "react";
import Layout from "@/_components/layout/Layout";
import HomeDisaster from "@/_components/disaster/HomeDisaster";
import { DisasterMessageResponse } from "@/_types/disaster-message.api.type";

export default async function Home() {
  const res = await fetch(`${process.env.BASE_URL}/api/disaster`);
  const data: DisasterMessageResponse = await res.json();

  return (
    <Layout>
      <h1>Next.js</h1>
      <p>Welcome to Next.js</p>
      <HomeDisaster data={data.body} />
    </Layout>
  );
}
