"use client";
import { useState } from "react";

const HomeDisaster = () => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("/api/disaster"); // Next.js의 프록시 API 호출
  //     const json = await res.json();
  //     setData(json);
  //   }
  //
  //   fetchData();
  // }, []);

  return <div></div>;
};

export default HomeDisaster;
