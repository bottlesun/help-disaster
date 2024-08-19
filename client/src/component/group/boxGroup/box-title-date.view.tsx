import React from "react";
import BoxRefreshDate, {BoxTitleDateViewProps} from "./box-refresh-date/box-refresh-date";
import BoxTitleView from "../../common/box/box-title.view";
import {ItemTitleDateStyle} from "../../common/box/box.style";



const BoxTitleDateView = ({...props}:BoxTitleDateViewProps) => {
  return (
    <ItemTitleDateStyle>
      <BoxTitleView>실시간 재난상황전파 메시지</BoxTitleView>
      <BoxRefreshDate {...props} />
    </ItemTitleDateStyle>
  );
};

export default BoxTitleDateView;
