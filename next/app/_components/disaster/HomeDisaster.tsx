"use client";
import React, { ForwardedRef, forwardRef } from "react";
import { DisasterMessageData } from "@/_types/disaster-message.api.type";
import { removeTrailingValues } from "@/_utils/textFilter";
import {
  ItemBox,
  ItemContainer,
  ItemContent,
  ItemLocation,
  ItemText,
} from "@/_components/common/box/box.style";
import DisasterTitle from "@/_components/disaster/DisasterTitle";
import BoxTitle from "@/_components/common/box/BoxTitle";
import SpinnerView from "@/_components/common/spinner/spinner.view";
import BoxEmpty from "@/_components/common/box/BoxEmpty";
import dynamic from "next/dynamic";
import Scrollbars from "react-custom-scrollbars-2";

const ScrollbarsComponent = dynamic(() => import("react-custom-scrollbars-2"), {
  ssr: false,
});

interface HomeDisasterProps {
  data: DisasterMessageData[];
  isLoading?: boolean;
  handleScroll?: () => void;
  handleTopScroll?: () => void;
}

const HomeDisaster = forwardRef(
  (
    { data, isLoading, handleScroll, handleTopScroll }: HomeDisasterProps,
    ref: ForwardedRef<Scrollbars>,
  ) => {
    // const res = await fetch("/api/disaster");
    // console.log(data);
    return (
      <section className={ItemContainer}>
        <DisasterTitle isLoading={false} dataLength={data?.length || 0} />
        <ScrollbarsComponent
          ref={ref}
          autoHide
          universal
          autoHideTimeout={1000}
          autoHideDuration={300}
          autoHeight
          autoHeightMax={"calc(100vh - 330px)"}
          onScroll={handleScroll}
        >
          <div className={ItemContent}>
            {data?.length === 0 && <BoxEmpty />}
            {data?.length !== 0 && isLoading && <SpinnerView />}
            {data?.length !== 0 &&
              data?.map((item) => {
                return (
                  <div className={ItemBox} key={item.SN}>
                    <BoxTitle
                      text={`[${item.EMRG_STEP_NM}] ${item.DST_SE_NM} 발신 메시지`}
                    />

                    <p className={ItemText}>
                      {removeTrailingValues(item.MSG_CN)}
                    </p>
                    <div className={ItemLocation}>
                      <p>{item.RCPTN_RGN_NM} </p>
                      <p>{item.REG_YMD}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </ScrollbarsComponent>
      </section>
    );
  },
);
HomeDisaster.displayName = "HomeDisaster";

export default HomeDisaster;
