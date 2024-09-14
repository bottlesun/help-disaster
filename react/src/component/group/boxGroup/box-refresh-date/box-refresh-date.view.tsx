import { Dayjs } from "dayjs";
import React from "react";
import { IoIosRefresh } from "react-icons/io";
import { ItemRefreshDateStyle } from "../../../common/box/box.style";

export type BoxTitleDateViewProps = {
  onClick: any;
  date: Dayjs | null | string;
};
const BoxRefreshDateView = ({ date, onClick }: BoxTitleDateViewProps) => {
  return (
    <ItemRefreshDateStyle onClick={onClick}>
      <IoIosRefresh />
      {date as string} 기준
    </ItemRefreshDateStyle>
  );
};

export default BoxRefreshDateView;
