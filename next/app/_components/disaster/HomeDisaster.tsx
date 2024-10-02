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

interface HomeDisasterProps {
  initialData: DisasterMessageData[];
}

export interface HomeDisasterState {
  data: DisasterMessageData[];
  isLoading: boolean;
  scrolling: boolean;
  bottomScroll: boolean;
  limit: number;
}

const HomeDisaster = ({ initialData }: HomeDisasterProps) => {
  const scrollRef = useRef<Scrollbars>(null);
  const [state, setStates] = useStatesHook<HomeDisasterState>({
    data: initialData,
    isLoading: false,
    scrolling: false,
    bottomScroll: false,
    limit: 10,
  });
  const { data, isLoading, scrolling, bottomScroll, limit } = state;

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
      setStates({ bottomScroll: true });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setStates({ isLoading: true });

      const res = await fetch(
        `${process.env.BASE_URL}/api/disaster?numOfRows=${limit}`,
      );
      const resData = await res.json();
      setStates({ data: resData.data });
      setTimeout(() => {
        setStates({ isLoading: false });
      }, 800);
      // setIsLoading(false);
    };

    void fetchData();
  }, [limit]);

  return (
    <section className={ItemContainer}>
      <DisasterTitle isLoading={isLoading} dataLength={data?.length || 0} />
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
        <DisasterScrollItem
          setStates={setStates}
          isLoading={isLoading}
          data={data}
        />
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
