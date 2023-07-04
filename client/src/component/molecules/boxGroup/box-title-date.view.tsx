import React from "react";
import BoxTitleView from "../../atoms/box/box-title.view";
import { ItemTitleDateStyle } from "../../atoms/box/box.style";
import BoxRefreshDate, {BoxTitleDateViewProps} from "./box-refresh-date/box-refresh-date";



const BoxTitleDateView = ({...props}:BoxTitleDateViewProps) => {
  return (
    <ItemTitleDateStyle>
      <BoxTitleView>실시간 재난상황전파 메시지</BoxTitleView>
      <BoxRefreshDate {...props} />
    </ItemTitleDateStyle>
  );
};

export default BoxTitleDateView;
