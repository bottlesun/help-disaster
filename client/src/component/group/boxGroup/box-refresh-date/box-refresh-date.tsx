import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import BoxRefreshDateView from "./box-refresh-date.view";

export type BoxTitleDateViewProps = {
  pageNo: number;
  setPageNo: (limit: number) => void;
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
};

const BoxRefreshDate = ({ pageNo, setPageNo, refresh, setRefresh }: BoxTitleDateViewProps) => {
  const [date, setDate] = useState<Dayjs | null | string>(dayjs().format("YYYY/MM/DD A HH:mm:ss"));

  const onClickDateRefresh = () => {
    setDate(dayjs().format("YYYY/MM/DD A HH:mm:ss"));
    setRefresh(true);
    console.log("refresh", refresh);
    if (pageNo === 1) return;
    setPageNo(1);
  };

  const props = {
    onClick: onClickDateRefresh,
    date: date
  };

  return <BoxRefreshDateView {...props} />;
};

export default BoxRefreshDate;
