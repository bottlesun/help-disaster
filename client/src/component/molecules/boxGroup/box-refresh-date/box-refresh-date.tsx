import { useMsgDataStore } from "@stores/useMsgData.store";
import { fetcher } from "@utils/fetcher";
import { arraysHaveSameContent } from "@utils/helpers";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import useSWR from "swr";
import { msgUrl } from "../../../organisms/home";
import BoxRefreshDateView from "./box-refresh-date.view";

const BoxRefreshDate = () => {
  const { msgData, setMsgData } = useMsgDataStore();
  // const { setPage } = UsePaginationStore();
  const [date, setDate] = useState<Dayjs | null | string>(dayjs().format("YYYY/MM/DD A HH:mm:ss"));
  const { data: msg } = useSWR(msgUrl + "&pageNo=1&numOfRows=5", fetcher);
  const onClickDateRefresh = () => {
    setDate(dayjs().format("YYYY/MM/DD A HH:mm:ss"));
    if (msg === undefined) return;
    if (arraysHaveSameContent(msg.DisasterMsg[1].row, msgData)) return;
    setMsgData(msg.DisasterMsg[1].row);
    // setPage(1);
  };

  const props = {
    onClick: onClickDateRefresh,
    date: date
  };

  return <BoxRefreshDateView {...props} />;
};

export default BoxRefreshDate;
