import { useMsgDataStore } from "@stores/useMsgData.store";
import { fetcher } from "@utils/fetcher";
import React, {useEffect, useState} from "react";
import useSWR from "swr";
import PaginationView from "../../atoms/pagination/pagination.view";
import BoxContentTitleTextView from "../../molecules/boxGroup/box-content-title-text.view";
import Pagination from "../../atoms/pagination/pagination";

export const msgUrl = process.env.REACT_APP_MAIN_API_URL;
const Home = () => {
  const [pageNo,setPageNo] = useState(1);
  const limit = 5;
  const { msgData, setMsgData } = useMsgDataStore();
  const { data: msg } = useSWR(msgUrl + `&pageNo=${pageNo}&numOfRows=${limit}`, fetcher);
  const total = msg !== undefined ? msg.DisasterMsg[0].head[0].totalCount : 0;


  useEffect(() => {
    if (msg === undefined) return;
    setMsgData(msg.DisasterMsg[1].row);

    // setDate([rowDummyData]);
  }, [msg]);

  const props = {
    data: msgData,
    pagination:{
      total: total ,
      pageNo: pageNo,
      setPageNo: setPageNo,
      limit: limit,
  }
  };
  return (
    <>
      <BoxContentTitleTextView data={props.data} />
      <Pagination {...props.pagination} />
    </>
  );
};

export default Home;
