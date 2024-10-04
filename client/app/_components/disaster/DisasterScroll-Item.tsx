import React from "react";
import { DisasterMessageData } from "@/_types/disaster-message.api.type";
import {
  ItemBox,
  ItemContent,
  ItemLocation,
  ItemText,
} from "@/_components/common/box/box.style";
import BoxEmpty from "@/_components/common/box/BoxEmpty";
import BoxTitle from "@/_components/common/box/BoxTitle";
import { removeTrailingValues } from "@/_utils/textFilter";
import dayjs from "dayjs";

interface DisasterScrollProps {
  data: DisasterMessageData[];
  isLoading?: boolean;
}

const DisasterScrollItem = ({ data, isLoading }: DisasterScrollProps) => {
  return (
    <div className={ItemContent}>
      {data?.length == 0 && !isLoading && <BoxEmpty />}
      {data?.length !== 0 &&
        data?.map((item) => {
          return (
            <div className={ItemBox} key={item.SN}>
              <BoxTitle
                text={`[${item.EMRG_STEP_NM}] ${item.DST_SE_NM} 발신 메시지`}
              />
              <p className={ItemText}>{removeTrailingValues(item.MSG_CN)}</p>
              <div className={ItemLocation}>
                <p>{item.RCPTN_RGN_NM} </p>
                <p>{dayjs(item.REG_YMD).format("YYYY-MM-DD HH:mm:ss")}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DisasterScrollItem;
