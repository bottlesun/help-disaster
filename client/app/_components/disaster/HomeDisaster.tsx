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
    const controller = new AbortController(); // AbortController 생성

    const fetchData = async () => {
      if (page >= 6) return alert("최대 50개까지만 불러올 수 있습니다.");

      setStates({ isLoading: true });

      try {
        const res = await fetch(`/api/disaster?pageNo=${page}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");

        const resData = await res.json();
        if (!resData.data) {
          setStates({ isLoading: false });
          return alert("금일 데이터가 더 이상 없습니다.");
        }

        const combinedData = [...data, ...resData.data].filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.SN === item.SN),
        );

        setStates({
          data: page === 1 ? resData.data : combinedData,
          isLoading: false,
        });
      } catch (error: unknown) {
        if (error instanceof DOMException && error.name === "AbortError") {
          console.log("요청이 중단되었습니다.");
          // alert("요청이 중단되었습니다.");
        } else {
          if (error instanceof Error) {
            alert(error.message);
          } else {
            alert("데이터를 불러오는 데 실패했습니다.");
          }
          setStates({ isLoading: false });
        }
      }
    };

    void fetchData();
    return () => {
      controller.abort(); // 요청 중단
    };
  }, [page]);

  // FCM 토큰 초기화
  // useEffect(() => {
  //   const initFCM = async () => {
  //     try {
  //       await requestNotificationPermission(); // 알림 권한 요청
  //       const token = await getFirebaseToken();
  //       if (token) {
  //         // console.log(token);
  //       }
  //     } catch (error) {
  //       console.error("Error initializing FCM:", error);
  //     }
  //   };
  //
  //   if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  //     void initFCM();
  //   } else {
  //     console.warn(
  //       "Firebase Messaging은 지원되지 않는 환경에서 실행되었습니다.",
  //     );
  //   }
  // }, []);

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
