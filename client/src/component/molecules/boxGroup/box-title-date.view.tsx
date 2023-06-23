import React from "react";
import BoxTitleView from "../../atoms/box/box-title.view";
import { ItemTitleDateStyle } from "../../atoms/box/box.style";
import BoxRefreshDate from "./box-refresh-date/box-refresh-date";

const BoxTitleDateView = () => {
  return (
    <ItemTitleDateStyle>
      <BoxTitleView>실시간 재난상황전파 메시지</BoxTitleView>
      <BoxRefreshDate />
    </ItemTitleDateStyle>
  );
};

export default BoxTitleDateView;
