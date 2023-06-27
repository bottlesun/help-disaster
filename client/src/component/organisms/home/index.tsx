import { useMsgDataStore } from "@stores/useMsgData.store";
import { UsePaginationStore } from "@stores/usePagination.store";
import { RowData } from "@type/api.type";
import { fetcher, scrollFetcher } from "@utils/fetcher";
import React, { useEffect } from "react";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import BoxContentTitleTextView from "../../molecules/boxGroup/box-content-title-text.view";

export const msgUrl = process.env.REACT_APP_MAIN_API_URL;

const getKey = (pageIndex: number, previousPageData: RowData[]) => {
  if (pageIndex === 0) return msgUrl + `&pageNo=1&numOfRows=5`;
  if (previousPageData && !previousPageData.length) return null;
  return msgUrl + `&pageNo=${pageIndex}&numOfRows=8`;
};

const Home = () => {
  const { page, setPage } = UsePaginationStore();
  const { msgData, setMsgData } = useMsgDataStore();

  // const posts: RowData[] = msgData ? ([] as RowData[]).concat(...msgData) : [];

  const { data } = useSWRInfinite(getKey, scrollFetcher);

  const { data: msg, mutate: msgMutate } = useSWR(msgUrl + `&pageNo=${page}`, fetcher);

  console.log(data);

  const total = msg !== undefined ? msg.DisasterMsg[0].head[0].totalCount : 0;
  useEffect(() => {
    if (msg === undefined) return;
    setMsgData(msg.DisasterMsg[1].row);
  }, [msg]);

  function handleScroll(e: React.UIEvent<HTMLElement>) {
    const thisScrollHeight = Math.ceil(e.currentTarget.scrollTop) + e.currentTarget.clientHeight;
    const scrollMaxHeight = e.currentTarget.scrollHeight;

    console.log(scrollMaxHeight, thisScrollHeight);

    if (thisScrollHeight === scrollMaxHeight) {
      setPage(page + 1);
    }
  }

  const props = {
    data: msgData,
    handleScroll: handleScroll,
    pagination: {
      total: total,
      page: page,
      setPage: setPage,
      limit: 5
    }
  };
  return (
    <>
      <BoxContentTitleTextView data={props.data} handleScroll={props.handleScroll} />
      {/*<Pagination {...props.pagination} />*/}
    </>
  );
};

export default Home;
