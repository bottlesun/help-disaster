"use client";
import React, { useEffect, useRef } from "react";
import { DisasterMessageData } from "@/_types/disaster-message.api.type";
import {
  ItemContainer,
  itemScrollClass,
  ItemTopButtonActive,
  ItemTopButtonWrapper,
} from "@/_components/common/box/box.style";
import DisasterTitle from "@/_components/disaster/DisasterTitle";
import BoxBottomTopButton from "@/_components/common/box/BoxBottomTopButton";
import DisasterScrollItem from "@/_components/disaster/DisasterScroll-Item";
import Scrollbars from "react-custom-scrollbars-2";
import { cx } from "../../../styled-system/css";
import useStatesHook from "@/_hooks/useStates.hook";

export interface HomeDisasterState {
  data: DisasterMessageData[];
  isLoading: boolean;
  scrolling: boolean;
  bottomScroll: boolean;
  page: number;
}

const HomeDisaster = () => {
  const scrollRef = useRef<Scrollbars>(null);
  const [state, setStates] = useStatesHook<HomeDisasterState>({
    data: [],
    isLoading: false,
    scrolling: false,
    bottomScroll: false,
    page: 1,
  });
  const { data, isLoading, scrolling, bottomScroll, page } = state;

  const handleTopScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollToTop();
      setStates({ scrolling: false });
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    setStates({ bottomScroll: false });
    if (scrollRef.current.getScrollTop() === 0) {
      setStates({ scrolling: false });
    }
    if (scrollRef.current.getScrollTop() > 5) {
      setStates({ scrolling: true });
    }
    if (scrollRef.current.getValues().top === 1) {
      setStates({ bottomScroll: true, page: page + 1 });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (page >= 6) return alert("최대 50개까지만 불러올 수 있습니다.");

      setStates({ isLoading: true });

      const res = await fetch(`/api/disaster?pageNo=${page}`);
      const resData = await res.json();
      if (!resData.data) return alert("금일 데이터가 더 이상 없습니다.");

      const combinedData = [...data, ...resData.data].filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.SN === item.SN),
      );

      setStates({
        data: page === 1 ? resData.data : combinedData,
        isLoading: false,
      });
    };

    void fetchData();
  }, [page]);

  return (
    <section className={ItemContainer}>
      <DisasterTitle
        handleTopScroll={handleTopScroll}
        setStates={setStates}
        isLoading={isLoading}
        dataLength={data?.length || 0}
      />
      <Scrollbars
        ref={scrollRef}
        autoHide
        universal
        autoHideTimeout={1000}
        autoHideDuration={300}
        autoHeight
        autoHeightMax={"calc(100vh - 270px)"}
        className={cx(scrolling && itemScrollClass)}
        onScroll={handleScroll}
      >
        <DisasterScrollItem isLoading={isLoading} data={data} />
      </Scrollbars>

      <div
        className={cx(
          ItemTopButtonWrapper,
          !bottomScroll && ItemTopButtonActive,
        )}
      >
        {!scrolling ? null : data?.length === 0 ? null : (
          <BoxBottomTopButton onClick={handleTopScroll} />
        )}
      </div>
    </section>
  );
};

export default HomeDisaster;
