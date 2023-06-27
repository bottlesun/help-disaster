import { useMsgDataStore } from "@stores/useMsgData.store";
import { UsePaginationStore } from "@stores/usePagination.store";
import { RowData } from "@type/api.type";
import { fetcher, scrollFetcher } from "@utils/fetcher";
import React, { useEffect } from "react";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import BoxContentTitleTextView from "../../molecules/boxGroup/box-content-title-text.view";

export const msgUrl = process.env.REACT_APP_MAIN_API_URL;

const Home = () => {
  const { page, setPage } = UsePaginationStore();
  const { msgData, setMsgData } = useMsgDataStore();

  const getKey = (pageIndex: number, previousPageData: RowData[]) => {
    if (page === 1) return msgUrl + `&pageNo=1&numOfRows=8`;
    if (previousPageData && !previousPageData.length) return null;
    return msgUrl + `&pageNo=${page}&numOfRows=8`;
  };

  const { data } = useSWRInfinite(getKey, scrollFetcher);
  const { data: msg, mutate: msgMutate } = useSWR(msgUrl + `&pageNo=${page}`, fetcher);
  const total = msg !== undefined ? msg.DisasterMsg[0].head[0].totalCount : 0;

  useEffect(() => {
    if (data === undefined) return;
    setMsgData(data[0]);
    // if (msg === undefined) return;

    // setMsgData(msg.DisasterMsg[1].row);
  }, [data]);

  function handleScroll(e: React.UIEvent<HTMLElement>) {
    const thisScrollHeight = Math.ceil(e.currentTarget.scrollTop) + e.currentTarget.clientHeight;
    const scrollMaxHeight = e.currentTarget.scrollHeight;
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
