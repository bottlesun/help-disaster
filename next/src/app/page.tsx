import React from "react";
import Layout from "@/components/layout/Layout";
import HomeDisaster from "@/components/disaster/HomeDisaster";

export default function Home() {
  return (
    <Layout>
      <h1>Next.js</h1>
      <p>Welcome to Next.js</p>
      <HomeDisaster />
    </Layout>
  );
}
