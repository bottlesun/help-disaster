import {useMsgDataStore} from "@stores/useMsgData.store";
import React, {useEffect, useRef, useState} from "react";
import Scrollbars from "react-custom-scrollbars-2";
import BoxContentTitleTextView from "../../molecules/boxGroup/box-content-title-text.view";
import {useGetDisasterInfinite} from "../../../api/useDisaster.api";


const Home = () => {
  const {msgData, setMsgData} = useMsgDataStore();

  const scrollRef = useRef<Scrollbars>(null);
  const [limit, setLimit] = useState(8);
  const [refresh, setRefresh] = useState(false);
  const [scrollLocation, setScrollLocation] = useState(0);
  const {data, mutate, isLoadingInitialData} = useGetDisasterInfinite({limit});


  useEffect(() => {
    if (!data) return;
    setMsgData(data[0]);
    mutate();
  }, [data, limit, refresh]);


  function handleScroll() {
    const scroll = scrollRef.current;
    const scrollValue = scrollRef.current?.getValues();
    if (!scroll) return;
    if (!scrollValue) return;

    const thisScrollHeight = Math.ceil(scrollValue.scrollTop) + scrollValue.clientHeight;
    const scrollMaxHeight = scrollValue.scrollHeight;

    if (scrollValue.scrollTop === 0) {
      setScrollLocation(Number(scrollValue.scrollTop));
    } else {
      if (scrollLocation <= 1) setScrollLocation(Number(scrollValue.scrollTop));
    }

    if (thisScrollHeight === scrollMaxHeight) {
      console.log("scroll bottom!", isLoadingInitialData, data);
      if (!data) return;
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
    dateProps: {
      limit: limit,
      setLimit: setLimit,
      refresh: refresh,
      setRefresh: setRefresh
    }
  };
  return <BoxContentTitleTextView {...props} />

};

export default Home;
