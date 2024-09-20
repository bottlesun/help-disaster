"use client";
import React from "react";
import SpinnerView from "@/_components/common/spinner/spinner.view";
import { DisasterMessageData } from "@/_types/disaster-message.api.type";

interface HomeDisasterProps {
  data: DisasterMessageData[];
}

const HomeDisaster = ({ data }: HomeDisasterProps) => {
  // const res = await fetch("/api/disaster");

  console.log(data);
  return (
    <div>
      <SpinnerView />
      {data.map((item) => {
        return <p key={item.SN}>{item.CRT_DT}</p>;
      })}
    </div>
  );
};

export default HomeDisaster;
