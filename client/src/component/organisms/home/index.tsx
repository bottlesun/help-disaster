import { useMsgDataStore } from "@stores/useMsgData.store";
import { UsePaginationStore } from "@stores/usePagination.store";
import { useRefreshStore } from "@stores/useRefresh.store";
import { RowData } from "@type/api.type";
import { scrollFetcher } from "@utils/fetcher";
import React, { useEffect } from "react";
import useSWRInfinite from "swr/infinite";
import BoxContentTitleTextView from "../../molecules/boxGroup/box-content-title-text.view";

export const msgUrl = process.env.REACT_APP_MAIN_API_URL;

const Home = () => {
  const { limit, setLimit } = UsePaginationStore();
  const { msgData, setMsgData } = useMsgDataStore();
  const { refresh, setRefresh } = useRefreshStore();
  const getKey = (pageIndex: number, previousPageData: RowData[]) => {
    // if (page === 1) return msgUrl + `&pageNo=1&numOfRows=8`;
    if (previousPageData && !previousPageData.length) return null;
    return msgUrl + `&pageNo=1&numOfRows=${limit}`;
  };
  const { data, mutate, error } = useSWRInfinite(getKey, scrollFetcher);
  const isLoadingInitialData = !data && !error;

  useEffect(() => {
    if (data === undefined) return;
    setMsgData(data[0]);
    mutate();
  }, [data, limit, refresh]);

  function handleScroll(e: React.UIEvent<HTMLElement>) {
    const thisScrollHeight = Math.ceil(e.currentTarget.scrollTop) + e.currentTarget.clientHeight;
    const scrollMaxHeight = e.currentTarget.scrollHeight;

    if (thisScrollHeight === scrollMaxHeight) {
      console.log("scroll bottom!");
      setLimit(limit + 4);
      if (refresh) {
        e.currentTarget.scrollTop = 0;
        setRefresh(false);
      }
    }
  }

  const props = {
    data: msgData,
    handleScroll: handleScroll,
    isLoadingInitialData: isLoadingInitialData
    // pagination: {
    //   total: total,
    //   page: page,
    //   setPage: setPage,
    //   limit: 5
    // }
  };
  return (
    <>
      <BoxContentTitleTextView {...props} />
      {/*<Pagination {...props.pagination} />*/}
    </>
  );
};

export default Home;
