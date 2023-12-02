import { useMsgDataStore } from "@stores/useMsgData.store";
import { RowData } from "@type/api.type";
import { scrollFetcher } from "@utils/fetcher";
import React, {useEffect, useState} from "react";
import Scrollbars from "react-custom-scrollbars-2";
import useSWRInfinite from "swr/infinite";
import BoxContentTitleTextView from "../../molecules/boxGroup/box-content-title-text.view";
import {AuthApi} from "../../../api/auth.api";

export const msgUrl = process.env.REACT_APP_MAIN_API_URL;
const Home = () => {
  const token = localStorage.getItem("access-token");
  const AuthAPI = new AuthApi(token as string);
  const { msgData, setMsgData } = useMsgDataStore();


  const scrollRef = React.useRef<Scrollbars>(null);
  const [limit, setLimit] = useState(8);
  const [refresh, setRefresh] = useState(false);
  const [scrollLocation, setScrollLocation] = useState(0);
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

  // useEffect(() => {
  //   (async () => {
  //     const res = await AuthAPI.getProfile();
  //     console.log(res.data,"프로필");
  //   })();
  // },[])



  function handleScroll() {
    const scroll = scrollRef.current;
    const scrollValue = scrollRef.current?.getValues();
    if (!scroll) return;
    if (!scrollValue) return;

    const thisScrollHeight = Math.ceil(scrollValue.scrollTop) + scrollValue.clientHeight;
    const scrollMaxHeight = scrollValue.scrollHeight;

    if(scrollValue.scrollTop === 0){
      setScrollLocation(Number(scrollValue.scrollTop));
    } else{
      if(scrollLocation <= 1) setScrollLocation(Number(scrollValue.scrollTop));
    }

    if (thisScrollHeight === scrollMaxHeight) {
      console.log("scroll bottom!");
      setLimit(limit + 4);
      if (refresh) {
        scroll.scrollTop(0);
        setRefresh(false);
      }
    }
  }

  function handleTopScroll() {
    const scroll = scrollRef.current;
    if (!scroll) return;

    return scrollRef.current.scrollTop(0);
  }


  const props = {
    data: msgData,
    handleScroll: handleScroll,
    handleTopScroll: handleTopScroll,
    isLoadingInitialData: isLoadingInitialData,
    ref: scrollRef,
    scrollLocation: scrollLocation,
    dateProps:{
      limit: limit,
      setLimit: setLimit,
      refresh: refresh,
      setRefresh: setRefresh
    }
  };
  return (
    <>
      <BoxContentTitleTextView {...props} />
    </>
  );
};

export default Home;
