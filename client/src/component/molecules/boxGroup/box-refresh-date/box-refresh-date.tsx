import { UsePaginationStore } from "@stores/usePagination.store";
import { useRefreshStore } from "@stores/useRefresh.store";
import { fetcher } from "@utils/fetcher";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import useSWR from "swr";
import { msgUrl } from "../../../organisms/home";
import BoxRefreshDateView from "./box-refresh-date.view";

const BoxRefreshDate = () => {
  const { limit, setLimit } = UsePaginationStore();
  const { refresh, setRefresh } = useRefreshStore();
  const [date, setDate] = useState<Dayjs | null | string>(dayjs().format("YYYY/MM/DD A HH:mm:ss"));
  const { data: msg } = useSWR(msgUrl + "&pageNo=1&numOfRows=8", fetcher);
  const onClickDateRefresh = () => {
    setDate(dayjs().format("YYYY/MM/DD A HH:mm:ss"));

    if (msg === undefined) return;
    if (limit === 8) return;
    setLimit(8);
    if (!refresh) setRefresh(true);
    // if (arraysHaveSameContent(msg.DisasterMsg[1].row, msgData)) return;
    // setMsgData(msg.DisasterMsg[1].row);
  };

  const props = {
    onClick: onClickDateRefresh,
    date: date
  };

  return <BoxRefreshDateView {...props} />;
};

export default BoxRefreshDate;
