import React, {useEffect, useRef, useState} from "react";
import Scrollbars from "react-custom-scrollbars-2";
import BoxContentTitleTextView from "../group/boxGroup/box-content-title-text.view";
import {useGetDisasterInfinite} from "../../api/useDisaster.api";
import {RowData} from "@type/api.type";


const Home = () => {
  const scrollRef = useRef<Scrollbars>(null);
  const [pageNo, setPageNo] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [scrollLocation, setScrollLocation] = useState(0);
  const [msgData, setMsgData] = useState<RowData[]>([]);
  const [firstRender, setFirstRender] = useState(true);
  const {data, isLoading} = useGetDisasterInfinite({pageNo});

  const handleScroll = () => {
    console.log("scrolling");
    const scroll = scrollRef.current;
    const scrollValue = scrollRef.current?.getValues();
    if (!scroll || !scrollValue) return;

    const thisScrollHeight = Math.ceil(scrollValue.scrollTop) + scrollValue.clientHeight;
    const scrollMaxHeight = scrollValue.scrollHeight;

    if (!isLoading && thisScrollHeight >= scrollMaxHeight) {
      if (pageNo === 6) return alert("최대 50개의 데이터만 불러올 수 있습니다.");
      loadMoreData();
      const uniqueData = data.filter(item => !msgData.some(msgItem => msgItem.md101_sn === item.md101_sn));
      if (uniqueData.length > 0) {
        setMsgData([...msgData, ...uniqueData]);
      }
    }

    // 스크롤 위치가 이전과 같지 않을 때만 업데이트
    if (Math.abs(scrollLocation - scrollValue.scrollTop) > 1) {
      setScrollLocation(scrollValue.scrollTop);
    }
  };


  /**
   * @name loadMoreData
   * @description page number 를 증가시키는 함수
   * */
  function loadMoreData() {
    if (pageNo === 6) return;
    setPageNo((pageNo) => pageNo + 1);
  }

  /**
   * @name handleTopScroll
   * @description 스크롤을 최상단으로 이동시키는 함수
   * */
  function handleTopScroll() {
    const scroll = scrollRef.current;
    if (!scroll) return;

    return scrollRef.current.scrollTop(0);
  }

  function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;

    return function executedFunction(...args: Parameters<T>) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }


  const debouncedHandleScroll = debounce(handleScroll, 100);

  useEffect(() => {
    if (!data) return;
    if (refresh) {
      setMsgData(data);
      setRefresh(false);
      const scroll = scrollRef.current;
      if (!scroll) return;

      scrollRef.current.scrollTop(0);
    }
  }, [refresh]);

  useEffect(() => {
    if (firstRender && !isLoading) {
      setMsgData(data);
      data && setFirstRender(false);
    }
  }, [isLoading]);


  const props = {
    data: msgData,
    handleScroll: debouncedHandleScroll,
    handleTopScroll: handleTopScroll,
    isLoading: isLoading,
    ref: scrollRef,
    scrollLocation: scrollLocation,
    dateProps: {
      pageNo,
      setPageNo,
      refresh,
      setRefresh,
    }
  };

  return <BoxContentTitleTextView {...props} />

};

export default Home;
