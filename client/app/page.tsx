import React from "react";
import Layout from "@/_components/layout/Layout";
import { DisasterMessageData } from "@/_types/disaster-message.api.type";
import { commonResponseType } from "@/_types/response.type";
import HomeDisaster from "@/_components/disaster/HomeDisaster";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/disaster`);
  const resData: commonResponseType<DisasterMessageData[]> = await res.json();

  const props = {
    initialData: resData.data,
  };

  return (
    <Layout>
      <HomeDisaster {...props} />
    </Layout>
  );
}
