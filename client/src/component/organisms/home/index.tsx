import { useMsgDataStore } from "@stores/useMsgData.store";
import { fetcher } from "@utils/fetcher";
import React, { useEffect } from "react";
import useSWR from "swr";
import PaginationView from "../../atoms/pagination/pagination.view";
import BoxContentTitleTextView from "../../molecules/boxGroup/box-content-title-text.view";

export const msgUrl = process.env.REACT_APP_MAIN_API_URL;
const Home = () => {
  const pageNo = 1;
  const limit = 5;
  const { msgData, setMsgData } = useMsgDataStore();
  const { data: msg } = useSWR(msgUrl + `&pageNo=${pageNo}&numOfRows=${limit}`, fetcher);

  useEffect(() => {
    if (msg === undefined) return;
    setMsgData(msg.DisasterMsg[1].row);

    // setDate([rowDummyData]);
  }, [msg]);

  const porps = {
    data: msgData
  };
  return (
    <>
      <BoxContentTitleTextView {...porps} />
      <PaginationView />
    </>
  );
};

export default Home;
